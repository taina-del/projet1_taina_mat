const dropzone = document.getElementById("drop-zone");
const fileInput = document.getElementById("fileElem");

dropzone.addEventListener("click", () => {
    fileInput.click();
});

dropzone.addEventListener("mouseover", () => {
    dropzone.classList.add("mouseon");
});

dropzone.addEventListener("mouseout", () => {
    dropzone.classList.remove("mouseon")
});

dropzone.addEventListener("dragover", (event) => {

    event.preventDefault();
    dropzone.classList.add("dragover");
    dropzone.classList.add("mouseon");
});

dropzone.addEventListener("dragleave", (event) => {
    dropzone.classList.remove("dragover");
    dropzone.classList.remove("mouseon")
});

dropzone.addEventListener("drop", (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files;
    if (file.length == 1) {
        alert(`File download ${file[0].name}`);
    }else{
        alert("Only one file can be process at time")
    }
});

