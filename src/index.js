
module.exports = function toReadable (number) {
  let numToStr = number.toString();
  let oneDigitArr = numToStr.split('');
  let numbersObj = {
      "0" : "zero",
      "1" : "one",
      "2" : "two",
      "3" : "three",
      "4" : "four",
      "5" : "five",
      "6" : "six",
      "7" : "seven",
      "8" : "eight",
      "9" : "nine",
      "10": "ten",
      "11": "eleven",
      "12": "twelve",
      "13": "thirteen",
      "14": "fourteen",
      "15": "fifteen",
      "16": "sixteen",
      "17": "seventeen",
      "18": "eighteen",
      "19": "nineteen",
      "20": "twenty",
      "30": "thirty",
      "40": "forty",
      "50": "fifty",
      "60": "sixty",
      "70": "seventy",
      "80": "eighty",
      "90": "ninety",
      "100": "hundred",
  };
  let resultStr = "";

  
  if(oneDigitArr.length === 1){
        resultStr = numbersObj[oneDigitArr[0]];
  } else if (oneDigitArr.length === 2){
        if(oneDigitArr[0] === "1"){
            let keyOfObj = oneDigitArr[0] + oneDigitArr[1];
            resultStr = numbersObj[keyOfObj];
        }else if(Number(oneDigitArr[0]) >= 2 && oneDigitArr[1] !== "0"){
            let keyOfObj = oneDigitArr[0] + "0";
            resultStr = numbersObj[keyOfObj] + " " + numbersObj[oneDigitArr[1]];
        }/*else if(Number(oneDigitArr[0]) >= 2 && oneDigitArr[1] === "0"){

        }*/else{
            let keyOfObj = oneDigitArr[0] + "0";
            resultStr = numbersObj[keyOfObj];
        } 
  } else if (oneDigitArr.length === 3){
    if(oneDigitArr[1] === "1"){
        let keyOfNTeen = oneDigitArr[1] + oneDigitArr[2];
        let nTeenthStr = numbersObj[keyOfNTeen];
        resultStr = numbersObj[oneDigitArr[0]] + " " + numbersObj["100"] + " " + nTeenthStr;
    }else if(Number(oneDigitArr[1]) >= 2 && oneDigitArr[2] !== "0"){
        let keyOfDecades = oneDigitArr[1] + "0";
        let till99 = numbersObj[keyOfDecades] + " " + numbersObj[oneDigitArr[2]];
        resultStr = numbersObj[oneDigitArr[0]] + " " + numbersObj["100"] + " " + till99;
    } else if(oneDigitArr[1] === "0" && oneDigitArr[2] !== "0"){
        resultStr = numbersObj[oneDigitArr[0]] + " " + numbersObj["100"] + " " + numbersObj[oneDigitArr[2]];
    } else if(oneDigitArr[1] === "0" && oneDigitArr[2] === "0"){
        resultStr = numbersObj[oneDigitArr[0]] + " " + numbersObj["100"];
    }else{
        let keyOfDecades = oneDigitArr[1] + "0";
        resultStr = numbersObj[oneDigitArr[0]] + " " + numbersObj["100"] + " " + numbersObj[keyOfDecades];
    }
  }
  
  
  return resultStr;
}
