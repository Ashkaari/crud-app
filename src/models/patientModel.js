import { parseOnlyLetterAndSpace } from '../services/inputParser';
import { checkAtLeastLength, checkEmailPattern, checkIsFilled } from '../services/inputValidator';

const patientModel = [
  {
    name: 'fullname',
    label: 'Full name',
    type: 'group',
    inputs: [
      {
        name: 'name',
        label: 'First name',
        type: 'text',
        parseFun: parseOnlyLetterAndSpace,
        required: true,
        validators: [
          {
            id: 'name-required',
            isValidFun: checkIsFilled,
            alert: 'Name is empty',
          },
          {
            id: 'name-length',
            isValidFun: expression => checkAtLeastLength(expression, 3),
            alert: 'Name should be at least 3 symbols length',
          },
        ],
      },
      {
        name: 'lastname',
        label: 'Last name',
        type: 'text',
        parseFun: parseOnlyLetterAndSpace,
        required: true,
        validators: [
          {
            id: 'lastname-required',
            isValidFun: checkIsFilled,
            alert: 'Last name is empty',
          },
          {
            id: 'lastname-length',
            isValidFun: expression => checkAtLeastLength(expression, 2),
            alert: 'Lastname should be at least 2 symbols length',
          },
        ],
      },
      {
        name: 'patronymic',
        label: 'Patronymic',
        type: 'text',
        parseFun: parseOnlyLetterAndSpace,
        required: true,
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
];

export default patientModel;
