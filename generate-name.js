function replaceSpecialChars(string) {
    if(string.match(/[^A-Za-z*]/)) {
        return string
        .split(/[^A-Za-z*]/)
        .map((t, index) => {
          if(index == 0) return t;
          return t.charAt(0).toUpperCase() + t.slice(1);
        })
        .join("")
    }

    return string;
}

function generateName({id, nodeName, classList = [], type, namesArray = []}) {
  console.log("arguments", arguments);  
  if(id) {
      if(!namesArray.find(name => id == name)) return replaceSpecialChars(id);
    }

    if(nodeName) {
      if(!namesArray.find(name => nodeName == name)) return replaceSpecialChars(nodeName);
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

        if(nameResult) return replaceSpecialChars(nameResult);
    }
    
    let nameResult = false;
    let index = 1;
    while(!nameResult) {
      type = type.toLowerCase();

      const typeAndIndex = `${type}${index}`
      const result = namesArray.find(name => name == typeAndIndex);

      if(!result) {
        return replaceSpecialChars(typeAndIndex);
      }

      index += 1;
    }
}

export default generateName;