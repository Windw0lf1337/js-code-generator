import UserInterface from './user-interface.js';
import pathValidator from './path-validator.js';

class FolderMapping {
    #folders;

    constructor() {
        this.userInterface = new UserInterface();
        this.pathValidator = pathValidator;
    }

    get folders() {
        return this.#folders;
    }

    toString() {
        return JSON.stringify(this.#folders);
    }

    async mapFolders() {
        const source = await this.userInterface.readline("source folder path: ");
        if(this.isPathValid(source)) {
            this.userInterface.writeline("source path is invalid");
            this.mapFolders();
        }

        const destination = await this.userInterface.readline("destination folder path: ");
        if(this.isPathValid(destination)) {
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

    isPathValid(path) {
        const [error, success] = this.pathValidator(path);

        if(error || success === "is a file") {
            return false;
        } 

        return true;
    }
}

export default FolderMapping;