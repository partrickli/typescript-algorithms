let t: string[] = ['a', 'b', 'c'];

function swap<Element>(a: Array<Element>, i: number, j: number) {
    let temp = a[i]
    a[i] = a[j]
    a[j] = temp
}

swap(t, 0, 2)

debugger
