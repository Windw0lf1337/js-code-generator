import CodeSnippet from "./code-snippet.js";

function createCodeSnippet({type, attributes, text, name, parent}) {
    const codeSnippet = new CodeSnippet(type, name);

    codeSnippet
    .setAttributes(attributes)
    .setTextContent(text)
    .appendTo(parent)

    return codeSnippet;
}   

export default createCodeSnippet;