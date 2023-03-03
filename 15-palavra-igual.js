function mutation(arr) {
  const test = arr[1].toLowerCase();
  const target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false; //indexOf retorna -1 se não tiver a letra lá, e se retornar um número é o indice da letra
  }
  return true;
}


console.log(mutation(["hello", "hey"]));


//verificar se palavra é igual