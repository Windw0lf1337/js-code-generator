import UserInterface from './user-interface.js';
import pathValidator from './path-validator.js';

class FolderMapping {
    #folders;

    constructor() {
        this.userInterface = new UserInterface();
        this.pathValidator = pathValidator;
    }

    toString() {
        return JSON.stringify(this.#folders);
    }

    mapFolders() {
        const source = this.userInterface.readLine("source folder path: ");
        if(this.isPathValid(source)) {
            this.userInterface.writeline("source path is invalid");
            this.mapFolders();
        }

        const destination = this.userInterface.readline("destination folder path: ");
        if(this.isPathValid(destination)) {
            this.userInterface.writeline("destination path is invalid");
            this.mapFolders();
        }

        this.#folders[source] = destination;
    
        do {
            var nextFolder = this.userInterface.readLine("next folder pair (yes/no): ");
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