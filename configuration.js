import FileHandler from "./fs.js";
import FolderMapping from "./folder-mapping.js";

class Config {
    #init;
    #folderPaths;
    #filePaths;

    constructor() {
        this.folderMapping = new FolderMapping();
        this.configFolder = new FileHandler("config");
    }

    init() {
        return new Promise(async (resolve, reject) => {
            this.#folderPaths = await this.configFolder.readFile("folder-pairs.json");
            this.#filePaths = await this.configFolder.readFile("file-pairs.json");
            this.#init = true;

            resolve();
        })  
    }

    get isConfigured() {
        return this.#init && this.#folderPaths && this.#filePaths;
    }

    get folderPaths() {
        return this.#folderPaths;
    }

    get filePaths() {
        return this.#filePaths;
    }

    createConfig() {
        return new Promise(async (resolve, reject) => {
            await this.folderMapping.mapFolders();

            const folderPaths = folderMapping.folders;
            await this.configFolder.writeFile("folder-pairs.json", JSON.stringify(folderPaths));
            this.#folderPaths = folderPaths;
    
            let filePaths;

            for(let folderPath of folderPaths) {
                const destinationFolder = new FileHandler(folderPath.destination);

                const destinationFiles = await destinationFolder.getAllFiles("js");

                for(let destinationFile of destinationFiles) {
                    const fileFolder = new FileHandler(destinationFile.path);
                    const fileContent = await fileFolder.readFile(destinationFile.filename); //filePaths.push(file);

                    if(fileContent.includes("// paste code here")) { 
                        const checkComment = new RegExp("\\\/\\\/(\\\s*)paste(\\\s*)code(\\\s*)here(\\\s*).*\\\.(html)$", "i");

                        if(fileContent.search(checkComment)) {
                            const checkSourceHtmlFile = new RegExp("\\\w*\\\.(html)$", "i")
                            const htmlFileName = fileContent.search(checkSourceHtmlFile);

                            const sourceFolder = new FileHandler(folderPath.source);

                            const sourceFiles = await sourceFolder.getAllFiles("html");

                            for(let sourceFile of sourceFiles) {
                                if(sourceFile.filename == htmlFileName) {
                                    filePaths.push({
                                        source: sourceFile.source,
                                        destination: destinationFile.source
                                    })
                                }
                            }
                        }
                    }
                }
            }

            await this.configFolder.writeFile("file-pairs.json", JSON.stringify(filePaths));
            this.#filePaths = filePaths;

            resolve();
        })
    }
}

export default Config;