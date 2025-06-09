export function endsWithOperator(str) {
  return /[+\-*/]$/.test(str);
}

export function parseNumberToBigInt(numStr, scale = 0) {
  const parts = numStr.split('.');
  const intStr = parts.join('') + '0'.repeat(scale);
  return BigInt(intStr);
}

export function formatBigIntResult(resultBigInt, scale) {
  let resultStr = resultBigInt.toString();
  const isNegative = resultStr.startsWith('-');
  if (isNegative) resultStr = resultStr.slice(1);
  if (scale === 0) {
    return isNegative ? -Number(resultStr) : Number(resultStr);
  }
  if (resultStr.length <= scale) {
    resultStr = '0'.repeat(scale - resultStr.length + 1) + resultStr;
  }
  const pointIndex = resultStr.length - scale;
  const integerPart = resultStr.slice(0, pointIndex);
  const fractionalPart = resultStr.slice(pointIndex);
  const formattedNumber = Number(
    (integerPart === '' ? '0' : integerPart) + '.' + fractionalPart
  );
  return isNegative ? -formattedNumber : formattedNumber;
}

export function prepareOperands(a, b, scaleFunc) {
  const aStr = a.toString();
  const bStr = b.toString();
  const aDecimals = (aStr.split('.')[1] || '').length;
  const bDecimals = (bStr.split('.')[1] || '').length;
  const scale = scaleFunc(aDecimals, bDecimals);
  const intA = parseNumberToBigInt(aStr, scale - aDecimals);
  const intB = parseNumberToBigInt(bStr, scale - bDecimals);
  return { intA, intB, scale };
}
