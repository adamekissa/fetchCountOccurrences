const fetch = require('node-fetch');

//moby dick - but you could use whatever book at this site
fetch("https://www.gutenberg.org/files/2701/2701-0.txt")
    .then(data => data.text())
    .then(processText)
    .catch(err => console.error(err))

function processText(text){
    console.log("Book fetched ok!")
    const listOfWords = text.slice(0, 100000).split(/\W/);
    const result = countOccurences(listOfWords);
    console.log(result);
}

function countOccurences(listOfWords){
    const lowerCaseString = listOfWords.toString().toLowerCase();
    const result = {};
    
    for(let i =0; i < lowerCaseString.length; i++){
      const letter = lowerCaseString.charAt(i);
      const alphabet = "abcdefghijklmnopqrstuvwxyz"
      if (!(alphabet.includes(letter))
  ){
        continue;
      }
      if (!result[letter]){
        result[letter] = 1;
      } else {
        result[letter] += 1;
      }
    }
    return result
  }