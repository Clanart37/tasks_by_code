/*
Задача 19: Даны десять вещественных чисел. Найти их сумму

Категория: Последовательности

Во всех заданиях данной группы предполагается, что исходный набор содержит ненулевое число элементов. Последовательности это не то же самое что и массивы, они поддерживаются не во всех языках программирования. Поэтому данный тип задания можно пропустить или решить его используя обычный одномерный массив.

Для решения заданий из данной группы следует использовать «однопроходные» алгоритмы, позволяющие получить требуемый результат после однократного просмотра набора исходных данных. Однопроходные алгоритмы обладают важным преимуществом: для них не требуется хранить в памяти одновременно весь набор данных, поэтому при программной реализации этих алгоритмов можно не использовать массивы.

#category_series
*/
let A = [9, 5, 1, 4, 14, 2, 0, 6, 32, 111]

let sum = 0
for (let i = 0; i < A.length; i++) {
  sum += A[i]
}

console.log(sum)