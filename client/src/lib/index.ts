export * from './constants';

export function formatAmount(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}

export function capitalizeFirstLetter(str: string): string {
  const arrStr = str.split('_');
  const strFormated = [];

  for (const word of arrStr) {
    strFormated.push(
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
  }

  return strFormated.join(' ');
}

export function getLastFourDigit(digit: number): string {
  return String(digit).slice(-4);
}
