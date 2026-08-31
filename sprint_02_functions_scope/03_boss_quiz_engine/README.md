Вот готовый, оформленный по стандартам GitHub и портфолио файл README.md для
твоего репозитория.

Скопируй его содержимое в файл README.md в корне проекта:

# ⚡ CYBER JS QUIZ ENGINE

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-BEM-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-SPA-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Architecture](https://img.shields.io/badge/Architecture-Closures%20%26%20Clean%20Code-00f2fe?style=for-the-badge)

Интерактивное веб-приложение (Single Page Application) в стилистике **Cyberpunk / Neon**, разработанное на чистом **Vanilla JavaScript**. Проект представляет собой квиз-тренажер для проверки глубоких знаний продвинутого JS: замыканий, стека вызовов, поднятия (Hoisting), временной мертвой зоны (TDZ) и сборщика мусора.

---

## 🎮 Ключевые возможности и механики

- ⏱ **Динамический таймер (15 сек/вопрос):** обратный отсчет с визуальным предупреждением (смена цвета на тревожно-красный при $\le 5$ сек) и автоматической обработкой тайм-аута.
- 📈 **Продвинутая система подсчета очков:**
  $$\text{Итоговые очки} = 100 \text{ (база)} + (\text{timeLeft} \times 10) + (\text{streak} \times 20)$$
- 🔥 **Комбо-стрик (Combo Streak):** множитель серии безошибочных ответов с сохранением рекорда сессии.
- 🎯 **Система рангов разработчика:** присвоение звания на основе процента набранных очков:
    - 🏆 `SENIOR JS ARCHITECT` ($\ge 80\%$)
    - ⚡ `MIDDLE CLOSURE MASTER` ($\ge 50\%$)
    - 🌱 `JUNIOR FUNCTION CODER` ($\ge 30\%$)
    - 🔍 `TRAINEE SCOPE EXPLORER` ($< 30\%$)
- 🛡 **Защита от дабл-клика и спама:** мгновенная блокировка кнопок (`disabled`) после ответа.
- 📱 **Полная адаптивность:** интерфейс оптимизирован под смартфоны (до 430px) и десктопы.

---

## 🏛 Архитектура проекта

Приложение построено по принципу **разделения ответственности (Separation of Concerns)** на 3 независимых слоя:

┌─────────────────────────────────────────────────────────────┐ │ 1. DATA LAYER
(QUIZ_DATA) │ │ Изолированная база данных вопросов и правильных ответов │
└──────────────────────────────┬──────────────────────────────┘ │
▼ ┌─────────────────────────────────────────────────────────────┐ │ 2. STATE
MANAGER (createQuizEngine) │ │ Движок на замыканиях (Private State & Factory
Function): │ │ - Полная инкапсуляция счета, стрика и таймера │ │ - Защита от
внешних мутаций │ │ - Предоставление строгого Public API │
└──────────────────────────────┬──────────────────────────────┘
│ ▼ ┌─────────────────────────────────────────────────────────────┐ │ 3. UI
CONTROLLER (DOM Controller) │ │ Слой взаимодействия с интерфейсом браузера: │ │
- Выборка элементов строго через [data-js-*] │ │ - Управление БЭМ-модификаторами
  (--correct, --wrong) │ │ - Подписка на события движка (onTick, onFinish) │
  └─────────────────────────────────────────────────────────────┘


---

## 💎 Стандарты кода и Best Practices

1. **Инкапсуляция через замыкания (Closures):**
   Все ключевые переменные состояния (`score`, `streak`, `currentIndex`, `timerInterval`) заперты внутри `createQuizEngine`. Их невозможно изменить извне в обход правил игры.
2. **DOM-привязка строго через `[data-js-*]`:**
   Селекторы стилей (CSS-классы) полностью отделены от JavaScript-логики. Поиск элементов в DOM осуществляется исключительно по data-атрибутам (например, `[data-js-score]`, `[data-js-option-btn]`).
3. **Строгая методология БЭМ:**
   Именование классов в HTML и CSS выполнено по правилу `block__element--modifier` (например, `.cyber-quiz__option-btn--correct`, `.cyber-quiz__results--hidden`).
4. **Контроль утечек памяти (Memory Safety):**
   Очистка асинхронных таймеров через `clearInterval` перед каждым новым вопросом и рестартом.

---

## 📚 Темы вопросов внутри квиза

- **Closures & Lexical Environment** (Замыкания и лексическое окружение)
- **Call Stack** (LIFO-принцип стека вызовов)
- **Hoisting** (Поднятие Function Declaration vs Function Expression)
- **Temporal Dead Zone (TDZ) & Scope** (`let` / `const` блочная видимость)
- **Arrow Functions vs Regular Functions** (Контекст `this`, `arguments`)
- **Rest Parameters & Spread Syntax**
- **Higher-Order Functions (HOF) & Callbacks**
- **Garbage Collector & V8 Engine** (Сборка мусора и ссылки `[[Environment]]`)
- **Default Parameters & Falsy Values**

---

## 🚀 Быстрый старт

Проект не требует сборщиков, компиляторов или сторонних зависимостей.

1. **Клонируйте репозиторий:**
   ```bash
   git clone https://github.com/your-username/cyber-js-quiz.git

2.  Перейдите в папку проекта:
    cd cyber-js-quiz
3.  Откройте index.html в браузере:
    - Просто откройте файл index.html двойным кликом, либо запустите через
      расширение Live Server в VS Code.

📂 Структура файлов

cyber-js-quiz/
├── index.html      # Семантическая разметка (SPA-структура, БЭМ)
├── style.css       # Стилизация, CSS-переменные, анимации, адаптив
├── app.js          # База данных, Движок на замыканиях, UI-контроллер
└── README.md       # Документация проекта

👨‍💻 Автор

Разработано в рамках практики JavaScript Core, продвинутых замыканий и модульной
архитектуры.

