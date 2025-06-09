import { state } from './state.js';
import { endsWithOperator } from './calculation.js';
import { updateDisplay, display } from './dom.js';
import {
  add,
  subtract,
  multiply,
  divide,
  toggleSign,
  percent,
} from './math.js';
import './theme.js';
import '../style.css';

export { updateDisplay, toggleSign, percent };

export function addOperator(op) {
  const symbolMap = {
    add: '+',
    subtract: '-',
    multiply: '*',
    divide: '/',
  };

  const symbol = symbolMap[op];
  if (!symbol) return;

  if (
    state.currentInput === '' &&
    state.expression.length > 0 &&
    endsWithOperator(state.expression)
  ) {
    return;
  }
  if (state.currentInput === '' && state.expression === '' && symbol === '-') {
    state.currentInput = '-';
    updateDisplay();
    return;
  }
  if (state.currentInput !== '') {
    state.expression += state.currentInput + symbol;
    state.currentInput = '';
  } else if (state.expression !== '' && !endsWithOperator(state.expression)) {
    state.expression += symbol;
  }
  updateDisplay();
}

export function handleEquals() {
  if (state.currentInput === '' && state.expression === '') return;
  if (state.expression === '') {
    display.textContent = state.currentInput || '0';
    return;
  }
  state.expression += state.currentInput;
  if (endsWithOperator(state.expression)) {
    state.expression = state.expression.slice(0, -1);
  }
  state.currentInput = '';

  const result = evaluateExpression(state.expression);
  display.textContent =
    isNaN(result) || result === 'Error' ? 'Error' : result.toString();
  state.currentInput =
    isNaN(result) || result === 'Error' ? '' : result.toString();
  state.expression = '';
}

function evaluateExpression(expr) {
  if (typeof expr !== 'string') return NaN;
  expr = expr.replace(/\s+/g, '');
  if (expr.length === 0) return NaN;
  if (/[^0-9+\-*/.]/.test(expr)) return NaN;

  const tokens = [];
  let numberBuffer = '';
  let lastTokenWasOperator = true;

  for (let i = 0; i < expr.length; i++) {
    const char = expr[i];

    if (/\d|\./.test(char)) {
      numberBuffer += char;
      lastTokenWasOperator = false;
    } else if ('+-*/'.includes(char)) {
      if (char === '-' && lastTokenWasOperator) {
        numberBuffer = '-';
        lastTokenWasOperator = true;
      } else {
        if (numberBuffer !== '') {
          tokens.push(numberBuffer);
          numberBuffer = '';
        }
        tokens.push(char);
        lastTokenWasOperator = true;
      }
    }
  }

  if (numberBuffer !== '') {
    tokens.push(numberBuffer);
  }

  const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };
  const outputQueue = [];
  const operatorStack = [];

  for (const token of tokens) {
    if (!isNaN(token)) {
      outputQueue.push(token);
    } else if ('+-*/'.includes(token)) {
      while (
        operatorStack.length > 0 &&
        precedence[operatorStack[operatorStack.length - 1]] >= precedence[token]
      ) {
        outputQueue.push(operatorStack.pop());
      }
      operatorStack.push(token);
    }
  }

  while (operatorStack.length > 0) {
    outputQueue.push(operatorStack.pop());
  }

  const stack = [];
  for (const token of outputQueue) {
    if (!isNaN(token)) {
      stack.push(parseFloat(token));
    } else {
      const b = stack.pop();
      const a = stack.pop();
      if (a === undefined || b === undefined) return 'Error';
      let res;
      switch (token) {
        case '+':
          res = add(a, b);
          break;
        case '-':
          res = subtract(a, b);
          break;
        case '*':
          res = multiply(a, b);
          break;
        case '/':
          if (b === 0) return 'Error';
          res = divide(a, b);
          break;
        default:
          return 'Error';
      }
      if (typeof res !== 'number' || isNaN(res)) return 'Error';
      stack.push(res);
    }
  }

  if (stack.length !== 1) return 'Error';

  return stack[0];
}
