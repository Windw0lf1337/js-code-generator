import Configuration from "./configuration.js";
import FS from "./fs.js";

(() => {
    const configuration = new Configuration();

    if(!configuration.isConfigurationCompleted) 
        await configuration.addConfiguration();

    const folderPairs = configuration.parseJSON;

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
    })
})();