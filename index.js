// Write your solution here!
let cats = ['Milo','Otis','Garfield'];
console.log(cats.length)

  function destructivelyAppendCat(name){
    cats.push("Ralph")

  }

  function destructivelyPrependCat(name){
    cats.unshift("Bob")
  }

  function destructivelyRemoveLastCat(name){
    cats.pop("Garfield")
  }

  function destructivelyRemoveFirstCat(name){
    cats.shift("Milo")
  }

  function appendCat(name) {
    let newCats = [...cats, "Broom"];
    return newCats;
}

function prependCat(name) {
    let newCats = ["Arnold", ...cats];
    return newCats;
}

function removeLastCat() {
    if (cats.length === 0) return cats;

    let newCats = cats.slice(0, cats.length - 1);
    return newCats;
}

function removeFirstCat() {
    if (cats.length === 0) return cats;

    let newCats = cats.slice(1);
    return newCats;
}






