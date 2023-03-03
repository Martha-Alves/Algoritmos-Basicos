function factorialize(num) {
  if (num === 0) {
    return 1;
  } else {
    let myNum = 1;
    for (let i = 1; i <= num; i++) {
      myNum *= i;

    }
    return myNum;
  }


}

console.log(factorialize(5));

  //retorna fatorial de um número