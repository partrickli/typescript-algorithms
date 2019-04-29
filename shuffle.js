"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swap_1 = require("./swap");
function shuffle(array) {
    for (let j = array.length - 1; j > 0; j--) {
        const element = array[j];
        const i = Math.floor(Math.random() * j);
        swap_1.swap(array, i, j);
    }
}
exports.shuffle = shuffle;
const a = ['a', 'b', 'c', 'd', 'e'];
shuffle(a);
console.log(a);
//# sourceMappingURL=shuffle.js.map