/*
Задача 47: Дано двузначное число. Вывести число, полученное при перестановке цифр исходного числа

Категория: Целые числа

#category_integer
*/
let a = 36
a1 = a % 10
a2 = Math.trunc(a / 10)

console.log(`${a1}${a2}`)