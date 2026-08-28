'use strict'

const CORRECT_PIN = '1234'
const MAX_ATTEMPTS = 5
const USER_NAME = 'Alex'

let currentBalance = 4520       // Текущий баланс ($)
let enteredPin = ''            // Текущий вводимый PIN
let attemptsLeft = MAX_ATTEMPTS// Счетчик оставшихся попыток
let isAuthorized = false       // Флаг успешного входа
let totalOperations = 0        // Счетчик совершенных операций
let transactionsHistory = []   // История для печати чека

// №2. ПОИСК DOM-ЭЛЕМЕНТОВ (через data-js-*)
const authStatusEl = document.querySelector('[data-js-auth-status]')
const screenMessageEl = document.querySelector('[data-js-screen-message]')
const balanceDisplayEl = document.querySelector('[data-js-balance-display]')
const pinDotsEl = document.querySelector('[data-js-pin-dots]')
const menuActionsEl = document.querySelector('[data-js-menu-actions]')
const receiptLogEl = document.querySelector('[data-js-receipt-log]')

const keypadButtons = document.querySelectorAll('[data-js-key]')
const actionButtons = document.querySelectorAll('[data-js-action]')

// №3. СЛУШАТЕЛИ КЛАВИАТУРЫ (NUMPAD)
keypadButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (isAuthorized || attemptsLeft <= 0) return

    const key = btn.dataset.jsKey

    if (key === 'clear') {
      enteredPin = ''
      updatePinDisplay()
    } else if (key === 'enter') {
      processPinAuth()
    } else if (enteredPin.length < 4) {
      enteredPin += key
      updatePinDisplay()
    }
  })
})

// №4. ОБНОВЛЕНИЕ ТОЧЕК НА ЭКРАНЕ (_ _ _ _)
function updatePinDisplay() {
  let dots = ''

  for (let i = 0; i < 4; i++) {
    dots += i < enteredPin.length ? '● ' : '_ '
  }
  pinDotsEl.textContent = dots.trim()
}

// №5. АВТОРИЗАЦИЯ И ПРОВЕРКА PIN-КОДА
function processPinAuth() {
  if (enteredPin.length < 4) {
    screenMessageEl.textContent = 'Введите 4 цифры !!!'
    return
  }

  if (enteredPin === CORRECT_PIN) {
    isAuthorized = true

    // Переключаем БЭМ-модификаторы статуса
    authStatusEl.textContent = '🔓 UNLOCKED'
    authStatusEl.classList.remove('screen__status--locked')
    authStatusEl.classList.add('screen__status--unlocked')

    screenMessageEl.textContent = `ДОБРО ПОЖАЛОВАТЬ, ${USER_NAME}! ВЫБЕРИТЕ ДЕЙСТВИЕ:`

    // Скрываем точки PIN, показываем баланс
    pinDotsEl.classList.add('hidden')
    balanceDisplayEl.classList.remove('hidden')
    updateBalanceDisplay(currentBalance)

    // Разблокируем кнопки действий
    menuActionsEl.classList.remove('screen__actions--disabled')
  } else {
    // --- ОШИБКА ВВОДА PIN ---
    attemptsLeft--;
    enteredPin = '';
    updatePinDisplay();

    if (attemptsLeft > 0) {
      screenMessageEl.textContent = `НЕВЕРНЫЙ PIN! ОСТАЛОСЬ ПОПЫТОК: ${attemptsLeft}`
    } else  {
      screenMessageEl.textContent = '❌ КАРТА ЗАБЛОКИРОВАНА!';
      authStatusEl.textContent = '🚫 BLOCKED';
      authStatusEl.classList.add('screen__status--locked');
    }
  }
}

// №6. ВЫВОД БАЛАНСА (с защитным оператором ??)
function updateBalanceDisplay(amount) {
  const safeBalance = amount ?? 0;
  balanceDisplayEl.textContent = `$${safeBalance.toFixed(2)}`;
}

// №7. ОБРАБОТЧИК КНОПОК ДЕЙСТВИЙ (SWITCH CASE)
actionButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (!isAuthorized) return

    // Считываем действие из data-js-action="..."
    const action = btn.dataset.jsAction
    executeAction(action)
  })
})

function executeAction(actionType) {
  totalOperations++;

  switch (actionType) {
    case 'balance':
      screenMessageEl.textContent = `ТЕКУЩИЙ БАЛАНС: $${currentBalance.toFixed(2)}`;
      break;

    case 'withdraw':
      if (currentBalance >= 500) {
        currentBalance -= 500;
        transactionsHistory.push(`- $500.00 (Снятие наличных)`);
        updateBalanceDisplay(currentBalance);
        screenMessageEl.textContent = 'УСПЕШНО: ВЫДАНО $500.00';
      } else {
        screenMessageEl.textContent = 'ОШИБКА: НЕДОСТАТОЧНО СРЕДСТВ!';
      }
      break;

    case 'deposit':
      currentBalance += 1000;
      transactionsHistory.push(`+ $1,000.00 (Пополнение счета)`);
      updateBalanceDisplay(currentBalance);
      screenMessageEl.textContent = 'УСПЕШНО: ВНЕСЕНО $1,000.00';
      break;

    case 'receipt':
      showReceipt();
      break;

    default:
      screenMessageEl.textContent = 'НЕИЗВЕСТНАЯ ОПЕРАЦИЯ';
  }
}

// №8. ГЕНЕРАЦИЯ ЧЕКА (ЦИКЛ FOR + CONTINUE)
function showReceipt() {
  if (transactionsHistory.length === 0) {
    receiptLogEl.innerHTML = '<div>История операций пуста.</div>';
    return;
  }

  let html = `<strong>--- ЧЕК ОПЕРАЦИЙ (Всего: ${totalOperations}) ---</strong><br>`;

  for (let i = 0; i < transactionsHistory.length; i++) {
    const item = transactionsHistory[i];

    // Пропуск пустых элементов, если такие попадутся
    if (!item) continue;

    html += `<div>#${i + 1}: ${item}</div>`;
  }

  html += `<br><strong>ИТОГОВЫЙ БАЛАНС: $${currentBalance.toFixed(2)}</strong>`;
  receiptLogEl.innerHTML = html;
  screenMessageEl.textContent = 'ЧЕК ОБНОВЛЕН НИЖЕ ⬇';
  receiptLogEl.scrollTop = receiptLogEl.scrollHeight;
}