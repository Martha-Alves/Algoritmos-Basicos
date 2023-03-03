function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b); //transforma em crescente (+ transforma em decrescente)

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }

  return arr.length;
}
console.log(getIndexToIns([40, 60], 50));

//econtrando index ideal para o número
