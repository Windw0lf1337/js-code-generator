import FS from "./utils/fs.js";
import mapFiles from "./helpers/file-mapping.js";
import Component from "./component/component.js";

const codeGenerator = (configFile) => (
    new Promise(async (resolve, reject) => {
        const { source, destination } = JSON.parse(await FS.readFile(configFile));

        const filePairs = await mapFiles(source, destination);

        for(let filePair of filePairs) {
            let html = await FS.readFile(filePair.sourcePath);

            const placeHolderRegex = /\$\{([a-zA-Z0-9\-_=]*)\}/g;
            html = html.replaceAll(placeHolderRegex, "");

            console.log("new html", html);

            let component = new Component(html, 123);

            const regex = /\/\/\scode\sstarts\shere\s([a-zA-Z0-9\-_]*)\.html([\s\S]*)([\n]*)\s*\/\/\scode\sends\shere/g;
            
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
