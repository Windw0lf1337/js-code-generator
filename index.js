//import { dirname } from 'path';
//import { fileURLToPath } from 'url';

import FS from "./fs.js";
import mapFiles from "./file-mapping.js";
import CodeGenerator from "./code-generator.js";

//global.__dirname = dirname(fileURLToPath(import.meta.url));

(async () => {
    const { source, destination } = JSON.parse(await FS.readFile("config/folder-pairs.json"));

    const folderPairs = await mapFiles(source, destination);

    for(let folderPair of folderPairs) {
        console.log("folderPair", folderPair)
        const html = await FS.readFile(folderPair.source);
        console.log("html", html)
        let code = new CodeGenerator(html, 123);
        console.log("code");
        console.log(code.toString());

        FS.replaceFileContent(folderPair.destination, "// paste code here h3.html", code.toString())

        // paste code here h3.html
    }
})();

// paste code here h3.html