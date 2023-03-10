// write a function (oneWordOnly) that takes an array of strings, and 
// returns an array of just the strings with one word in them

function oneWordOnly(words, query){
return words.filter((el) => !el.toLowerCase().includes(" "));
}

console.log(oneWordOnly(["bird", "bird dog", "humming bird", "dog"])) //=>["bird", "dog"]
console.log(oneWordOnly(["house", "tiny mansion", "humming bird", "fish", "word"])) //=>["house", "fish", "word"]
