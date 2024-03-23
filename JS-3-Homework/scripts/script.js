"use strict"

//1
const squareNumber = (x) => {
    const calculateSquare = (x *= x);
    return x;
  };
  
  const resultSquareNumber = squareNumber(6);
  console.log(resultSquareNumber);
  
  //2
  const toFahrenheit = (y) => {
    const convertCelsius = y * (9 / 5) + 32;
    return convertCelsius;
  };
  
  const resultToFahrenheit = toFahrenheit(5);
  console.log(resultToFahrenheit);
  
  //3
  
  const numberRange = (a, b, c) => {
    if (a >= b && a <= c) {
      return `${a} is in range correctly`;
    } else {
      return `${a} is not in range correctly`;
    }
  };
  
  console.log(numberRange(1, 5, 7));
  console.log(numberRange(6, 5, 7));
  
  //4
  
  const guessTheLepYear = (year) => {
    if (year % 4 === 0) {
      return `correct. ${year} is leap year`;
    } else {
      return `not correct. ${year} is NOT leap year`;
    }
  };
  
  console.log(guessTheLepYear(1996));
  console.log(guessTheLepYear(1990));
  
  //5
  
  let calculator = () => {
    let num1 = (prompt("enter number: "));
    let num2 = (prompt("enter another number: "));
    let operation = prompt(`enter operation: + - * or / `);
  
    
    num1 = Number(num1)
    num2 = Number(num2)
  
    if (typeof num1 === "number" && typeof num2 === "number") {
      if (operation === "+") {
          return num1 + num2
      } if (operation === "-") {
          return num1 - num2
      } if (operation === "*") {
          return num1 * num2
      } if (operation === "/") {
          return num1 / num2
      } else return "error"
    }
  
  };
  
  alert(calculator());
  
  