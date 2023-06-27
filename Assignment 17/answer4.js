
// Answer 4
class RecentCounter {
    constructor() {
        this.requests = [];
    }

    ping(t) {
        this.requests.push(t);

        while (this.requests[0] < t - 3000) {
            this.requests.shift();
        }

        return this.requests.length;
    }
}

const recentCounter = new RecentCounter();

// Example

console.log(recentCounter.ping(1)); // 1
console.log(recentCounter.ping(100)); // 2
console.log(recentCounter.ping(3001)); // 3
console.log(recentCounter.ping(3002)); // 3
