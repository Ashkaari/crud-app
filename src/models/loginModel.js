import { checkEmailPattern, checkIsFilled } from '../services/inputValidator';

const loginModel = [
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
        id: 'password-required',
        isValidFun: checkIsFilled,
        alert: 'Password is empty',
      },
    ],
  },
];

export default loginModel;
