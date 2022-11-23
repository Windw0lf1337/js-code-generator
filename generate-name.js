import { replaceSpecialChars } from './helpers/strings.js';

function withoutSpecialChars(params) {
  let paramsWithoutChars = {};
  for(let param in params) {
    if(typeof params[param] == "string") {
      paramsWithoutChars[param] = replaceSpecialChars(params[param].toLowerCase());
    }

    if(Array.isArray(params[param])) {
      paramsWithoutChars[param] = params[param].map(p => replaceSpecialChars(p).toLowerCase());
    }
  }

  return paramsWithoutChars;
}

function addIndexAfter(func, {namesArray, ...params}) { 
  const name = func(params);

  let nameResult = false;
  let index = 1;

  while(!nameResult) {
    const [result] = namesArray.map(n => n === (name + index))
    
    if(!result) {
      return name + index;
    }

    index += 1;
  }
}

function generateName(params) { 
  console.log("params", params);
  const {id, nodeName, classList, type} = withoutSpecialChars(params);

  if(id) return id;

  if(nodeName) return nodeName;

  if(classList?.length > 0) {
    let nameResult = null;

        classList.forEach(className => {
            if(!nameResult) {
                if(!namesArray.find(name => className == name)) {
                    nameResult = className;
                }
            }
        })

        if(nameResult) return nameResult;
    return classList;
  }

  if(type) return type;
}

export default (params) => addIndexAfter(generateName, params);

/*

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

function withoutSpecialChars(func, params1, params2) {
  let paramsWithoutChars = {};
  for(let param in params1) {
    if(typeof params1[param] == "string") {
      paramsWithoutChars[param] = replaceSpecialChars(params1[param]);
    }

    if(Array.isArray(params1[param])) {
      paramsWithoutChars[param] = params1[param].map(p => replaceSpecialChars(p));
    }
  }

  return func({...paramsWithoutChars}, params2);
}

function generateName({id, nodeName, classList = [], type}, namesArray = []) { 
  console.log("namesArr", namesArray);
  if(id) {
    if(!namesArray.find(name => id == name)) return id;
  }

  if(nodeName) {
    if(!namesArray.find(name => nodeName == name)) return nodeName;
  }

    // if class exists then count higher
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

      const typeAndIndex = type + index;
      const result = namesArray.find(name => name == typeAndIndex);

      if(!result) {
        return typeAndIndex;
      }

      index += 1;
    }
}

let generateNameWithoutChars = (node, namesArray) => withoutSpecialChars(generateName, node, namesArray);

export default generateNameWithoutChars;

*/