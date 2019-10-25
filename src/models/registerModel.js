import { parseOnlyLetterAndSpace } from '../services/inputParser';
import {
  checkAtLeastLength,
  checkEmailPattern,
  checkPasswordPattern,
  checkIsFilled,
  checkIsSame,
} from '../services/inputValidator';

const registerModel = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    parseFun: parseOnlyLetterAndSpace,
    required: true,
    validators: [
      {
        id: 'name-length',
        isValidFun: expression => checkAtLeastLength(expression, 3),
        alert: 'Name is too short',
      },
    ],
  },
  {
    name: 'email',
    label: 'Email',
    type: 'text',
    required: true,
    validators: [
      {
        id: 'email-pattern',
        isValidFun: checkEmailPattern,
        alert: 'Email is not valid',
      },
      {
        id: 'email-required',
        isValidFun: checkIsFilled,
        alert: 'Email is empty',
      },
    ],
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    required: true,
    validators: [
      {
        id: 'password-pattern',
        isValidFun: checkPasswordPattern,
        alert: 'Password should contain at least 6 characters, include digits, uppercase letters and special symbols',
      },
    ],
  },
  {
    name: 'password2',
    label: 'Repeat password',
    type: 'password',
    required: true,
    validators: [
      {
        id: 'passwords-match',
        isValidFun: password => checkIsSame(password, registerModel[2].value || ''),
        alert: "Passwords don't match!",
      },
    ],
  },
];

export default registerModel;
