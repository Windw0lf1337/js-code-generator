class Node {
    #type;
    #name;
    #node;
  
    constructor(type, name) {
      this.#type = type;
      this.#name = name;
  
      this.#node = [];
  
      this.#init();
    }

    get name() {
      return this.#name;
    }
  
    #init() {
      this.#createElement();
    }

    toArray() {
      return this.#node;
    }
  
    #createElement() {
      this.#node.push(
        `let ${this.#name} = document.createElement("${this.#type}");`
      );
  
      return this;
    }
  
    appendChild(childName) {
      this.#node.push(`${this.#name}.appendChild(${childName});`);
  
      return this;
    }
  
    setAttributes(attributes) {
      for(let attribute of Object.entries(attributes)) {
        const key = attribute[0];

        this.#node.push(
          `${this.#name}.setAttribute("${key}", "${attributes[key]}")`
        );
      }
  
      return this;
    }
  
    setTextContent(text) {
      if (text.length != 0)
        this.#node.push(`${this.#name}.textContent = \`${text}\`;`);
  
      return this;
    }
  }
  
  export default Node;

  /*
  class Node {
    #codeArray;
    #node;
    #parentName;
    #name;
  
    constructor({node, parentIndex, index}) {
      this.#node = node;
  
      this.#parentName = `child${parentIndex}`;
      this.#name = `child${index}`;
  
      this.#codeArray = [];
  
      this._init();
    }
  
    _init() {
      //this._createElement();
    }
  
    toString() {
      return this.#codeArray.map((elem) => elem + `\n`).join("");
    }
  
    createElement() {
      const nodeName = this.#node.nodeName;
  
      this.#codeArray.push(
        `let ${this.#name} = document.createElement("${nodeName}");`
      );
  
      return this;
    }
  
    appendChild() {
      this.#codeArray.push(`${this.#parentName}.appendChild(${this.#name});`);
  
      return this;
    }
  
    setAttributes() {
      if (this.#node.getAttributeNames().length > 0) {
        const attributeNames = this.#node.getAttributeNames();
  
        attributeNames.forEach((attrName) => {
          this.#codeArray.push(
            `${this.#name}.setAttribute("${attrName}", "${this.#node.getAttribute(
              attrName
            )}")`
          );
        });
      }
  
      return this;
    }
  
    setTextContent() {
      console.log("node", this.#node.childNodes[0] ? this.#node.childNodes[0].nodeValue : null);
      
      if (this.#node.childNodes[0]?.nodeValue) {
        const text = this.#node.childNodes[0].nodeValue.trim();
  
        if (text.length != 0)
          this.#codeArray.push(`${this.#name}.textContent = \`${text}\`;`);
      }
  
      return this;
    }
  }
  
  export default Node;
  */
  