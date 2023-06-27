
// Answer 3
function countStudents(students, sandwiches) {
    const n = students.length;
    let notEat = 0;

    while (students.length > 0 && sandwiches.length > 0) {
        const preference = students[0];
        const sandwichType = sandwiches[0];

        if (preference === sandwichType) {
            students.shift();
            sandwiches.shift();
            notEat = 0;
        } else {
            students.push(students.shift());
            notEat++;

            if (notEat === n) {
                break;
            }
        }
    }

    return students.length;
}

// Example
const students = [1, 1, 1, 0, 0, 1];
const sandwiches = [1, 0, 0, 0, 1, 1];
const notEat = countStudents(students, sandwiches);
console.log(notEat); // 3
