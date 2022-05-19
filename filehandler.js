import fs from "fs";

class FileHandler {
  constructor(filename, path) {
    this.filename = filename;
    this.path = path;
  }

  readFileSync() {
    let file = fs.readFileSync(
      `${this.path ? this.path + "/" : ""}${this.filename}`,
      "utf-8"
    );

    return file;
  }

  writeFileSync(data) {
    fs.writeFileSync(
      `${this.path ? this.path + "/" : ""}${this.filename}`,
      data
    );
  }
}

export default FileHandler;
