class DOMNode {
    #node;

    constructor(node) {
        this.#node = node;
    }

    get children() {
        let childNodes = [];
        for (let index = 0; index < this.#node.children.length; index++) {
            childNodes.push(new DOMNode(this.#node.children[index]));
        }

        return childNodes;
    }

    get type() {
        return this.#node.nodeName
    }

    get text() {
        if (this.#node.childNodes[0]?.nodeValue) {
            const text = this.#node.childNodes[0].nodeValue.trim();
      
            return text;
        } else {
            return "";
        }
    }

    get id() {
        return this.#node.id;
    }

    get classList() {
        return this.#node.classList;
    }

    get name() {
        return this.#node.getAttribute("name");
    }

    getAllAttributes() {
        let attributes = {};

        if (this.#node.getAttributeNames().length > 0) {
            const attributeNames = this.#node.getAttributeNames();
      
            attributeNames.forEach((attrName) => {
              attributes[attrName] = this.#node.getAttribute(attrName);
            });
        }

        return attributes;
    }

    hasChildNodes() {
        return this.#node.hasChildNodes();
    }
}

export default DOMNode;