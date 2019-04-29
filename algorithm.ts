export function swap<Element>(a: Array<Element>, i: number, j: number) {
  if (0 <= i && i < a.length && 0 <= j && j < a.length) {
    if (i !== j) {
      let temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    } else {
      console.log('i === j, no need to swap');
    }
  } else {
    console.log(`i or j out of bound`);
  }
}

// let t: string[] = ['a', 'b', 'c'];
// swap(t, 0, 0);
// swap(t, 0, 1);
// console.log(t);

export function shuffle<T>(array: Array<T>) {
  for (let j = array.length - 1; j > 0; j--) {
    const element = array[j];
    const i = Math.floor(Math.random() * j);
    swap(array, i, j);
  }
}

const a = ['a', 'b', 'c', 'd', 'e']
shuffle(a)
console.log(a)
