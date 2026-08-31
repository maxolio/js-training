'use strict'

/* ==============================================================================
   СПРИНТ 2: Функции, Scope и Контексты выполнения
   БЛОК: 01_warmup (Урок 09+)

   ЗАДАЧА 9.3: Функции высшего порядка (HOF) и конвейер обработки данных

   🎯 ЧАСТЬ 1: Универсальный фильтратор данных (customFilter)
   Напиши HOF-функцию `customFilter(items, predicateCallback)`:
   • Принимает массив `items` и функцию-предикат `predicateCallback(item)`.
   • Создает новый массив `result = []`.
   • Перебирает `items` через цикл `for...of`:
     - Если `predicateCallback(item) === true` ➔ добавляет `item` в `result`.
   • Возвращает отфильтрованный массив `result`.

   🎯 ЧАСТЬ 2: Безопасный декоратор вызова (withValidation)
   Напиши HOF-декоратор `withValidation(fn, validatorCallback)`:
   • Принимает целевую функцию `fn` и функцию-валидатор `validatorCallback(...args)`.
   • Возвращает новую функцию-обертку `function(...args)`:
     - Сначала запускает `validatorCallback(...args)`.
     - Если валидатор вернул `false` ➔ вернуть строку: "Ошибка: данные не прошли валидацию".
     - Если валидатор вернул `true` ➔ выполнить и вернуть результат целевой функции: `fn(...args)`.
============================================================================== */

// НАПИШИ СВОЙ КОД ЗДЕСЬ:

// 1. Универсальный кастомный фильтр
function customFilter(items, predicateCallback) {
  const result = []

  for (const item of items) {
    if (predicateCallback(item) === true) {
      result.push(item)
    }
  }
  return result
}

// 2. Декоратор-валидатор
function withValidation(fn, validatorCallback) {
  return function (...args) {
    const isValid = validatorCallback(...args)
    if (!isValid) {
      return 'Ошибка валидации данных'
    }
    return fn(...args)
  }
}

// ==============================================================================
// 🧪 ПРИМЕРЫ ВЫЗОВА И ТЕСТЫ:
// ==============================================================================
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// const isEven = num => num % 2 === 0
// const isMultipleOfThree = num => num % 3 === 0
// const isGreaterThanFive = num => num > 8
//
// console.log(customFilter(numbers, isEven))            // [2, 4, 6, 8]
// console.log(customFilter(numbers, isGreaterThanFive)) // [6, 7, 8]
// console.log(customFilter(numbers, isMultipleOfThree)) // [6, 7, 8]

//
//

// const multiply = (a, b) => a * b;
//  const isPositiveNumbers = (a, b) => a > 0 && b > 0;
//  const safeMultiply = withValidation(multiply, isPositiveNumbers);
//
//  console.log(safeMultiply(5, 4));  // 20
//  console.log(safeMultiply(-2, 4)); // "Ошибка: данные не прошли валидацию"