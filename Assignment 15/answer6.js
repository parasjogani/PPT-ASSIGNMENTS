
// Answer 6
function evaluatePostfixExpression(expression) {
    const stack = [];

    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];

        if (isOperand(char)) {
            stack.push(Number(char));
        } else {
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            const result = performOperation(char, operand1, operand2);
            stack.push(result);
        }
    }

    return stack.pop();
}

function isOperand(char) {
    return !isNaN(char);
}

function performOperation(operator, operand1, operand2) {
    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            return operand1 / operand2;
        default:
            throw new Error('Invalid operator');
    }
}

// Example
const postfixExpression = '231*+9-';
const result = evaluatePostfixExpression(postfixExpression);
console.log(result); // -4
