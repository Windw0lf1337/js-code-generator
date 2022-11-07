import createDOM from "../create-dom.js";

let names = ["DIV-1"];
function generateNameTest() {
    const html = `<div class="divButton redButton"></div>` 
    
    const firstElement = createDOM(html);

    const name = generateName(firstElement);

    console.log(name);
}

generateNameTest();

function generateName(node) {
    if(node.id) {
      if(!names.find(name => node?.id == name)) return node.id;
    }

    if(node.name) {
      if(!names.find(name => node?.name == name)) return node.name;
    }

    if(node.classList.length > 0) {
        let nameResult = null;

        node.classList.forEach(className => {
            if(!nameResult) {
                if(!names.find(name => className == name)) {
                    nameResult = className;
                }
            }
        })

        if(nameResult) return nameResult;
    }
    
    let nameResult = false;
    let index = 1;
    while(!nameResult) {
        const typeAndIndex = `${node.type}-${index}`
        const result = names.find(name => name == typeAndIndex);

        if(!result) {
            nameResult = typeAndIndex;
            return nameResult;
        }

        index += 1;
    }
  }