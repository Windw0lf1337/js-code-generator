import fs from 'fs';
import UserInterface from './user-interface.js';

class FolderMapping {
    #folders;

    constructor() {
        this.#folders = [];
        this.userInterface = new UserInterface();
    }

    get folders() {
        return this.#folders;
    }

    toString() {
        return JSON.stringify(this.#folders);
    }

    async mapFolders() {
        const source = await this.userInterface.readline("source folder path: ");
        if(!(await this.isPathValid(source))) {
            this.userInterface.writeline("source path is invalid");
            this.mapFolders();
        } 

        const destination = await this.userInterface.readline("destination folder path: ");
        if(!(await this.isPathValid(destination))) {
            this.userInterface.writeline("destination path is invalid");
            this.mapFolders();
        } 

        this.#folders.push({
            source,
            destination
        })
    
        do {
            var nextFolder = await this.userInterface.readline("next folder pair (yes/no): ");
        } while(nextFolder === "yes" || nextFolder === "no");

        if(nextFolder === "yes") {
            this.mapFolders();
        }
    }

    async isPathValid(itemPath) {
        return new Promise(async (resolve, reject) => {
            try {
                const checkPath = await fs.statSync(itemPath);
    
                resolve(true);
            } catch(error) {
                resolve(false);
            }
        })
    }
}

export default FolderMapping;