const initialState = {
  doctors: [],
};

const doctorSlice = (state = initialState, action) => {
  switch (action.type) {
    case "의사 진찰시작":
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

export default doctorSlice;
