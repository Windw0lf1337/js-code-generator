import Node from "./code-node.js";

function createCodeNode({type, attributes, text, name}) {
    const node = new Node(type, name);

    node
    .setAttributes(attributes)
    .setTextContent(text);

    return node;
}   

export default createCodeNode;