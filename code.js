// To run the code, open it in the browser using the VS Code Live Server
// Then open the console.  You can directly call these function in the console to test.

/*  --------------------------------------------------------
    encodeVowelWord()

    Encode words that begin with a vowel sound from english to pig latin
    For words that begin with vowel sounds, one just adds "yay" to the end.

    For example:
        "eat" becomes "eat-yay"
        "omelet" becomes "omelet-yay" 
*/
let letters = "abcdefghijklmnopqrstuvwxyz"
let alphabet = letters.split("")
let vowels = []
let consonants = []
let clusteredConsonants = []
for (let letter of alphabet){
  if (letter === "a"){
    vowels.push(letter)
  }else if (letter === "e"){
    vowels.push(letter)
  }else if(letter === "i"){
    vowels.push(letter)
  } else if(letter === "o"){
    vowels.push(letter)
  } else if (letter ==="u"){
    vowels.push(letter)
  } else if(letter !== vowels) {
    consonants.push(letter)  
  }
}
console.log(consonants)
console.log(vowels)
for(consonant of consonants){
  for(let doubleConsonants of consonants){
    clusteredConsonants.push(consonant+doubleConsonants)
    
  }
}
console.log (clusteredConsonants)
function encodeVowelWord(word) {
  for (let vowel of vowels){
    if (word.startsWith(vowel)){
      word += "-yay"
      console.log(word)
    }
  }
  return word; 
}

let result = encodeVowelWord("eat")
console.assert(result === "eat-yay",{
  test: "encodeVowelWord on eat",
  expected: "eat-yay",
  result: result
})

result = encodeVowelWord("apple")
console.assert(result === "apple-yay",{
  test: "encodeVowelWord on apple",
  expected: "apple-yay",
  result: result
})

function encodeConsonantWord(word) {
  for(let beginingLetters of clusteredConsonants){
    if (word.startsWith(beginingLetters)){
      let consonantWord = word.split("")
      beginingLetter = consonantWord.splice(0,1)
      secondLetter = consonantWord.splice(0,1)
      
      word = consonantWord.join("") + `-${beginingLetters}ay`
      console.log(word)
    }
  }
  for(let consonant of consonants){
    if(word.startsWith(consonant)){
      let consonantWord = word.split("")
      beginingLetter = consonantWord.splice(0,1)
      word = consonantWord.join("") + `-${consonant}ay`
      console.log(word)
    }
  }
  return word; // replace this!
}

result = encodeConsonantWord("bagel")
console.assert(result === "agel-bay", {
  test:"encodeConsonantWord on bagel",
  expected: "agel-bay",
  result: result
})
result = encodeConsonantWord("table")
console.assert(result === "able-tay",{
  test:"encodeConsonantWord on table",
  expected:"able-tay",
  result:result
})

result = encodeConsonantWord("chair")
console.assert(result === "air-chay",{
  test:"encodeConsonantWord on chair",
  expected:"air-chay",
  result:result
})

result = encodeConsonantWord("share")
console.assert(result === "are-shay",{
  test: "encodeConsonantWord on share",
  expected: "are-shay",
  result:result
})

function encodeWord(word) {
  let lowerCase = word.toLowerCase()
  word = lowerCase
  for(let firstLetter of vowels){
    if(word.startsWith(firstLetter)){
      return encodeVowelWord(word)
    }
  }
  for(let firstLetter of consonants){
    if(word.startsWith(firstLetter)){
      return encodeConsonantWord(word)
    }
  }
}
result = encodeWord("cheers")
console.assert(result === "eers-chay",{
  test:"encodeWord on cheers",
  expected:"eers-chay",
  result:result
}) 
result = encodeWord("Badmiton")
console.assert(result === "admiton-bay",{
  test:"encodeWord on badmiton",
  expected: "admiton-bay",
  result:result
})
result = encodeWord("ale")
console.assert(result === "ale-yay",{
  test:"encodeWord on Ale",
  expected: "ale-ay",
  result:result
})

function encodeText(text) {
  let words = text.split(" ")
  let wordText = []
  for(word of words){
    let piglatin = encodeWord(word)
    wordText.push(piglatin)
    wordText.push(" ")
  }
  console.log(wordText)
  text = wordText.join("").trimRight()
  console.log(text)
  return text
}

result = encodeText("Wow this was fun")
console.assert(result === "ow-way is-thay as-way un-fay",{
  test:"encodeText on Wow this was fun",
  expected:"ow-way is-thay as-way un-fay",
  result:result
})
result = encodeText("Yay this is done")
console.assert(result === "ay-yay is-thay is-yay one-day",{
    test:"encodeText on Yay this is done",
    expected:"ay-yay is-thay is-yay one-day",
    result:result
})