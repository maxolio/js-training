'use strict';

/* ==============================================================================
   СПРИНТ 3: Объекты и контекст this
   БЛОК: 01_warmup (Урок 10)

   ЗАДАЧА 10.1: Динамический генератор и валидатор профиля (Objects & Computed Keys)

   🎯 ЦЕЛЬ:
   Написать функцию buildUserProfile(baseData, customKey, customValue, sensitiveKeyToDelete),
   которая динамически собирает, модифицирует и валидирует объект профиля пользователя.

   📥 ВХОДНЫЕ ДАННЫЕ:
   • baseData               {object} — базовый объект (например: { id: 1, name: 'Alex' }).
   • customKey              {string} — динамическое имя ключа (например: 'role').
   • customValue            {any}    — значение для динамического ключа (например: 'admin').
   • sensitiveKeyToDelete   {string} — имя приватного ключа, который нужно удалить из объекта.

   ⚙️ АЛГОРИТМ РАБОТЫ:
   1. Создай новый объект `profile` и скопируй в него все свойства из `baseData`.
   2. Используя вычисляемые свойства или квадратные скобки, добавь в `profile` ключ `[customKey]` со значением `customValue`.
   3. Добавь вычисляемый системный ключ `['createdAt_' + baseData?.id]` со значением текущего года 2026.
   4. Если в `profile` существует ключ `sensitiveKeyToDelete` (проверь через оператор `in`) ➔
      удали его из объекта с помощью оператора `delete`.
   5. С помощью опциональной цепочки `?.` и оператора `??` сформируй поле `profile.city`:
      - Возьми значение из `baseData?.location?.city`.
      - Если города нет или путь вернул undefined/null ➔ запиши дефолт "Не указан".
   6. Верни готовый объект `profile`.
============================================================================== */

// НАПИШИ СВОЕ РЕШЕНИЕ ЗДЕСЬ:
function buildUserProfile(baseData, customKey, customValue, sensitiveKeyToDelete) {
  // --- Блок 1: Поверхностное копирование исходных данных ---
  // Пояснение: оператор spread {...baseData} создает новый независимый объект в памяти.
  // Исходный объект baseData не мутирует и остается нетронутым.
  const profile = { ...baseData };
  // --- Блок 2: Динамическое добавление кастомного ключа ---
  // Пояснение: квадратные скобки profile[customKey] вычисляют имя свойства из строки customKey
  // и присваивают ему переданное значение customValue.
  profile[customKey] = customValue;
  // --- Блок 3: Вычисляемый системный ключ через конкатенацию и ?. ---
  // Пояснение: формируем составное имя ключа 'createdAt_' + id.
  // Опциональная цепочка baseData?.id защищает от ошибки, если baseData вдруг null/undefined.
  const systemKey = `createdAt_${baseData?.id ?? 'unknown'}`;
  profile[systemKey] = 2026;
  // --- Блок 4: Безопасное удаление приватных данных через оператор in ---
  // Пояснение: оператор in точно проверяет наличие ключа в объекте.
  // Если ключ найден — оператор delete безвозвратно удаляет эту пару ключ-значение.
  if (sensitiveKeyToDelete in profile) {
    delete profile[sensitiveKeyToDelete];
  }
  // --- Блок 5: Опциональная цепочка ?. и безопасный дефолт ?? ---
  // Пояснение: baseData?.location?.city безопасно спускается по вложенным объектам без ошибки TypeError.
  // Оператор ?? подставляет дефолт "Не указан", если город равен null или undefined.
  profile.city = baseData?.location?.city ?? 'Не указан';
  // --- Блок 6: Возврат готового объекта ---
  // Пояснение: возвращаем собранный и очищенный объект профиля.
  return profile;
}

// ==============================================================================
// 🧪 ПРИМЕРЫ ВЫЗОВА И ТЕСТЫ:
// ==============================================================================
//  const rawUser = {
//    id: 101,
//    name: 'Max',
//    passwordHash: 'secret_hash_999',
//    location: { city: 'Berlin' }
//  };
//
// console.log(buildUserProfile(rawUser, 'role', 'editor', 'passwordHash'));

// Ожидается объект:
// {
//   id: 101,
//   name: 'Max',
//   role: 'editor',
//   createdAt_101: 2026,
//   city: 'Berlin'
//   (passwordHash удален!)
// }

// const userWithoutCity = { id: 202, name: 'Anna', token: 'xyz' };
// console.log(buildUserProfile(userWithoutCity, 'status', 'active', 'token'));
// city должен стать: "Не указан", createdAt_202: 2026, token удален