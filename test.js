import fs from "fs";
import path from 'path';

/*(async (fs, path) => {
    function readAllFiles(folderName) {
       let fileList = [];

        return async function readDir() {
            const args = Array.from(arguments);

            if(args.length == 1) folderName = args[0];
            if(args.length > 1) throw new Error("parameter overflow");

            const items = fs.readdirSync(folderName);

            items.forEach(item => {
                const checkItem = fs.statSync(path.resolve(folderName, item));
                const resolvedPath = path.resolve(folderName, item)

                if(checkItem.isDirectory()) {
                    return readDir(resolvedPath);
                } else if(item.split(".")[1] == "js") {
                    return fileList.push(resolvedPath);
                } 
            })

            return fileList;
        
        }
    };

    const readDir = await readAllFiles("test");
    const files = await readDir();

    const generatorFiles = files.filter(file => {
        const fileContent = fs.readFileSync(file);

        return fileContent.includes("// paste code here");
    })

    console.log(generatorFiles);
})(fs, path);*/