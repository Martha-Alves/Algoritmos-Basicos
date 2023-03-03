function chunkArrayInGroups(arr, size) {
  // Break it up.
  const newArr = [];
  let i = 0;

  while (i < arr.length) {
    newArr.push(arr.slice(i, i + size));
    i += size; // pra pegar as demais posições sempre e não só parar na primeira posição
  }
  return newArr;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

//separando array em quantos arrays eu quiser