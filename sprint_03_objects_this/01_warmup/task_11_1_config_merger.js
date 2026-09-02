'use strict';

/* ==============================================================================
   СПРИНТ 3: Объекты и контекст this
   БЛОК: 01_warmup (Урок 11)

   ЗАДАЧА 11.1: Безопасное глубокое клонирование и слияние конфигураций (Deep Copy & Spread)

   🎯 ЦЕЛЬ:
   Написать функцию mergeConfigs(defaultConfig, userOverrides, isDeepCloneRequired),
   которая объединяет базовые настройки приложения с пользовательскими переопределениями,
   обеспечивая защиту от мутаций исходных объектов.

   📥 ВХОДНЫЕ ДАННЫЕ:
   • defaultConfig         {object}  — объект настроек по умолчанию (с вложенными объектами).
   • userOverrides         {object}  — пользовательские переопределения (может быть пустым или содержать вложенные данные).
   • isDeepCloneRequired   {boolean} — флаг: если true ➔ создать глубокую копию через structuredClone.

   ⚙️ АЛГОРИТМ РАБОТЫ:
   1. Сделай базовое слияние объектов через Spread-оператор `{ ...defaultConfig, ...userOverrides }`
      в новую переменную `mergedConfig`.
   2. Если и в `defaultConfig`, и в `userOverrides` присутствуют вложенные объекты `nestedSettings`:
      - Объедини их отдельно через Spread:
        `mergedConfig.nestedSettings = { ...defaultConfig.nestedSettings, ...userOverrides.nestedSettings };`
   3. Если передан флаг `isDeepCloneRequired === true`:
      - Верни глубокую копию результата с помощью `structuredClone(mergedConfig)`.
   4. Иначе:
      - Верни обычный `mergedConfig`.
============================================================================== */

// НАПИШИ СВОЕ РЕШЕНИЕ ЗДЕСЬ:
function mergeConfigs(defaultConfig, userOverrides = {}, isDeepCloneRequired = false) {

  const mergeConfig = {...defaultConfig, ...userOverrides}

  if (defaultConfig?.security && userOverrides?.security) {
    mergeConfig.security = {
      ...defaultConfig.security,
      ...userOverrides?.security
    }
  }

  if (isDeepCloneRequired) {
    return structuredClone(mergeConfig)
  }

  return mergeConfig

}



// ==============================================================================
// 🧪 ПРИМЕРЫ ВЫЗОВА И ТЕСТЫ:
// ==============================================================================
// const baseAppConfig = {
//   appName: "CyberApp",
//   version: "1.0.0",
//   security: {
//     twoFactor: false,
//     sessionTimeout: 15
//   }
// };
//
// const userCustomConfig = {
//   version: "1.1.0",
//   security: {
//     twoFactor: true
//   }
// };
//
// const finalConfig = mergeConfigs(baseAppConfig, userCustomConfig, true);
// console.log(finalConfig);
// Ожидается:
// {
//   appName: "CyberApp",
//   version: "1.1.0",
//   security: { twoFactor: true, sessionTimeout: 15 }
// }

// Проверка независимости памяти (мутация клона не должна ломать оригинал):
// finalConfig.security.sessionTimeout = 999;
// console.log(baseAppConfig.security.sessionTimeout); // Должно остаться 15!