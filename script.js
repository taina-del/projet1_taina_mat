function dropHandler(event) {
    console.log("drop");
    event.preventDefault();
    if (event.dataTransfer.items) {
        for (let i = 0; i < event.dataTransfer.items.length; i++) {
            if (event.dataTransfer.items[i].kind === "file") {
                const file = event.dataTransfer.items[i].getAsFile();
                console.log(file);
            } else {
                console.log("not a file");
            }
        }
    }
}

function dragOverHandler(event) {
    console.log("drag over");
    event.preventDefault();
}