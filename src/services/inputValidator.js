export const checkAtLeastLength = (expression, length) => expression && expression.trim().length >= length;
export const checkExactLength = (expression, length) => expression && expression.trim().length === length;

export const checkIsFilled = expression => expression && expression.length > 0;

export const checkIsTrue = expression => !!expression;

export const checkIsSame = (password, password2) => password === password2;

export const checkEmailPattern = mail => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(mail);
};

export const checkPasswordPattern = password => {
  const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/;
  return regex.test(password);
};
