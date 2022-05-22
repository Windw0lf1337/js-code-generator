import fs from "fs";

export default function pathValidator(path) {
    return new Promise((resolve, reject) => {
        fs.lstat(path, (err, status) => {
            if(err) {
                resolve(err, null);
                return;
            }

            if(path.isFile()) resolve(null, `is a file`);
            if(path.isDirectory()) resolve(null, "is a Directory")
        })
    })
}