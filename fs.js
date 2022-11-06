import fs from "fs";
import path from 'path';
import { promisify } from 'util';

class FS {
  static readFile(path) {
    const fsReadFile = promisify(fs.readFile);

    return fsReadFile(path, "utf-8");
  }

  static writeFile(path, data) {
    const FswriteFile = promisify(fs.writeFile);

    return FswriteFile(path, data);
  }

  static getAllFiles(path, extension = null) {
    return new Promise(async (resolve, reject) => {
      const readDir = await readAllDirs(path, extension);
      const files = await readDir();

      resolve(files);
    })
  }

  static replaceFileContent(path, searchstring, data) {
    return new Promise(async (resolve, reject)=> {
      let fileContent = await FS.readFile(path);

      fileContent = fileContent.replace(searchstring, data);

      await FS.writeFile(path, fileContent);

      resolve();
    })
  }
 }

 function readAllDirs(folder, extension=null) {
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

 /*
if(extension) {
                 return fileList.push(resolvedPath);

                 if(item.split(".")[1] == "js") {

                 }
 */

}

export default FS;
