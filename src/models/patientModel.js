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
    name: 'passport',
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
        name: 'serial',
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
        name: 'issued_on',
        label: 'Issued on',
        type: 'date',
        required: true,
      },
      {
        name: 'issuing_company',
        label: 'Issuing company',
        type: 'text',
        required: true,
        validators: [
          {
            id: 'issuingCompany-required',
            isValidFun: checkIsFilled,
            alert: 'Field is empty',
          },
        ],
      },
      {
        name: 'issuing_company_code',
        label: 'Issuing company code',
        type: 'text',
        parseFun: parseOnlyNumbers,
        required: true,
        validators: [
          {
            id: 'issuing_company_code-required',
            isValidFun: checkIsFilled,
            alert: 'Code is empty',
          },
        ],
      },
    ],
  },
  {
    name: 'address',
    label: 'Actual address',
    type: 'group',
    inputs: [
      {
        name: 'postal_number',
        label: 'Postal index',
        type: 'text',
        parseFun: parseOnlyNumbers,
        required: true,
        validators: [
          {
            id: 'postal_number-required',
            isValidFun: checkIsFilled,
            alert: 'Postal index is empty',
          },
        ],
      },
      {
        name: 'city',
        label: 'City',
        type: 'text',
        parseFun: parseOnlyLetterAndSpace,
        required: true,
        validators: [
          {
            id: 'city-required',
            isValidFun: checkIsFilled,
            alert: 'City is empty',
          },
        ],
      },
      {
        name: 'street',
        label: 'Street',
        type: 'text',
        required: true,
        validators: [
          {
            id: 'street-required',
            isValidFun: checkIsFilled,
            alert: 'Street is empty',
          },
        ],
      },
      {
        name: 'building',
        label: 'Building number',
        type: 'text',
        required: true,
        validators: [
          {
            id: 'building-required',
            isValidFun: checkIsFilled,
            alert: 'Building number is empty',
          },
        ],
      },
      {
        name: 'apartment',
        label: 'Apartment number',
        type: 'text',
        required: true,
        validators: [
          {
            id: 'building-required',
            isValidFun: checkIsFilled,
            alert: 'Apartment number is empty',
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
  {
    name: 'phone',
    label: 'Phone',
    type: 'text',
    required: true,
    validators: [
      {
        id: 'phone-required',
        isValidFun: checkIsFilled,
        alert: 'Phone number is empty',
      },
    ],
  },
];

export default patientModel;
