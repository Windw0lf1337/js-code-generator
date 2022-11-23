function generateUniqueName(name, existingNames) {
    let nameResult = false;
    let index = 1;

    while(!nameResult) {
        const [result] = existingNames.map(n => n === (name + index))
        
        if(!result) {
            return name + index;
        }

        index += 1;
    }
}

export default generateUniqueName;