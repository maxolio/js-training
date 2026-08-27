'use strict';

/* ==============================================================================
   ЗАДАЧА 3.1: Паспорт сущности (Урок 03)

   ЦЕЛЬ:
   Написать функцию inspectEntity(entity), которая принимает любое значение
   и возвращает строку с полной информацией о нём.

   ШАГИ:
   1. Получи тип значения через typeof -> запиши в переменную entityType.
   2. Если entity === null, исправь entityType на 'null'
      (обход бага: typeof null === 'object').
   3. Верни строку формата:
      "Значение: X | Тип: X | Boolean: X | Number: X"

   ЛОВУШКИ:
   - typeof null возвращает 'object' -> нужна ручная проверка через ===
   - Number(undefined) = NaN, но Number(null) = 0
   - Boolean("0") = true (непустая строка - всегда truthy)
============================================================================== */

// НАПИШИ СВОЁ РЕШЕНИЕ ЗДЕСЬ:
function inspectEntity(entity) {
  let entityType = typeof entity
  if (entity === null) {
    entityType = 'null'
  }

  return `Значение: ${entity} | Тип: ${entityType} | Boolean: ${Boolean(entity)} | Number: ${Number(entity)}`
}



 console.log(inspectEntity(null));
// Ожидается: "Значение: null | Тип: null | Boolean: false | Number: 0"

 console.log(inspectEntity(undefined));
// Ожидается: "Значение: undefined | Тип: undefined | Boolean: false | Number: NaN"

 console.log(inspectEntity(""));
console.log(inspectEntity(" "));
// Ожидается: "Значение:  | Тип: string | Boolean: false | Number: 0"

 console.log(inspectEntity("42px"));
// Ожидается: "Значение: 42px | Тип: string | Boolean: true | Number: NaN"

 console.log(inspectEntity(true));
// Ожидается: "Значение: true | Тип: boolean | Boolean: true | Number: 1"

console.log(inspectEntity([]))
console.log(inspectEntity(100n))
console.log(inspectEntity(" "));
/*

### ❓ Вопрос 1 (BigInt и интерполяция)

Что вернет вызов `inspectEntity(100n)`?
  1. Какое значение покажет `Тип`?
  2. Что будет в `Boolean: [...]`?
  3. Что произойдет в `Number: [...]`? *(Подвох: можно ли сделать `Number(100n)`?)*

---

### ❓ Вопрос 2 (Ловушка пустой строки vs строки с пробелом)
Что вернет функция для двух разных вызовов:
  1. `inspectEntity("")` (пустая строка)
2. `inspectEntity(" ")` (строка с одним пробелом)
*В чем разница в их булевом (`Boolean`) и числовом (`Number`) представлениях?*

---

### ❓ Вопрос 3 (Объекты и массивы)
Если мы передадим в функцию пустой массив `inspectEntity([])`:
1. Какой `Тип` определит `typeof`?
  2. Чему будет равен `Boolean([])`?
  3. Чему будет равен `Number([])`?

  Жду твои ответы! Можно отвечать по порядку (1, 2, 3).*/
