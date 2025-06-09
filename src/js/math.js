import { state } from './state.js';
import { prepareOperands, formatBigIntResult } from './calculation.js';
import { updateDisplay } from './dom.js';

const SCALE_DIVIDE = 20;

function max(a, b) {
  return a > b ? a : b;
}

export function toggleSign() {
  if (state.currentInput.startsWith('-')) {
    state.currentInput = state.currentInput.slice(1);
  } else if (state.currentInput !== '') {
    state.currentInput = '-' + state.currentInput;
  }
  updateDisplay();
}

export function add(a, b) {
  const { intA, intB, scale } = prepareOperands(a, b, max);
  const result = intA + intB;
  return formatBigIntResult(result, scale);
}

export function subtract(a, b) {
  const { intA, intB, scale } = prepareOperands(a, b, max);
  const result = intA - intB;
  return formatBigIntResult(result, scale);
}

export function multiply(a, b) {
  const sumDecimals = (aDecimals, bDecimals) => aDecimals + bDecimals;
  const aStr = a.toString();
  const bStr = b.toString();
  const aDecimals = (aStr.split('.')[1] || '').length;
  const bDecimals = (bStr.split('.')[1] || '').length;
  const intA = BigInt(aStr.replace('.', ''));
  const intB = BigInt(bStr.replace('.', ''));
  const scale = sumDecimals(aDecimals, bDecimals);
  const result = intA * intB;
  return formatBigIntResult(result, scale);
}

export function divide(a, b) {
  if (b === 0) return NaN;
  const aStr = a.toString();
  const bStr = b.toString();
  const aDecimals = (aStr.split('.')[1] || '').length;
  const bDecimals = (bStr.split('.')[1] || '').length;
  const intA = BigInt(aStr.replace('.', ''));
  const intB = BigInt(bStr.replace('.', ''));
  const decimalShift = BigInt(10 ** (SCALE_DIVIDE + bDecimals - aDecimals));
  const numerator = intA * decimalShift;
  const result = numerator / intB;
  return formatBigIntResult(result, SCALE_DIVIDE);
}

export function percent() {
  if (state.currentInput === '') return;
  const num = parseFloat(state.currentInput);
  if (isNaN(num)) return;
  state.currentInput = (num / 100).toString();
  updateDisplay();
}
