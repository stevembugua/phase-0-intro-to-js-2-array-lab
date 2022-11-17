// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function ArrayFunction(){
    cats.length =0
    cats.push("Milo", "Otis", "Garfield")
    return cats
}

function destructivelyAppendCat (name){
    cats.push(name)
    return cats
}
function destructivelyPrependCat (name){
    cats.unshift(name)
    return cats
}
function destructivelyRemoveLastCat (){
    cats.pop()
    return cats
}
function destructivelyRemoveFirstCat (){
    cats.shift()
    return cats
}
function appendCat (name){
    var newArray = cats.slice()
    newArray.push(name)
    return newArray
  }
  function prependCat (name){
    var newArray = cats.slice()
    newArray.unshift(name)
    return newArray
  }
  function removeLastCat (name){
    var newArray = cats.slice()
    newArray.pop(name)
    return newArray
  }
  function removeFirstCat (name){
    var newArray = cats.slice()
    newArray.shift(name)
    return newArray
  }



