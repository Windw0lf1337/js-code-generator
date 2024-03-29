import createCodeSnippet from "./create-code-snippet.js";
import createDOM from '../dom/create-dom.js';

import generateUniqueName from "../helpers/generate-unique-name.js";
import { replaceSpecialChars } from '../helpers/strings.js'

class Component {
  #html;
  #rootId;
  #code = [];
  #names = [];

  constructor(html, rootId) {
    this.#html = html;
    this.#rootId = rootId;

    this.#init();
  }

  toArray() {
    return this.#code;
  }

  toString() {
    let codeAsString = "";

    for(let codeSnippet of this.#code) {
        codeAsString += codeSnippet;
    }

    return codeAsString;
  }

  #init() {
    const firstDomNode = createDOM(this.#html);

    this.#code.push(`\tconst component = document.querySelector("#${this.#rootId}");\n`);

    this.#generateCode(firstDomNode, "component");
  }

  #generateCode(domNode, parentName) {
    const nodeAttribute = this.#getNodeAttribute(domNode);
    const name = generateUniqueName(replaceSpecialChars(nodeAttribute), this.#names);
    
    this.#names.push(name);

    const codeSnippet = createCodeSnippet({
      type: domNode.type,
      attributes: domNode.getAllAttributes(),
      text: domNode.text,
      name: name,
      parent: parentName
    }); 

    this.#code.push(codeSnippet.toString());

    if(domNode.hasChildNodes()) {
      for(const childNode of domNode.children) {
        this.#generateCode.call(this, childNode, codeSnippet.name);
      }
    }
  }

  #getNodeAttribute(node) {
    const {id, name: nodeName, classList, type} = node;

    if(id) return id;
    if(nodeName) return nodeName;
    if(classList.length > 0) return classList[0];
    if(type) return type.toLowerCase();
  }
}

export default Component;

/*#generator(firstDomNode) {
    this.#code.push(`const component = document.querySelector("#${this.#rootId}");`);

    const name = this.generateName(firstDomNode);
    this.#names.push(name);

    const codeSnippet = createCodeSnippet({
      type: firstDomNode.type,
      attributes: firstDomNode.getAllAttributes(),
      text: firstDomNode.text,
      name: name,
      parent: "component"
    }); 

    this.#code = [...this.#code, ...codeSnippet.toArray()];
    
    return function generate(parentDomNode = firstDomNode, parentCodeSnippet = {name: "component"}) {
      if(parentDomNode.hasChildNodes()) {
        for(const [index, childNode] of parentDomNode.children.entries()) {
          
          const name = this.generateName(childNode);
          this.#names.push(name);
          
          const codeSnippet = createCodeSnippet({
            type: childNode.type,
            attributes: childNode.getAllAttributes(),
            text: childNode.text,
            name: name,
            parent: parentCodeSnippet.name
          }); 

          this.#code = [...this.#code, ...codeSnippet.toArray()];

          generate.call(this, childNode, codeSnippet);
        }
      }
    }
  }*/

