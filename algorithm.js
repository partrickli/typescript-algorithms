"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function swap(a, i, j) {
    if (0 <= i && i < a.length && 0 <= j && j < a.length) {
        if (i !== j) {
            let temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
        else {
            console.log('i === j, no need to swap');
        }
    }
    else {
        console.log(`i or j out of bound`);
    }
}
exports.swap = swap;
// let t: string[] = ['a', 'b', 'c'];
// swap(t, 0, 0);
// swap(t, 0, 1);
// console.log(t);
function shuffle(array) {
    for (let j = array.length - 1; j > 0; j--) {
        const element = array[j];
        const i = Math.floor(Math.random() * j);
        swap(array, i, j);
    }
}
exports.shuffle = shuffle;
const a = ['a', 'b', 'c', 'd', 'e'];
shuffle(a);
console.log(a);
//# sourceMappingURL=algorithm.js.map