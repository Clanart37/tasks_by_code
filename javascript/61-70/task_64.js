/*
Задача 64: Даны два целых числа: A, B. Проверить истинность высказывания: «Ровно одно из чисел A и B нечетное»

Категория: Логические выражения

Во всех заданиях данной группы требуется вывести логическое значение True, если приведенное высказывание для предложенных исходных данных является истинным, и значение False в противном случае. Все числа, для которых указано количество цифр (двузначное число, трехзначное число и т. д.), считаются целыми положительными.

#category_boolean
*/
const A = 5
const B = 3

console.log((A%2 != 0) ^ (B%2 != 0))