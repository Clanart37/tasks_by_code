/*
Задача 46: Дано двузначное число. Найти сумму и произведение его цифр

Категория: Целые числа

#category_integer
*/
let a = 79
a1 = a % 10
a2 = Math.trunc(a / 10)

console.log(`Сумма цифр числа ${a} = ${a1+a2}`)
console.log(`Произведение цифр числа ${a} = ${a1*a2}`)