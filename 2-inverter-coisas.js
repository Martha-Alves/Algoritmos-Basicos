function reverseString(str) {

  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return console.log(reversedStr);
}


reverseString("hello");

//retornar strings invertidas