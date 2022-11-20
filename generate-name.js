function replaceSpecialChars(string) {
    if(string.includes("-")) {
        return string
        .split(/[^A-Za-z*]/)
        .map((t, index, typeAsArray) => {
          if(index == typeAsArray.length - 1) return t.charAt(0).toUpperCase() + t.slice(1)
          return t;
        })
        .join("")
    }

    return string;
}

// - -- __ 

function generateName({id, name, classList, type, namesArray = []}) {
    if(id) {
      if(!namesArray.find(name => node?.id == name)) return id;
    }

    if(name) {
      if(!namesArray.find(name => node?.name == name)) return name;
    }

    if(classList.length > 0) {
        let nameResult = null;

        classList.forEach(className => {
            if(!nameResult) {
                if(!namesArray.find(name => className == name)) {
                    nameResult = className;
                }
            }
        })

        if(nameResult) return nameResult;
    }
    
    let nameResult = false;
    let index = 1;
    while(!nameResult) {
      type = type.toLowerCase();
      if(type.includes("-")) {
        type = type
        .split("-")
        .map((t, index, typeAsArray) => {
          if(index == typeAsArray.length - 1) return t.charAt(0).toUpperCase() + t.slice(1)
          return t;
        })
        .join("")
      }

      const typeAndIndex = `${type}${index}`
      const result = namesArray.find(name => name == typeAndIndex);

      if(!result) {
        nameResult = typeAndIndex;
        return nameResult;
      }

      index += 1;
    }
}

export default generateName;