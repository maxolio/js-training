'use strict'

/* ==============================================================================
   СПРИНТ 2: Функции, Scope и Контексты выполнения
   БЛОК: 01_warmup (Урок 09)

   ЗАДАЧА 9.1: Стрелочные функции, Rest-параметры и агрегатор данных

   🎯 ЧАСТЬ 1: Стрелочный конвертер валют (Краткий синтаксис)
   Напиши стрелочную функцию `convertCurrency(amount, rate)`:
   • Должна быть записана в ОДНУ строку с неявным возвратом (Implicit Return без return и {}).
   • Возвращает результат умножения `amount * rate`.

   🎯 ЧАСТЬ 2: Агрегатор числовых метрик (Rest-параметры)
   Напиши стрелочную функцию `calculateStats(operation, ...numbers)`:
   • Параметр `operation` {string} — тип операции: "sum", "avg" (среднее), "max", "min".
   • Параметр `...numbers` {number[]} — произвольное количество переданных чисел.

   ⚙️ ПРАВИЛА:
   1. Если массив `numbers` пуст (длина numbers.length === 0) ➔ вернуть 0.
   2. Используй `switch (operation)` для вычисления результата:
      • "sum": сумма всех чисел.
      • "avg": среднее арифметическое (сумма / количество).
      • "max": максимальное число из переданных.
      • "min": минимальное число из переданных.
      • default ➔ null.
   3. Для "avg" вернуть результат, округленный до 2 знаков через `Number(res.toFixed(2))`.
============================================================================== */

// НАПИШИ СВОЙ КОД ЗДЕСЬ:

// 1. Стрелочная функция конвертера (в одну строку):
const convertCurrency = (amount, rate) => amount * rate

// 2. Стрелочная функция со сбором Rest-параметров:
const calculateStats = (operation, ...numbers) => {
  if (numbers.length === 0) {
    return 0
  }

  switch (operation) {
    case 'sum': {
      let sum = 0
      for (const num of numbers) {
        sum += num
      }
      return sum
    }
    case 'avg': {
      let sum = 0
      for (const num of numbers) {
        sum += num
      }
      const avg = sum / numbers.length
      return avg.toFixed(2)
    }
    case 'max': {
      let max = numbers[0]
      for (const num of numbers) {
        if (num > max) max = num
      }
      return max
    }
    case 'min': {
      let min = numbers[0];
      for (const num of numbers) {
        if (num < min) min = num;
      }
      return min;
    }
    default:
      return null
  }
}

// ==============================================================================
// 🧪 ПРИМЕРЫ ВЫЗОВА И ТЕСТЫ:
// ==============================================================================
// console.log(convertCurrency(100, 1.1)); // 110

 //console.log(calculateStats("sum", 10, 20, 30, 40)); // 100
 //console.log(calculateStats("avg", 10, 20, 30, 45)); // 26.25 (105 / 4)
 //console.log(calculateStats("max", 5, 80, 12, 45));  // 80
 console.log(calculateStats("min", 5, 80, 2, 45));   // 2
 //console.log(calculateStats("sum"));                 // 0 (пустой rest)