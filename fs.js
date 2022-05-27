import fs from "fs";

class FS {
  constructor(path) {
    this.path = path;
  }

  readFile(filename) {
    return new Promise((resolve, reject) => {
      fs.readFile(
        `${this.path ? this.path + "/" : ""}${filename}`,
        "utf-8",
        (error, data) => resolve(error, data)
      )
    })
  }

  writeFile(filename, data) {
    return new Promise((resolve, reject) => {
      fs.writeFile(
        `${this.path ? this.path + "/" : ""}${filename}`,
        data,
        (error) => resolve(error, null)
      );
    })
  }

  getAllFiles(extension = null) {
    return new Promise(async (resolve, reject) => {
      const readDir = await this.#partialReadDir(this.path, extension);
      const files = await readDir();

      resolve(null, files);
    })
  }

  #partialReadDir(folderName, extension=null) {
    let fileList = [];

    return async function readDir() {
      const args = Array.from(arguments);

      if(args.length == 1) folderName = args[0];
      if(args.length > 1) throw new Error("Too many arguments");

      const items = fs.readdirSync(folderName);

      items.forEach(item => {
        const checkItem = fs.statSync(path.resolve(folderName, item));
        const resolvedPath = path.resolve(folderName, item)

        if(checkItem.isDirectory()) {
          return readDir(resolvedPath);
        } else {
            if(extension) {
              if(item.split(".")[1] == extension) fileList.push(resolvedPath)
            } else {
              fileList.push({
                filename: item,
                path: resolvedPath
              });
            }
        }
      })

      return fileList;
    }
 }

 /*
if(extension) {
                 return fileList.push(resolvedPath);

                 if(item.split(".")[1] == "js") {

                 }
 */

}

export default FS;
