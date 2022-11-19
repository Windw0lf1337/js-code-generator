import { JSDOM } from "jsdom";
import DOMNode from "./dom-node.js";

function createDOM(html) {
    const document = new JSDOM(html).window.document;
    const firstChild = document.body.firstChild;
    
    const firstDOMNode = new DOMNode(firstChild);

    return firstDOMNode;
}

export default createDOM;