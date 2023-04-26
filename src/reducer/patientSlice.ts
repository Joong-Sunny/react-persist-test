const initialState = {
  patients: [],
};

const patientSlice = (state = initialState, action) => {
  switch (action.type) {
    case "환자입력":
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

export default patientSlice;
