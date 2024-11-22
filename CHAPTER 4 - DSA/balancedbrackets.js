function isbalanced(expression) {
    let stack = [];
    const brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (let char of expression) {
        if (char in brackets) {
            stack.push(char);
        } else {
            let lastbracket = stack.pop();
            if (char !== brackets[lastbracket]) {
                return false
            }
        }
    }
    return stack.length === 0 ;
}

console.log(isbalanced('([{}])'));
