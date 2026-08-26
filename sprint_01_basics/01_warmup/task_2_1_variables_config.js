'use strict';

/* ==============================================================================
   ЗАДАЧА 2.1: Конфигурация и строгий режим (Урок 02)
   
   🎯 ЦЕЛЬ:
   Закрепить объявление переменных (const, let), строгий режим ('use strict'),
   правила именования (UPPER_SNAKE_CASE, camelCase) и независимое копирование примитивов.

   📋 ШАГИ ВЫПОЛНЕНИЯ:
   1. Объяви константу для базового цвета темы APP_THEME_COLOR со значением '#1a73e8'.
   2. Объяви в одну строку через let три переменные:
      • userName со значением 'Alex'
      • userAge со значением 25
      • isLoggedIn со значением true
   3. Создай переменную currentUser и присвой ей значение переменной userName.
   4. Измени значение userName на 'Max'.
   5. Выведи в консоль currentUser и userName, чтобы убедиться в независимости копирования.
============================================================================== */

// НАПИШИ СВОЙ КОД ЗДЕСЬ:
const APP_THEME_COLOR = '#1a73e8'

let userName = 'Alex', userAge = 25, isLoggedId = true
let currentUser = userName
userName = 'Max'

console.log(userName, currentUser)


// ==============================================================================
// 🧪 ПРИМЕРЫ ВЫЗОВА И ТЕСТЫ:
// ==============================================================================
// console.log('APP_THEME_COLOR:', APP_THEME_COLOR); // '#1a73e8'
// console.log('currentUser:', currentUser);         // 'Alex'
// console.log('userName:', userName);               // 'Max'
// console.log('userAge:', userAge, 'isLoggedIn:', isLoggedIn); // 25, true