//import { dirname } from 'path';
//import { fileURLToPath } from 'url';

import FS from "./fs.js";
import mappedFolders from "./folder-mapping.js";
import DomGenerator from "./js-dom-generator.js";

//global.__dirname = dirname(fileURLToPath(import.meta.url));

(async () => {
    const { source, destination } = JSON.parse(await FS.readFile("config/folder-pairs.json"));

    const folderPairs = await mappedFolders(source, destination);

    for(let folderPair of folderPairs) {
        console.log("folderPair", folderPair)
        const html = await FS.readFile(folderPair.source);
        console.log("html", html)
        let generator = new DomGenerator(html, 123);

        FS.replaceFileContent(folderPair.destination, "// paste code here h3.html", generator.toString())

        // paste code here h3.html
    }
})();