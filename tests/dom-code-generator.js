import CodeGenerator from "../code-generator.js";

function codeGeneratorTest() {
    const codeGenerator = new CodeGenerator(`<div id="myContainer" class="container"><header><h1>Hello</h1></header></div>`, "root");
    console.log(codeGenerator.toString());   
}

codeGeneratorTest();