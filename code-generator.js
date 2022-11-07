import createCodeSnippet from "./create-code-snippet.js";
import createDOM from './create-dom.js';

class CodeGenerator {
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


    for(let codeLine of this.#code) {
      codeAsString += codeLine + "\n";
    }

    return codeAsString;
  }

  #init() {
    const firstDomNode = createDOM(this.#html);

    this.#code.push(`const component = document.querySelector("#${this.#rootId}");`);

    this.generateCode(firstDomNode, "component");
  }

  generateCode(domNode, parentName) {
    const name = this.generateName(domNode);
    this.#names.push(name);

    const codeSnippet = createCodeSnippet({
      type: domNode.type,
      attributes: domNode.getAllAttributes(),
      text: domNode.text,
      name: name,
      parent: parentName
    }); 

    this.#code = [...this.#code, ...codeSnippet.toArray()];

    if(domNode.hasChildNodes()) {
      for(const childNode of domNode.children) {
        this.generateCode.call(this, childNode, codeSnippet.name);
      }
    }
  }

  generateName(node) {
    const {id, name, classList, type} = node;

    if(id) {
      if(!this.#names.find(name => node?.id == name)) return id;
    }

    if(name) {
      if(!this.#names.find(name => node?.name == name)) return name;
    }

    if(classList.length > 0) {
        let nameResult = null;

        classList.forEach(className => {
            if(!nameResult) {
                if(!this.#names.find(name => className == name)) {
                    nameResult = className;
                }
            }
        })

        if(nameResult) return nameResult;
    }
    
    let nameResult = false;
    let index = 1;
    while(!nameResult) {
        const typeAndIndex = `${type}-${index}`
        const result = this.#names.find(name => name == typeAndIndex);

        if(!result) {
            nameResult = typeAndIndex;
            return nameResult;
        }

        index += 1;
    }
  }
}

export default CodeGenerator;

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

