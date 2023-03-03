function titleCase(str) {
  let arr = str.split(" "); /* basicamente separa strings em arrays  */
  let new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    let new_word = word[0].toUpperCase();
    new_arr.push(new_word);
  }
  return new_arr.join("");
}

console.log(titleCase("frase aleatória aqui"));

//abreviando frases
