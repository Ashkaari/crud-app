import { parseOnlyLetterAndSpace, parseOnlyNumbers } from '../services/inputParser';
import { checkAtLeastLength, checkEmailPattern, checkExactLength, checkIsFilled } from '../services/inputValidator';

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
    name: 'passportData',
    label: 'Passport info',
    type: 'group',
    inputs: [
      {
        name: 'number',
        label: 'Number',
        type: 'text',
        parseFun: parseOnlyNumbers,
        required: true,
        validators: [
          {
            id: 'number-required',
            isValidFun: checkIsFilled,
            alert: 'Number is empty',
          },
          {
            id: 'Number-length',
            isValidFun: expression => checkExactLength(expression, 4),
            alert: 'Number should contain 4 digits',
          },
        ],
      },
      {
        name: 'serialNumber',
        label: 'Serial number',
        type: 'text',
        parseFun: parseOnlyNumbers,
        required: true,
        validators: [
          {
            id: 'series-required',
            isValidFun: checkIsFilled,
            alert: 'Serial number is empty',
          },
          {
            id: 'series-length',
            isValidFun: expression => checkExactLength(expression, 6),
            alert: 'Serial number should contain 6 digits',
          },
        ],
      },
      {
        name: 'issuedOn',
        label: 'Issued on',
        type: 'text',
        parseFun: parseOnlyLetterAndSpace,
        required: true,
      },
      {
        name: 'issuingCompany',
        label: 'Issuing company',
        type: 'text',
        parseFun: parseOnlyLetterAndSpace,
        required: true,
        validators: [
          {
            id: 'issuingCompany-required',
            isValidFun: checkIsFilled,
            alert: 'Number is empty',
          },
        ],
      },
      {
        name: 'issuingCompanyCode',
        label: 'Issuing company code',
        type: 'text',
        parseFun: parseOnlyNumbers,
        required: true,
        validators: [
          {
            id: 'issuingCompanyCode-required',
            isValidFun: checkIsFilled,
            alert: 'Code is empty',
          },
        ],
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
