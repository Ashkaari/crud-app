import { patients as patientsTypes } from '../actions';

const defaultState = {
  loading: false,
  GlobalError: null,
  ValidationError: null,
  list: [],
};

export default function patients(state = defaultState, action) {
  switch (action.type) {
    case patientsTypes.POST_NEW_PATIENT_REQUEST: {
      return {
        ...state,
        loading: true,
        GlobalError: null,
        ValidationError: null,
      };
    }

    case patientsTypes.POST_NEW_PATIENT_SUCCESS: {
      return {
        ...state,
        loading: false,
        message: `Successfully added new patient ${action.payload.lastname}`,
      };
    }

    case patientsTypes.POST_NEW_PATIENT_FAILURE: {
      return {
        ...state,
        loading: false,
        [action.payload.type]: action.payload.errors,
      };
    }

    case patientsTypes.GET_PATIENTS_LIST_SUCCESS: {
      console.log('success', action);
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    }

    default:
      return state;
  }
}
