//import { dirname } from 'path';
//import { fileURLToPath } from 'url';

import FS from "./fs.js";
import mapFiles from "./file-mapping.js";
import Component from "./component.js";

//global.__dirname = dirname(fileURLToPath(import.meta.url));

import generateUniqueName from "./helpers/generate-unique-name.js";
import { replaceSpecialChars } from './helpers/strings.js'

(async () => {
    /*const { source, destination } = JSON.parse(await FS.readFile("config/folder-pairs.json"));

    const folderPairs = await mapFiles(source, destination);

    for(let folderPair of folderPairs) {
        console.log("folderPair", folderPair)
        const html = await FS.readFile(folderPair.source);
       
        let code = new CodeGenerator(html, 123);
        //console.log("code", code.toString())

        //FS.replaceFileContent(folderPair.destination, "// paste code here h3.html", code.toString())

        // paste code here h3.html
        //const regex = new RegExp("\\/\\/\\scode\\sstarts\\shere\\s([a-zA-Z0-9\-_]*)\\.html\\n*\\/\\/\\scode\\sends\\shere")
        const regex = new RegExp("\\s*\\/\\/\\scode\\sstarts\\shere\\s([a-zA-Z0-9\-_]*)\\.html\\n*\\s*\\/\\/\\scode\\sends\\shere"); 
        const fileContent = await FS.readFile(folderPair.destination);

        let newCode = "\n\t//code start here h1.html\n" + code.toString() + "\n\t//code ends here"
        const newFileConent = fileContent.replace(regex, newCode);
        console.log("regex", newFileConent);
        //FS.replaceFileContent(folderPair.destination, new RegExp("\\/\\/\\scode\\sstarts\\shere\\s([a-zA-Z0-9\-_]*)\\.html\\n*\\/\\/\\scode\\sends\\shere"), "BBBB")
    }*/

    // start here
    const { source, destination } = JSON.parse(await FS.readFile("config/folder-pairs.json"));

    const filePairs = await mapFiles(source, destination);

    for(let filePair of filePairs) {
        const html = await FS.readFile(filePair.sourcePath);

        let component = new Component(html, 123);

        const regex = new RegExp("\\/\\/\\scode\\sstarts\\shere\\s([a-zA-Z0-9\\-_]*)\\.html([\\s\\S]*)([\\n]*)\\s*\\/\\/\\scode\\sends\\shere");
        
        let codeWithComments = 
            `// code starts here ${filePair.sourceFile}\n` + 
            component.toString() + 
            "\t// code ends here";
        
        FS.replaceFileContent(filePair.destinationPath, regex, codeWithComments);
    }
})();

// paste code here h3.html

/*

const name = generateUniqueName(replaceSpecialChars("button--login"), ["buttonLogin1"]);
    console.log("name: ", name);
*/
