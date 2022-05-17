const main = document.querySelector(".main");
const addBtn = document.querySelector("#addbtn");

addBtn.addEventListener(
    "click",
    function(){
        addNote();
    }
)
const saveNote = () =>{
    const notes = document.querySelectorAll(".box textarea");
    const data = [];
    notes.forEach(
        (note) =>{
            data.push(note.value);
        }
    )
    // console.log(data);
    if(data.length==0)
    {
        localStorage.removeItem("notes");
    }
    else
       localStorage.setItem("notes", JSON.stringify(data));
}
const addNote = (text = "") =>{
    const note = document.createElement("div");
    note.classList.add("box");
    note.innerHTML = `
        <div class="tool">
            <i class="save fas fa-save"></i>
            <i class="trash fas fa-trash"></i>
        </div>
        <textarea>${text}</textarea>
    `;
    // console.log(note);
    const trash = note.querySelector(".trash");
    trash.addEventListener(
        "click",
        function(){
            note.remove();
            saveNote();
        }
        
    )
    const save = note.querySelector(".save");
    save.addEventListener(
        "click",
        function(){
            saveNote();
        }
    )
    main.appendChild(note);
    saveNote();
}
(
    function(){
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        if ( lsNotes==null)
             addNote();
        else
        {
            lsNotes.forEach(
                (lsNote)=>{
                    addNote(lsNote);
                }
            )
        }

    }
)();