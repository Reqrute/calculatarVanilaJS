import { state } from './state.js';
import { addOperator, handleEquals, toggleSign, percent } from './main.js';

export const display = document.getElementById('display');

export function updateDisplay() {
  if (state.currentInput !== '') {
    display.textContent = state.expression + state.currentInput;
  } else if (state.expression !== '') {
    display.textContent = state.expression;
  } else {
    display.textContent = '0';
  }
}

document.querySelector('.buttons').addEventListener('click', (e) => {
  const target = e.target;
  if (!target.classList.contains('btn')) return;
  if (target.dataset.value !== undefined) {
    const val = target.dataset.value;
    if (val === '.' && state.currentInput.includes('.')) return;
    state.currentInput += val;
    updateDisplay();
  } else if (target.dataset.action !== undefined) {
    const action = target.dataset.action;
    switch (action) {
      case 'clear':
        state.currentInput = '';
        state.expression = '';
        updateDisplay();
        break;
      case 'toggle-sign':
        toggleSign();
        break;
      case 'percent':
        percent();
        break;
      case 'add':
      case 'subtract':
      case 'multiply':
      case 'divide':
        addOperator(action);
        break;
      case 'equals':
        handleEquals();
        break;
    }
  }
});

document.addEventListener('keydown', (event) => {
  const key = event.key;
  if ((key >= '0' && key <= '9') || key === '.') {
    if (key === '.' && state.currentInput.includes('.')) return;
    state.currentInput += key;
    updateDisplay();
  } else if (key === '+' || key === '-' || key === '*' || key === '/') {
    let action = '';
    switch (key) {
      case '+':
        action = 'add';
        break;
      case '-':
        action = 'subtract';
        break;
      case '*':
        action = 'multiply';
        break;
      case '/':
        action = 'divide';
        break;
    }
    addOperator(action);
  } else if (key === 'Enter' || key === '=') {
    event.preventDefault();
    handleEquals();
  } else if (key === 'Backspace') {
    if (state.currentInput.length > 0) {
      state.currentInput = state.currentInput.slice(0, -1);
    } else if (state.expression.length > 0) {
      state.expression = state.expression.slice(0, -1);
    }
    updateDisplay();
  } else if (key === 'Escape') {
    state.currentInput = '';
    state.expression = '';
    updateDisplay();
  }
});
