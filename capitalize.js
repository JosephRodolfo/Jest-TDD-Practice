let capitalize = (word) => {
    let array = word.split("");
    let firstLetter = array[0].toUpperCase();
    let restWord = array.slice(1).join("");
    let joinedWord = firstLetter.concat(restWord);
    return joinedWord;
  };

  module.exports = capitalize;
  
  
