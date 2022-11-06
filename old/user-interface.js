import * as readline from 'readline';

class UserInterface {
    constructor() {
        this.rl;
        this._init();
    }

    _init() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
    }

    readline(text) {
        return new Promise((resolve, reject) => {
            this.rl.question(text, answer => resolve(answer))
        })
    }

    writeline(msg) {
        console.log(msg);
    }
}

export default UserInterface;