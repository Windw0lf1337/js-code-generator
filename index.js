//import { dirname } from 'path';
//import { fileURLToPath } from 'url';

import Config from "./configuration.js";
import FS from "./fs.js";

//global.__dirname = dirname(fileURLToPath(import.meta.url));

(async () => {
    const config = new Config();

    if(!config.isConfigured) 
        await config.createConfig();
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