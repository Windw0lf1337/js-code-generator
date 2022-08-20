//import { dirname } from 'path';
//import { fileURLToPath } from 'url';

import FS from "./fs.js";
import FolderMapping from "./folder-mapping.js";

//global.__dirname = dirname(fileURLToPath(import.meta.url));

(async () => {
    const fs = new FS("config");

    const { source, destination } = JSON.parse(await fs.readFile("folder-pairs.json"));

    const folderPairs = new FolderMapping(source, destination);

    for(let pair in folderPairs) {
        console.log("pair");console.log(pair);
    }

    //console.log("source");console.log(source);
    //console.log("destination");console.log(destination);
    /*const folderPairs = configuration.parseJSON;

    function filterForJSFiles(file) {
        return file.split(".")[1] == "js" ? true : false;
    }

    Object.keys(folderPairs).map(async source => {
        const destination = folderPairs[source];

        const fs = new FS({path: destination});

        const [error, files] = await fs.readdir();

        if(error) {
            throw new Error(error);
        }

        const jsFiles = files.filter(file => filterForJSFiles(file));
        const fileNames = jsFiles.map(file => file.split("")[0]);
    })*/
})();