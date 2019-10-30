export const parseOnlyLetterAndSpace = expression => expression.replace(/[^A-Za-z ]/g, '');
export const parseOnlyNumbers = expression => expression.replace(/[^0-9 ]/g, '');

export const parseLength = (expression, length) => expression.substring(0, length);
