
// Answer 3

let stk = [];
stk.push('1');
stk.push('2');
stk.push('3');
stk.push('4');
stk.push('5');

let temp = [];

while (stk.length > 0) {
    temp.push(stk[0]);
    stk.shift();
}

let n = temp.length;

if (n % 2 == 0) {
    let target = Math.floor(n / 2);
    for (let i = 0; i < n; i++) {
        if (i == target) {
            continue;
        }
        stk.push(temp[i]);
    }
}
else {
    let target = Math.floor(n / 2);
    for (let i = 0; i < n; i++) {
        if (i == target) {
            continue;
        }
        stk.push(temp[i]);
    }
}

while (stk.length > 0) {
    let p = stk[0];
    stk.shift();
    console.log(p + " "); // 1 2 4 5
}