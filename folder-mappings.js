

class FolderMappings {
    #folders;

    constructor() {

    }

    get folder() {
        return this.#folders;
    }

    mapFolders(source, destination, nextFolder) {

        if(nextFolder === "yes") {
            this.mapFolders();
        }
    }
}

export default FolderMappings;