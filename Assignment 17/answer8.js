
// Answer 8
let DataStream = function (value, k) {
    this.count = [value, k];
    this.x = 0
};


DataStream.prototype.consec = function (num) {
    if (num === this.count[0]) {
        this.x++
    } else {
        this.x = 0
    }
    if (this.x >= this.count[1]) {
        return true
    }
    else {
        return false
    }
};

const dataStream = new DataStream(4, 3);
console.log(dataStream.consec(4)); // false
console.log(dataStream.consec(4)); // false
console.log(dataStream.consec(4)); // true
console.log(dataStream.consec(3)); // false

