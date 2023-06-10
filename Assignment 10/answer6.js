
// Answer 6
function towerOfHanoi(n, left, center, right) {
    if (n === 1) {
        console.log(`Move disk 1 from rod ${left} to rod ${center}`);
        return 1;
    }

    let moves = 0;

    moves += towerOfHanoi(n - 1, left, right, center);
    console.log(`Move disk ${n} from rod ${left} to rod ${center}`);
    moves++;
    moves += towerOfHanoi(n - 1, right, center, left);

    return moves;
}


const n = 2; // Number of disks
const leftRod = 1;
const centerRod = 3;
const rightRod = 2;

const totalMoves = towerOfHanoi(n, leftRod, centerRod, rightRod);
console.log(`Total moves: ${totalMoves}`); // 3
