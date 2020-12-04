"use strict";
// TODO Завдання 3. Отримати від користувача набір чисел через кому, отримати число яке треба знайти.Перевірити чи є це число в масиві ?

let num = prompt("Введіть числа через кому?", "")
let searchNum = prompt("Введіть шукане число?", "")
let arr = num.split(",")
function findNum(searchNum, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == searchNum) {
   return console.log(`Максимальне число ${searchNum} є в масиві`)
    } else {
    continue 
 }
  }
  return console.log(`Числа ${searchNum} НЕ має в масиві`);
}

 findNum(searchNum, arr)


   
