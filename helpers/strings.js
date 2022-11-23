export const replaceSpecialChars = (string) => {
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