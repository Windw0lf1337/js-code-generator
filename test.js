import fs from "fs";

fs.readdir("test", (err, files) => {
    console.log(files);
    files.forEach(file => {
        console.log(file.split(".")[1] == "js" ? true : false);
    })
})