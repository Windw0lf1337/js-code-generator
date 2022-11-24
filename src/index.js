import FS from "./utils/fs.js";
import mapFiles from "./file-mapping.js";
import Component from "./component/component.js";

const codeGenerator = (configFile) => (
    new Promise(async (resolve, reject) => {
        const { source, destination } = JSON.parse(await FS.readFile(configFile));

        const filePairs = await mapFiles(source, destination);

        for(let filePair of filePairs) {
            const html = await FS.readFile(filePair.sourcePath);

            let component = new Component(html, 123);

            const regex = new RegExp("\\/\\/\\scode\\sstarts\\shere\\s([a-zA-Z0-9\\-_]*)\\.html([\\s\\S]*)([\\n]*)\\s*\\/\\/\\scode\\sends\\shere");
            
            let codeWithComments = 
                `// code starts here ${filePair.sourceFile}\n` + 
                component.toString() + 
                "\t// code ends here";
            
            FS.replaceFileContent(filePair.destinationPath, regex, codeWithComments);
        }
        
        resolve();
    })
)

export default codeGenerator;

// paste code here h3.html

/*

const name = generateUniqueName(replaceSpecialChars("button--login"), ["buttonLogin1"]);
    console.log("name: ", name);
*/
