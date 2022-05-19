import { JSDOM } from "jsdom";
import Node from "./node.js";

class DomGenerator {
  #html;
  #rootId;
  #firstChild;
  #codeString;

  constructor(html, rootId) {
    this.#html = html;
    this.#rootId = rootId;
    this.#codeString = ``;

    this._init();
  }

  _init() {
    const document = new JSDOM(this.#html).window.document;
    this.#firstChild = document.body.firstChild;
  }

  toString() {
    this._generateDomCode(this.#firstChild, 1);
    return this.#codeString;
  }

  _generateDomCode(parent, parentIndex) {
    if (parentIndex === 1) {
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

  _createElement(parent, parentIndex, childIndex) {
    const node = new Node(parent, parentIndex, childIndex);
    node.appendChild().setAttributes().setTextContent();

    return node.toString();
  }
}

export default DomGenerator;
