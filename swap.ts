function swap<Element>(a: Array<Element>, i: number, j: number) {
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

let t: string[] = ['a', 'b', 'c'];
swap(t, 0, 0);
swap(t, 0, 1);
console.log(t);
