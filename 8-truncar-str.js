function truncateString(str, num) {
  let result = str;
  if (str.length > num) {
    let result = str.slice(0, num);
    return result + "...";
  } else {
    return result;
  }

}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

//adiciona reticencias quando frase atingir número de caracteres informado