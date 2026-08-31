'use strict';

/* ==============================================================================
   ФИНАЛЬНЫЙ БОСС СПРИНТА 2: Cyber JS Quiz Engine (БЭМ + data-js-*)
============================================================================== */

const QUIZ_DATA = [
  {
    category: 'CLOSURES',
    question: 'Что такое Замыкание (Closure) в JavaScript?',
    options: [
      'Способность функции запоминать переменные из внешнего лексического окружения',
      'Процесс закрытия вкладки браузера',
      'Автоматическое удаление переменных сборщиком мусора',
      'Метод остановки бесконечного цикла'
    ],
    correctIndex: 0
  },
  {
    category: 'CALL STACK',
    question: 'По какому принципу работает Стек вызовов (Call Stack)?',
    options: [
      'FIFO (First In, First Out)',
      'LIFO (Last In, First Out / Последний зашел — первый вышел)',
      'Случайный порядок вызовов',
      'По алфавиту имен функций'
    ],
    correctIndex: 1
  },
  {
    category: 'HOISTING',
    question: 'Что происходит при вызове Function Declaration ДО строки ее объявления?',
    options: [
      'Выбрасывается ошибка ReferenceError',
      'Функция возвращает undefined',
      'Функция успешно выполняется благодаря всплытию (Hoisting)',
      'Код зависает в бесконечном ожидании'
    ],
    correctIndex: 2
  },
  {
    category: 'TDZ & SCOPE',
    question: 'Что такое Временная мёртвая зона (Temporal Dead Zone / TDZ)?',
    options: [
      'Зона от начала блока до объявления let/const, где к переменной запрещен доступ',
      'Время, пока браузер загружает страницу',
      'Период работы таймера setTimeout',
      'Специальный режим строгости use strict'
    ],
    correctIndex: 0
  },
  {
    category: 'ARROW FUNCTIONS',
    question: 'В чем ключевое отличие Стрелочных функций от обычных?',
    options: [
      'Они не могут принимать числовые параметры',
      'У них нет собственного контекста this и объекта arguments',
      'Они выполняются строго асинхронно',
      'Их нельзя сохранять в переменные'
    ],
    correctIndex: 1
  },
  {
    category: 'ARROW SYNTAX',
    question: 'Как вернуть объект из стрелочной функции без ключевого слова return?',
    options: [
      'Обернуть объект в фигурные скобки: x => { val: x }',
      'Обернуть объект в круглые скобки: x => ({ val: x })',
      'Использовать квадратные скобки: x => [ val: x ]',
      'Это невозможно сделать в одну строку'
    ],
    correctIndex: 1
  },
  {
    category: 'REST PARAMETERS',
    question: 'Где в списке параметров должен располагаться Rest-параметр (...args)?',
    options: [
      'Строго самым первым: (...args, a, b)',
      'Строго самым последним: (a, b, ...args)',
      'В любом месте по желанию разработчика',
      'Только внутри тела функции'
    ],
    correctIndex: 1
  },
  {
    category: 'HOF & CALLBACKS',
    question: 'Какая функция называется Функцией Высшего Порядка (HOF)?',
    options: [
      'Функция, принимающая другую функцию как аргумент или возвращающая функцию',
      'Функция с самым большим количеством строк кода',
      'Главная точка входа в скрипт',
      'Функция, написанная только через ключевое слово class'
    ],
    correctIndex: 0
  },
  {
    category: 'GARBAGE COLLECTOR',
    question: 'Почему переменная в замыкании не удаляется сборщиком мусора после завершения родителя?',
    options: [
      'Потому что движок забывает про нее',
      'Потому что внутренняя функция удерживает скрытую ссылку [[Environment]]',
      'Потому что она автоматически становится глобальной window',
      'Потому что переменная заблокирована браузером'
    ],
    correctIndex: 1
  },
  {
    category: 'DEFAULT PARAMS',
    question: 'В каком случае сработает значение параметра по умолчанию: function f(a = 10)?',
    options: [
      'Только если передать null',
      'Если аргумент не передан или передан явно как undefined',
      'Если передать число 0 или пустую строку',
      'При любом ложном (falsy) значении'
    ],
    correctIndex: 1
  }
];

