import { swap } from './swap';
export function shuffle<T>(array: Array<T>) {
  for (let j = array.length - 1; j > 0; j--) {
    const i = Math.floor(Math.random() * j);
    swap(array, i, j);
  }
}

// const a = ['a', 'b', 'c', 'd', 'e'];
// shuffle(a);
// console.log(a);
