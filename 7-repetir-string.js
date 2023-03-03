function repeatStringNumTimes(str, num) {
  let result = "";
  if (num < 0) {
    return result = "";
  } else {
    for (let i = 0; i < num; i++) {
      result += str;

    }
    return result;
  }
}

console.log(repeatStringNumTimes("abc", 3));

//repete string quantas vezes quiser