// ДВИЖОК КВИЗА НА ЗАМЫКАНИЯХ
function createQuizEngine(questions, timePerQuestion = 15) {
  let currentIndex = 0;
  let score = 0;
  let streak = 0;
  let maxStreak = 0;
  let correctAnswersCount = 0;
  let timeLeft = timePerQuestion;
  let timerInterval = null;

  let onTickCallback = null;
  let onFinishCallback = null;

  const stopTimer = () => {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  };

  const startTimer = () => {
    stopTimer();
    timeLeft = timePerQuestion;
    if (onTickCallback) onTickCallback(timeLeft);

    timerInterval = setInterval(() => {
      timeLeft--;
      if (onTickCallback) onTickCallback(timeLeft);

      if (timeLeft <= 0) {
        stopTimer();
        submitAnswer(-1);
      }
    }, 1000);
  };

  const submitAnswer = (selectedIndex) => {
    stopTimer();

    const currentQ = questions[currentIndex];
    const isCorrect = selectedIndex === currentQ.correctIndex;

    if (isCorrect) {
      streak++;
      if (streak > maxStreak) maxStreak = streak;
      correctAnswersCount++;
      const timeBonus = timeLeft * 10;
      const streakBonus = streak * 20;
      score += 100 + timeBonus + streakBonus;
    } else {
      streak = 0;
    }

    return {
      isCorrect,
      correctIndex: currentQ.correctIndex,
      score,
      streak
    };
  };

  const nextQuestion = () => {
    currentIndex++;
    if (currentIndex < questions.length) {
      startTimer();
      return true;
    } else {
      stopTimer();
      if (onFinishCallback) {
        onFinishCallback(getFinalStats());
      }
      return false;
    }
  };

  const getFinalStats = () => ({
    finalScore: score,
    correctCount: `${correctAnswersCount}/${questions.length}`,
    maxStreak: `x${maxStreak}`,
    rank: getRank(score, questions.length)
  });

  const getRank = (finalScore, totalQ) => {
    const maxPossible = totalQ * 300;
    const ratio = finalScore / maxPossible;

    switch (true) {
      case ratio >= 0.8: return '🏆 SENIOR JS ARCHITECT';
      case ratio >= 0.5: return '⚡ MIDDLE CLOSURE MASTER';
      case ratio >= 0.3: return '🌱 JUNIOR FUNCTION CODER';
      default:           return '🔍 TRAINEE SCOPE EXPLORER';
    }
  };

  const reset = () => {
    currentIndex = 0;
    score = 0;
    streak = 0;
    maxStreak = 0;
    correctAnswersCount = 0;
    startTimer();
  };

  return {
    getCurrentQuestion: () => questions[currentIndex],
    getCurrentIndex: () => currentIndex,
    getTotalQuestions: () => questions.length,
    getScore: () => score,
    getStreak: () => streak,
    submitAnswer,
    nextQuestion,
    reset,
    onTick: (cb) => { onTickCallback = cb; },
    onFinish: (cb) => { onFinishCallback = cb; },
    start: () => startTimer()
  };
}

// UI-КОНТРОЛЛЕР
document.addEventListener('DOMContentLoaded', () => {
  const scoreDisplay = document.querySelector('[data-js-score]');
  const streakDisplay = document.querySelector('[data-js-streak]');
  const timerDisplay = document.querySelector('[data-js-timer]');
  const progressBar = document.querySelector('[data-js-progress]');
  const questionCounter = document.querySelector('[data-js-counter]');
  const questionCategory = document.querySelector('[data-js-category]');
  const questionText = document.querySelector('[data-js-question-text]');
  const optionsContainer = document.querySelector('[data-js-options]');

  const quizScreen = document.querySelector('[data-js-quiz-screen]');
  const resultsScreen = document.querySelector('[data-js-results-screen]');
  const finalScoreEl = document.querySelector('[data-js-final-score]');
  const correctCountEl = document.querySelector('[data-js-correct-count]');
  const maxStreakEl = document.querySelector('[data-js-max-streak]');
  const resultRankEl = document.querySelector('[data-js-rank]');
  const restartBtn = document.querySelector('[data-js-restart]');

  const quiz = createQuizEngine(QUIZ_DATA, 15);

  quiz.onTick((time) => {
    timerDisplay.textContent = `${time}s`;
    timerDisplay.style.color = time <= 5 ? 'var(--neon-red)' : 'var(--neon-cyan)';
  });

  quiz.onFinish((stats) => {
    quizScreen.style.display = 'none';
    resultsScreen.classList.remove('cyber-quiz__results--hidden');

    finalScoreEl.textContent = stats.finalScore;
    correctCountEl.textContent = stats.correctCount;
    maxStreakEl.textContent = stats.maxStreak;
    resultRankEl.textContent = `РАНГ: ${stats.rank}`;
  });

  const renderQuestion = () => {
    const q = quiz.getCurrentQuestion();
    const currentIdx = quiz.getCurrentIndex();
    const total = quiz.getTotalQuestions();

    questionCounter.textContent = `Вопрос ${currentIdx + 1} из ${total}`;
    questionCategory.textContent = q.category;
    questionText.textContent = q.question;
    progressBar.style.width = `${(currentIdx / total) * 100}%`;

    scoreDisplay.textContent = quiz.getScore();
    streakDisplay.textContent = `x${quiz.getStreak()}`;

    optionsContainer.innerHTML = '';
    q.options.forEach((optText, index) => {
      const btn = document.createElement('button');
      btn.className = 'cyber-quiz__option-btn';
      btn.setAttribute('data-js-option-btn', '');
      btn.setAttribute('data-js-index', index);
      btn.innerHTML = `<span class="cyber-quiz__option-num">[0${index + 1}]</span> ${optText}`;

      btn.addEventListener('click', () => handleOptionClick(index));
      optionsContainer.appendChild(btn);
    });
  };

  const handleOptionClick = (selectedIndex) => {
    const allButtons = optionsContainer.querySelectorAll('[data-js-option-btn]');
    allButtons.forEach((b) => (b.disabled = true));

    const result = quiz.submitAnswer(selectedIndex);

    allButtons.forEach((b) => {
      const idx = Number(b.getAttribute('data-js-index'));
      if (idx === result.correctIndex) {
        b.classList.add('cyber-quiz__option-btn--correct');
      } else if (idx === selectedIndex && !result.isCorrect) {
        b.classList.add('cyber-quiz__option-btn--wrong');
      }
    });

    scoreDisplay.textContent = result.score;
    streakDisplay.textContent = `x${result.streak}`;

    setTimeout(() => {
      const hasNext = quiz.nextQuestion();
      if (hasNext) {
        renderQuestion();
      }
    }, 1200);
  };

  restartBtn.addEventListener('click', () => {
    resultsScreen.classList.add('cyber-quiz__results--hidden');
    quizScreen.style.display = 'block';
    quiz.reset();
    renderQuestion();
  });

  quiz.start();
  renderQuestion();
});