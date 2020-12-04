
// TODO Завдання 3. Отримати від користувача набір чисел через кому, отримати число яке треба знайти.Перевірити чи є це число в масиві ?

let num = prompt("Введіть числа через кому?", "")
let searchNum = prompt("Введіть шукане число?", "")
let arr = num.split(",")
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == searchNum) {
    console.log(`Максимальне число ${searchNum} є в масиві`)
     break;
  }
  else {
    continue
  }
  console.log(`Числа ${searchNum} НЕ має в масиві`);
}


   
