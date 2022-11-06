import createCodeNode from "./create-code-node.js";
import createDOM from './create-dom.js';

class CodeGenerator {
  #html;
  #rootId;
  #code;

  constructor(html, rootId) {
    this.#html = html;
    this.#rootId = rootId;
    
    this.#code = [];

    this.#init();
  }

  toArray() {
    return this.#code;
  }

  toString() {
    let codeAsString;

    for(let codeLine of this.#code) {
      codeAsString += codeLine + "\n";
    }

    return codeAsString;
  }

  #init() {
    const firstDOMNode = createDOM(this.#html);

    const name = Math.floor(Math.random() * 10000);

    const generate = this.#createGenerator(firstDOMNode, name);
    generate.call(this);
  }

  #createGenerator(domNode, index) {
    this.#code.push(`const child0 = document.querySelector("#${this.#rootId}");`);

    const codeNode = createCodeNode({
      type: domNode.type,
      attributes: domNode.getAllAttributes(),
      text: domNode.text,
      name: index
    }); 

    this.#code = [...this.#code, ...codeNode.toArray()];

    this.#code.push(`child0.appendChild(${index})`);
    
    return function generate(parentDomNode = domNode, parentCodeNode = codeNode) {
      /*if (parentDomNode.hasChildNodes()) {
        for (let index = 0; index < parentDomNode.children.length; index++) {
          const childIndex = Math.floor(Math.random() * 1000000);
          const childDOMNode = parentDomNode.children[index];

          let childCodeNode = createCodeNode({
            type: childDOMNode.type,
            attributes: childDOMNode.getAllAttributes(),
            text: childDOMNode.text,
            name: childIndex
          });

          console.log("childCodeNode", childCodeNode.toArray());

          

          this.#code = [...this.#code, ...childCodeNode.toArray()];
          parentCodeNode.appendChild(childCodeNode.name);

          this.#code = [...this.#code, ...parentCodeNode.toArray()]
  
          generate.call(this, childDOMNode, childCodeNode);
        }
      }*/


    }
    /*if (parentIndex === 1) {
      this.#codeString += `const child0 = document.querySelector("#${
        this.#rootId
      }");\n`;

      this.#codeString += this._createElement(parent, "0", "1");
      this.#codeString += `\n`;
    }

    if (parent.hasChildNodes()) {
      for (let index = 0; index < parent.children.length; index++) {
        const childIndex = Math.floor(Math.random() * 1000000);
        const childNode = parent.children[index];

        this.#codeString += this._createElement(
          childNode,
          parentIndex,
          childIndex
        );
        this.#codeString += `\n`;

        this._generateDomCode(childNode, childIndex);
      }
    }*/
  }
}

export default CodeGenerator;

/*

_createGenerator(parent, parentIndex) {
    return function generator() {

    }
    /*if (parentIndex === 1) {
      this.#codeString += `const child0 = document.querySelector("#${
        this.#rootId
      }");\n`;

      this.#codeString += this._createElement(parent, "0", "1");
      this.#codeString += `\n`;
    }

    if (parent.hasChildNodes()) {
      for (let index = 0; index < parent.children.length; index++) {
        const childIndex = Math.floor(Math.random() * 1000000);
        const childNode = parent.children[index];

        this.#codeString += this._createElement(
          childNode,
          parentIndex,
          childIndex
        );
        this.#codeString += `\n`;

        this._generateDomCode(childNode, childIndex);
      }
    }
  }

  */
