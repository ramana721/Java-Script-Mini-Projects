



let color_and_text = document.querySelector(".color_and_text").children;
let input = color_and_text[1].children[0];
input.value = "#00ffa1";
let addNoteButton = document.getElementById("addNote");
let right_container = document.querySelector(".right-container-notes");
let textarea = document.querySelector("textarea");

addNoteButton.addEventListener("click", () => {
    // removeNotes();
    let color = document.getElementById("color").value;
    // let note = document.getElementById("textarea").value;
    let note = textarea.value;
    if(!note.trim()){
        alert("Cannot Add Empty Note");
        return ;
    }

    addNotes(note, color);
    textarea.value = "";
    let noNotes = document.querySelector(".notesNotAdded");
    noNotes.style.display = "none";
    // document.querySelector(".notesNotAdded").style.display = "none";

});



function addNotes(note, color) {
    // Write function to add notes on the UI
    // console.log(note, color);
    let newDiv = document.createElement("div");
    newDiv.classList = "note";
    newDiv.style.backgroundColor = color;
    newDiv.textContent = note;
    right_container.appendChild(newDiv);
}

function removeNotes() {
    // Write function to remove notes from the UI
}
