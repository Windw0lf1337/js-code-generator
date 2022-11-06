import createDOM from "../create-dom.js";
import DOMNode from "../dom-node.js";

function domTest() {
    const firstChild = createDOM("<div>aaa<span><h1></h1></span></div>");
    
    if(firstChild.children.length > 0) {
        for(let child of firstChild.children) {
            console.log("type", child.type);

            if(child instanceof DOMNode) {
                return true;
            } else {
                console.log("unexpected type of child")
                return false;
            }
        }
    }
}

let result = domTest();

if(result) console.log("works")