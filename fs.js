import fs from "fs";

class FS {
  constructor({path = null, filename = null}) {
    this.filename = filename;
    this.path = path;
  }

  readFileSync() {
    return new Promise((resolve, reject) => {
      fs.readFile(
        `${this.path ? this.path + "/" : ""}${this.filename}`,
        "utf-8",
        (error, data) => resolve(error, data)
      )
    })
  }

  writeFileSync(data) {
    return new Promise((resolve, reject) => {
      fs.writeFile(
        `${this.path ? this.path + "/" : ""}${this.filename}`,
        data,
        (error) => resolve(error, null)
      );
    })
  }

  readdir() {
    return new Promise((resolve, reject) => {
      fs.readdir(this.path, (err, files) => {
        resolve(error, files);
      })
    })
  }
}

export default FS;
