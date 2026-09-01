# 🧠 JavaScript Training

## 📖 О проекте
Этот репозиторий — мой интерактивный дневник практики и изучения JavaScript.
Я изучаю JS системно, двигаясь от базовых основ к продвинутым концепциям языка.
Каждая тема закрепляется задачами трёх уровней: разминка, бизнес-логика и задачи с подвохом.

**Главная цель** — не просто запомнить синтаксис, а научиться мыслить алгоритмически:
разбирать задачу на атомы, понимать работу движка JS «под капотом» (Call Stack, Memory Heap, Lexical Environment, Closures)
и писать чистый, предсказуемый код без неожиданных багов.

Каждый файл с задачей содержит:
- Подробное условие задачи и разбор граничных случаев (Edge Cases).
- Решение с построчными поясняющими комментариями к каждому блоку.
- Синтаксический разбор концепций языка, которые закрепляет задача.

---

## 📌 Прогресс по спринтам

<details >
<summary><b>🟢 Спринт 1: Базовый синтаксис, типы и ветвления (Завершен)</b></summary>
<br>

| Урок | Тема | Статус |
|:---|:---|:---:|
| **02** | Переменные, `const/let`, `use strict` | ✅ done |
| **03** | Типы данных, `typeof`, приведение типов | ✅ done |
| **04** | Математика, инкремент, операторы | ✅ done |
| **05** | Условия `if/else`, тернарный оператор, `??` | ✅ done |
| **06** | `switch`, `prompt`, `confirm` | ✅ done |
| **07** | Циклы `for`, `while`, `do...while` | ✅ done |
| **BOSS** | [🏧 Симулятор банкомата AETHER Neo-Bank (Live Demo)](https://maxolio.github.io/js-training/sprint_01_basics/03_boss_atm_ui_my/) | ✅ done |

</details>

<details >
<summary><b>🟢 Спринт 2: Функции, Scope и Контексты выполнения (Завершен)</b></summary>
<br>

| Урок | Тема | Статус |
|:---|:---|:---:|
| **08** | Функции, Scope, параметры по умолчанию (Task 8.1) | ✅ done |
| **09** | Виды функций, стрелочные, Rest-параметры (Task 9.1) | ✅ done |
| **09+** | Замыкания (Closures) и фабрики функций (Task 9.2) | ✅ done |
| **09+** | Функции высшего порядка (HOF / Callbacks) (Task 9.3) | ✅ done |
| **BOSS** | [⚡ Cyber JS Quiz Engine — Квиз по JS на замыканиях и HOF (Live Demo)](https://maxolio.github.io/js-training/sprint_02_functions_scope/03_boss_quiz_engine/) | ✅ done |

</details>

<details>
<summary><b>⚪ Спринт 3: Объекты и контекст this (Ожидает)</b></summary>
<br>

| Урок | Тема | Статус |
|:---|:---|:---:|
| **10** | Объекты: создание, свойства, вычисляемые ключи | ⏳ pending |
| **11** | Ссылочный тип, клонирование объектов | ⏳ pending |
| **12** | Ключевое слово `this`, методы, потеря контекста | ⏳ pending |
| **BOSS** | Движок Корзины интернет-магазина (Shop Engine UI) | ⏳ pending |

</details>

<details open>
<summary><b>🟡 Спринт 3: Объекты и контекст this (В процессе)</b></summary>
<br>

| Урок | Тема | Статус |
|:---|:---|:---:|
| **10** | Объекты: создание, свойства, вычисляемые ключи (Task 10.1) | ✅ done |
| **11** | Ссылочный тип, клонирование объектов (Task 11.1) | ⏳ pending |
| **12** | Ключевое слово `this`, методы, потеря контекста (Task 12.1) | ⏳ pending |
| **BOSS** | Движок Корзины интернет-магазина (Shop Engine UI) | ⏳ pending |

</details>

---

## 🗂️ Структура проекта

```text
trenirovka_JS/
├── sprint_01_basics/
│   ├── 01_warmup/
│   │   ├── task_1_1_user_profile.js        # Оператор ??, шаблонные строки
│   │   └── task_2_1_variables_config.js    # const/let, camelCase, копирование примитивов
│   ├── 02_practical/
│   │   ├── task_3_1_inspect_entity.js      # typeof, явное приведение типов
│   │   ├── task_4_1_math_operators.js      # Математика, инкремент, Unicode-сравнение
│   │   ├── task_5_1_smart_access.js        # Условия &&, ||, вложенный тернарный
│   │   ├── task_6_1_switch_grades.js       # switch (true), группировка кейсов
│   │   ├── task_7_1_loops_sequence.js      # Цикл for, continue, break
│   │   └── task_7_2_safe_input.js          # Цикл do...while (ввод пароля)
│   └── 03_boss_atm_ui_my/                  # 🏆 ФИНАЛЬНЫЙ БОСС 1 (Банкомат UI)
│       ├── index.html
│       ├── style.css
│       ├── app.js
│       └── README.md
│
├── sprint_02_functions_scope/
│   ├── 01_warmup/
│   │   ├── task_8_1_discount_calculator.js # Scope, default params, early return
│   │   ├── task_9_1_arrow_rest.js          # Arrow functions, rest (...args)
│   │   ├── task_9_2_closures_factory.js    # Closures, Lexical Environment, State Manager
│   │   └── task_9_3_hof_callbacks.js       # HOF, Callbacks, Decorator pattern
│   └── 03_boss_quiz_engine/                # 🏆 ФИНАЛЬНЫЙ БОСС 2 (Cyber Quiz UI)
│       ├── index.html
│       ├── style.css
│       └── app.js
│
├── script.js                               # Точка входа для модулей
├── PLAN.md                                 # Детальный трекер обучения
└── README.md                               # Витрина проекта