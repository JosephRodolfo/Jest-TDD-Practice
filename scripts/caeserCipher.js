let caeserCipher = (string, numberToShift) => {
    let getCharCodes = (string1) => {
      let arr = string1.split("");
      let map1 = arr.map((x) => {
        return x.charCodeAt(0);
      });
      return map1;
    };
  
    let isAlpha = (number) => (number >= 65 && number <= 122 ? true : false);
  
    let shiftCharCodes = (charCodesArr, number) => {
      let shiftedArr = charCodesArr.map((element) => {
        if (isAlpha(element)) {
          if (element >= 97 && element <= 122 && (element + number) > 122) {
            return ((element + number) - 122) + 96
  ;
          } else if (element >= 65 && element <= 90 && (element + number) > 90) {
            return ((element + number) - 90) + 64
  
          } else return element + number;
        } else 
        return element;
      });
      return shiftedArr;
    };
  
    let final = shiftCharCodes(getCharCodes(string), numberToShift);
  
    let cipherWord = final.map((element) => {
      return String.fromCharCode(element);
    });
    return cipherWord.join("");
  };
  
module.exports = caeserCipher;
