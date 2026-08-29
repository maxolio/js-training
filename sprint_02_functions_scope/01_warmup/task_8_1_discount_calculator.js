'use strict'

/* ==============================================================================
   СПРИНТ 2: Функции, Scope и Контексты выполнения
   БЛОК: 01_warmup (Урок 08)

   ЗАДАЧА 8.1: Калькулятор стоимости заказа и Scope

   🎯 ЦЕЛЬ:
   Написать функцию calculateOrderTotal(price, quantity, discount, taxRate),
   которая рассчитывает финальную стоимость заказа с учетом количества, скидки и налога.

   📥 ПАРАМЕТРЫ И ДЕФОЛТЫ (ES6 Default Parameters):
   • price      {number} — цена за единицу товара (обязательный параметр).
   • quantity   {number} — количество (дефолт: 1).
   • discount   {number} — скидка в процентах от 0 до 100 (дефолт: 0).
   • taxRate    {number} — налог в виде коэффициента, например 0.2 для 20% (дефолт: 0.1).

   ⚙️ ПРАВИЛА РАСЧЕТА (Early Return & Scope):
   1. Валидация входных данных (Early Return):
      • Если `price <= 0` или `quantity <= 0` ➔ вернуть строку "Ошибка: некорректные данные".
      • Если `discount < 0` или `discount > 100` ➔ вернуть "Ошибка: некорректная скидка".
   2. Расчет:
      • Посчитай базовую стоимость: `rawTotal = price * quantity`.
      • Вычти процент скидки: `discounted = rawTotal - (rawTotal * (discount / 100))`.
      • Добавь налог: `finalTotal = discounted + (discounted * taxRate)`.
   3. Верни округленное до 2 знаков число: `Number(finalTotal.toFixed(2))`.
============================================================================== */

// НАПИШИ СВОЕ РЕШЕНИЕ ЗДЕСЬ:
function calculateOrderTotal(price, quantity = 1, discount = 0, taxRate = 0.1) {

  if (price <= 0 || quantity <= 0) {
    return 'Ошибка: некорректные данные'
  }

  if (discount < 0 || discount > 100) {
    return 'Ошибка: некорректная скидка'
  }

  const rawTotal = price * quantity

  const discounted = rawTotal - (rawTotal * (discount / 100))

  const finalTotal = discounted + (discounted * taxRate)

  return finalTotal.toFixed(2)

}

// ==============================================================================
// 🧪 ПРИМЕРЫ ВЫЗОВА И ТЕСТЫ:
// ==============================================================================
//console.log(calculateOrderTotal(100));            // 110 (100 * 1 без скидки + 10%
// налог)
//console.log(calculateOrderTotal(100, 2, 10, 0.2));// 198 (200 - 10% = 180 + 20% =
// 216) -> (200 - 20 = 180; 180 * 1.2 = 216)
// console.log(calculateOrderTotal(-50, 1));        // "Ошибка: некорректные данные"
// console.log(calculateOrderTotal(100, 1, 150));   // "Ошибка: некорректная скидка"