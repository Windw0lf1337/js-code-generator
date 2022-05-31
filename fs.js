import fs from "fs";
import path from 'path';

class FS {
  constructor(folderPath) {
    this.folderPath = folderPath;
  }

  readFile(filename) {
    return new Promise((resolve, reject) => {
      fs.readFile(
        `${this.folderPath ? this.folderPath + "/" : ""}${filename}`,
        "utf-8",
        (error, data) => resolve([error, data])
      )
    })
  }

  writeFile(filename, data) {
    return new Promise((resolve, reject) => {
      fs.writeFile(
        `${this.folderPath ? this.folderPath + "/" : ""}${filename}`,
        data,
        (error, data) => resolve([error, data])
      );
    })
  }

  getAllFiles(extension = null) {
    return new Promise(async (resolve, reject) => {
      const readDir = await this.#readAllDirs(this.folderPath, extension);
      const files = await readDir();

      resolve(files);
    })
  }

  #readAllDirs(folder, extension=null) {
    let fileList = [];

    return async function readDir() {
      const args = Array.from(arguments);

      if(args.length == 1) folder = args[0];
      if(args.length > 1) throw new Error("Too many arguments");

      const items = fs.readdirSync(folder);

      for(let item of items) {
        const checkItem = await fs.statSync(path.resolve(folder, item));
        const resolvedPath = path.resolve(folder, item)

        if(checkItem.isDirectory()) {
          return readDir(resolvedPath);
        } else {
            if(extension) {
              if(item.split(".")[1] == extension) {
                console.log(fileList);
                fileList.push({
                  filename: item,
                  path: resolvedPath
                });
              }
            } else {
              fileList.push({
                filename: item,
                path: resolvedPath
              });
            }
        }
      }

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
