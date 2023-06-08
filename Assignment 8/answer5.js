
// Answer 5
function compress(chars) {
    let n = chars.length;
    let count = 1;
    let write = 0;

    for (let i = 1; i < n; i++) {
        if (chars[i] === chars[i - 1]) {
            count++;
        } else if (count > 1) {
            chars[write] = chars[i - 1];
            write++;
            let countStr = count.toString();
            for (let j = 0; j < countStr.length; j++) {
                chars[write] = countStr[j];
                write++;
            }
            count = 1;
        } else {
            chars[write] = chars[i - 1];
            write++;
        }
    }

    if (count > 1) {
        chars[write] = chars[n - 1];
        write++;
        let countStr = count.toString();
        for (let j = 0; j < countStr.length; j++) {
            chars[write] = countStr[j];
            write++;
        }
    } else {
        chars[write] = chars[n - 1];
        write++;
    }

    return write;
}


let chars = ["a", "a", "b", "b", "c", "c", "c"];
let newLength = compress(chars);
let compressedChars = chars.slice(0, newLength);

console.log(newLength);  // 6
console.log(compressedChars);  // ['a', '2', 'b', '2', 'c', '3']
