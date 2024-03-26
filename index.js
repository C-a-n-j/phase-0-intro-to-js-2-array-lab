// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(){
    cats.push("Ralph")
    return cats
}
function destructivelyPrependCat(){
    cats.unshift("Bob")
    return cats
}

function destructivelyRemoveLastCat(){
    cats.pop()
    return cats;
}

function destructivelyRemoveFirstCat(){
    cats.shift()
    return cats;
}
function appendCat(){
    let appendedCats = [...cats, "Broom"]
    return appendedCats
}
function prependCat(){
    let prependCats = ["Arnold",...cats]
    return prependCats
}
function removeLastCat(){
    let removes =  cats.slice(0, cats.length - 1)
    return removes
}
function removeFirstCat(){
    let removes =  cats.slice(1)
    return removes
}