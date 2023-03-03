function titleCase(str) {
  let arr = str.split(" "); /* basicamente separa strings em arrays  */
  let new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    let new_word = word[0].toUpperCase() + word.slice(1).toLowerCase();
    new_arr.push(new_word);
  }
  return new_arr.join(" ");
}

console.log(titleCase("I'm a little tea pot"));

//retorna string com a primeira letra maiuscula