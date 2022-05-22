import FileHandler from "./fs.js";
import FolderMapping from "./folder-mapping.js";

class Configuration {
    constructor() {
        this.folderMapping = new FolderMapping();
        this.fileHandler = new FileHandler("config.json", "");
    }

    get parseJSON() {
        return JSON.parse(this.fileHandler.readFileSync());
    }

    isConfigurationCompleted() {
        if(this.fileHandler.readFileSync() == "") return false;

        return true;
    }

    addConfiguration() {
        return new Promise(async (resolve, reject) => {
            await folderMapping.mapFolders();
            const folders = folderMapping.toString();
    
            fileHandler.writeFileSync(folders);

            resolve();
        })
    }
}

export default Configuration;