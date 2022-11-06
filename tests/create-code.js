import createNode from "../create-code-node.js";

function createNodeTest() {
    const node = createNode({
        type: "div",
        attributes: {name: "input email"},
        text: "email",
        name: "emailInputField"
    })
}

const result = createNodeTest();