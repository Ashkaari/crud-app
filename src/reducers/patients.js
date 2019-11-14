import { POST_NEW_PATIENT_REQUEST, POST_NEW_PATIENT_SUCCESS, POST_NEW_PATIENT_FAILURE } from '../actions';

const defaultState = {
  loading: false,
  error: null,
  patients: [],
};

export default function patients(state = defaultState, action) {
  switch (action.type) {
    case POST_NEW_PATIENT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case POST_NEW_PATIENT_SUCCESS: {
      return {
        ...state,
        loading: false,
        message: `Successfully added new patient ${action.payload.lastname}`,
      };
    }

    case POST_NEW_PATIENT_FAILURE: {
      return {
        ...state,
        loading: false,
        error: 'Error occured',
      };
    }

    default:
      return state;
  }
}
