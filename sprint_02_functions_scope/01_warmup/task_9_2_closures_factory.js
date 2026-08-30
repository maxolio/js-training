'use strict'

/* ==============================================================================
   СПРИНТ 2: Функции, Scope и Контексты выполнения
   БЛОК: 01_warmup (Урок 09+)

   ЗАДАЧА 9.2: Фабрика функций и приватный State Manager (Замыкания)

   🎯 ЧАСТЬ 1: Фабрика префиксных логгеров (createLogger)
   Напиши функцию `createLogger(prefix)`:
   • Принимает строку `prefix` (например, "AUTH", "API", "DB").
   • Возвращает новую функцию `log(message)`, которая возвращает строку:
     `"[prefix]: message"`.

   🎯 ЧАСТЬ 2: Приватный менеджер состояния / Счетчик с шагом (createCounter)
   Напиши функцию `createCounter(initialValue = 0, step = 1)`:
   • Принимает начальное значение `initialValue` (дефолт: 0) и шаг `step` (дефолт: 1).
   • Переменная `count` должна быть приватной (инкапсулирована внутри замыкания).
   • Функция возвращает объект с 4 методами:
     1. `increment()`: увеличивает `count` на `step` и возвращает новый `count`.
     2. `decrement()`: уменьшает `count` на `step` и возвращает новый `count`.
     3. `reset()`: сбрасывает `count` к `initialValue` и возвращает его.
     4. `getValue()`: просто возвращает текущее значение `count`.
============================================================================== */

// НАПИШИ СВОЙ КОД ЗДЕСЬ:

// 1. Фабрика логгеров
function createLogger(prefix) {
  return function (message) {
    return `[${prefix}]: ${message}`
  }
}

// 2. Фабрика счетчика с методами
function createCounter(initialValue = 0, step = 1) {
  let count = initialValue

  return {
    increment() {
      count += step
      return count
    },
    decrement() {
      count -= step
      return count
    },
    reset() {
      count = initialValue
      return count
    },
    getValue() {
      return count
    },
  }
}


// ==============================================================================
// 🧪 ПРИМЕРЫ ВЫЗОВА И ТЕСТЫ:
// ==============================================================================
//const authLog = createLogger("AUTH");
//const dbLog = createLogger("DB");

//console.log(authLog('Пользователь вошел')) // "[AUTH]: Пользователь вошел"
//console.log(dbLog('Подключение успешно'))  // "[DB]: Подключение успешно"

 const counter = createCounter(10, 5);
 console.log(counter.getValue());    // 10
 console.log(counter.increment());   // 15
 console.log(counter.increment());   // 20
 console.log(counter.decrement());   // 15
 console.log(counter.reset());       // 10
 console.log(counter.count);         // undefined (прямого доступа нет!)