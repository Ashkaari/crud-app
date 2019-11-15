import { parseOnlyLetterAndSpace, parseOnlyNumbers } from '../services/inputParser';
import { checkAtLeastLength, checkEmailPattern, checkExactLength, checkIsFilled } from '../services/inputValidator';

const patientModel = [
  {
    name: 'fullname',
    label: 'Full name',
    type: 'group',
    required: true,
    inputs: [
      {
        name: 'name',
        label: 'First name',
        type: 'text',
        parseFun: parseOnlyLetterAndSpace,
        required: true,
        value: 'Xenia',
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
        value: 'Parshikova',
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
      },
    ],
  },
  {
    name: 'sex',
    label: 'Gender',
    type: 'radio',
    enum: ['male', 'female'],
    value: 'male',
    required: true,
  },
  {
    name: 'additionalInfo',
    label: 'Additional info',
    type: 'group',
    required: true,
    inputs: [
      {
        name: 'birthdate',
        label: 'Birthday',
        type: 'date',
        required: true,
        value: new Date('1990-01-01'),
      },
      {
        name: 'email',
        label: 'Email',
        type: 'text',
        required: true,
        value: 'heal@me.pls',
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
        parseFun: parseOnlyNumbers,
        required: true,
        value: '89999999999',
        validators: [
          {
            id: 'phone-required',
            isValidFun: checkIsFilled,
            alert: 'Phone number is empty',
          },
          {
            id: 'phone-length',
            isValidFun: expression => checkExactLength(expression, 11),
            alert: 'Number should contain 11 digits',
          },
        ],
      },
      {
        name: 'snils',
        label: 'SNILS',
        type: 'text',
        parseFun: parseOnlyNumbers,
        required: true,
        value: '12345678901',
        validators: [
          {
            id: 'snils-required',
            isValidFun: checkIsFilled,
            alert: 'SNILS is empty',
          },
          {
            id: 'snils-length',
            isValidFun: expression => checkExactLength(expression, 11),
            alert: 'SNILS should contain 11 digits',
          },
        ],
      },
      {
        name: 'oms',
        label: 'Health insurance number',
        type: 'text',
        parseFun: parseOnlyNumbers,
        required: true,
        value: '1234123412341234',
        validators: [
          {
            id: 'oms-required',
            isValidFun: checkIsFilled,
            alert: 'HIN is empty',
          },
          {
            id: 'oms-length',
            isValidFun: expression => checkExactLength(expression, 16),
            alert: 'HIN should contain 16 digits',
          },
        ],
      },
    ],
  },
  {
    name: 'passport',
    label: 'Passport info',
    type: 'group',
    required: true,
    inputs: [
      {
        name: 'number',
        label: 'Number',
        type: 'text',
        parseFun: parseOnlyNumbers,
        required: true,
        value: '1234',
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
        value: '123456',
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
        value: new Date(),
      },
      {
        name: 'issuing_company',
        label: 'Issuing company',
        type: 'text',
        required: true,
        value: 'RuskiPog',
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
        value: '500106',
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
    required: true,
    inputs: [
      {
        name: 'postal_number',
        label: 'Postal index',
        type: 'text',
        parseFun: parseOnlyNumbers,
        required: true,
        value: '123456',
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
        value: 'moscow',
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
        value: 'moscow',
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
        value: 'moscow',
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
  /* {
    name: 'job',
    label: 'Job',
    type: 'group',
    required: false,
    inputs: [
      {
        name: 'company_name',
        label: 'Company name',
        type: 'text',
        required: true,
        validators: [
          {
            id: 'company_name-required',
            isValidFun: checkIsFilled,
            alert: 'Company name is empty',
          },
        ],
      },
      {
        name: 'company_specialization',
        label: 'Specialization',
        type: 'text',
        required: false,
      },
    ],
  },*/
];

export default patientModel;
