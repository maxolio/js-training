'use strict'

/* ==============================================================================
   ЗАДАЧА 4.1: Анализ выражений, инкремента и сравнений (Урок 04)

   🎯 ЦЕЛЬ:
   Написать функцию calculateMetrics(a, b), которая производит математические
   расчеты над входными строками/числами и демонстрирует работу инкремента и сравнения строк.

   📋 ШАГИ:
   1. Преобразуй входные аргументы `a` и `b` к числам с помощью унарного плюса (+).
   2. Вычисли остаток от деления `a % b` и возведи полученный результат в куб (** 3).
      Запиши результат в переменную `mathResult`.
   3. Продемонстрируй инкремент со счетчиком `let counter = 10`:
      • let res1 = ++counter; // префиксный
      • let res2 = counter++; // постфиксный
   4. Сравни строки 'apple' и 'banana' (кто дальше по алфавиту) и запиши булев результат в `isAppleGreater`.
   5. Верни строку формата:
      "Math: [mathResult] | Inc: res1=[res1], res2=[res2], counter=[counter] | Compare: [isAppleGreater]"
============================================================================== */

// НАПИШИ СВОЕ РЕШЕНИЕ ЗДЕСЬ:
function calculateMetrics(a, b) {
  const numA = Number(a)
  const numB = Number(b)

  const mathResult = (numA % numB) ** 3

  let counter = 10

  const res1 = ++counter
  const res2 = counter++

  const isAppleGreater = 'apple' > 'banana'

  return [ `Math: ${mathResult}`,
   `Inc: res1=${res1}`,
   `res2=${res2}`,
   `counter=${counter}`,
   `Compare: ${isAppleGreater}`].join('\n')
}


// ==============================================================================
// 🧪 ПРИМЕРЫ ВЫЗОВА И ТЕСТЫ:
// ==============================================================================
 console.log(calculateMetrics('11', '4'));
// 11 % 4 = 3 -> 3 ** 3 = 27
// counter: res1 = 11, res2 = 11, counter = 12
// isAppleGreater: false ('apple' < 'banana')
// Ожидается: "Math: 27 | Inc: res1=11, res2=11, counter=12 | Compare: false"