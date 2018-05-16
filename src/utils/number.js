export const toNumber = (num, zeroOnly = false) => {
  const parsed = parseFloat(num);
  return !isNaN(parsed) ? parsed : zeroOnly ? 0 : '';
};

export const add = (a, b) => {
  return toNumber(a, true) + toNumber(b, true);
};

export const divide = (a, b) => {
  return toNumber(a, true) / toNumber(b, true);
};

export const multiply = (a, b) => {
  return toNumber(a, true) * toNumber(b, true);
};

export const subtract = (a, b) => {
  return toNumber(a, true) - toNumber(b, true);
};
