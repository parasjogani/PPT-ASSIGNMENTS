
// Answer 3
function printAllSubsets(set, subset = '', index = 0) {
    const n = set.length;

    if (index === n) {
        console.log(subset);
        return;
    }

    printAllSubsets(set, subset + set[index], index + 1);

    printAllSubsets(set, subset, index + 1);
}

// Example
printAllSubsets("abc");
