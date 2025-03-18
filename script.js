const dropzone = document.getElementById("drop-zone");
const fileInput = document.getElementById("fileElem");
const transcriptionzone = document.getElementById("transcription");
const bttonSubmit = document.getElementById("submit");
let DropFile = null;

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
    dropzone.classList.add("mouseon");
});

dropzone.addEventListener("dragleave", () => {
    dropzone.classList.remove("mouseon")
});

dropzone.addEventListener("drop", (event) => {
    event.preventDefault();
    DropFile = event.dataTransfer.files;
    if (DropFile.length == 1) {
        alert(`File download ${DropFile[0].name}`);
    } else {
        alert("Only one file can be process at time")
    }
});

bttonSubmit.addEventListener("click", async () => {
    if (DropFile == Null) {
        alert("Please drop a file first")
    } else {
        const sendData = new FormData();
        sendData.append("file", DropFile);

        try {
            const response = await fetch("http://localhost:3000/upload", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();
            transcriptionResult.innerText = result.transcription || "Error transcribing file.";
        } catch (error) {
            console.error("Upload error:", error);
        }
    }
});