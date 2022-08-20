import FS from 'fs';

class FolderMapping {
    constructor(source, destination) {
        this.source = source;
        this.destination = destination;
    }

    async [Symbol.iterator]() {
        let sourceFiles = await new FS(this.source).getAllFiles("html");
        let destinationFiles = await new FS(this.destination).getAllFiles("js");

        let count = 0;

        return {
            next() {
                const fs = new FS(destinationFiles[count].path);
                const textContent = fs.readFile(destinationFiles[count].filename)

                const regex = new RegExp("\\/\\/\\spaste\\scode\\shere\\s([a-z]*)\\.html");
                const htmlFilename = textContent.match(regex);

                const matchedSourceFile = sourceFiles.find(sourceFile => sourceFile.filename == htmlFilename);

                const folderPairs = {source: matchedSourceFile.path, destination: destinationFiles[count].path};

                return {value: folderPairs, done: destinationFiles.length < count + 1 ? true : false};
            }
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