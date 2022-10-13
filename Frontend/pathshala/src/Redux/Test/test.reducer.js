
import * as types from "./test.actionType";

const initialState = {
  tests: [],
  isLoading: false,
  isError: false,
};


export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // ADD TEST
    case types.ADD_TEST_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
  
    case types.ADD_TEST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }

    case types.ADD_TEST_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    // GET TEST
    case types.GET_TEST_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
  
    case types.GET_TEST_SUCCESS: {
      console.log("Test Reducer",payload)
      return {
        ...state,
        tests:[...payload],
        isLoading: false,
        isError: false,
      };
    }

    case types.GET_TEST_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    // UPDATE TEST
    case types.UPDATE_TEST_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
  
    case types.UPDATE_TEST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }

    case types.UPDATE_TEST_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }



    // DELETE TEST
    case types.DELETE_TEST_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
  
    case types.DELETE_TEST_SUCCESS: {
      // console.log("GET TEST REDUCER", state.TESTs);
      // console.log("GET TEST REDUCER PAYLOAD", payload);
      // let newTEST=state.TESTs.filter(el=>{ return el._id!==payload._id})
      // console.log("GET TEST REDUCER NEWARR", newTEST);

      return {
        ...state,
        // TESTs:newTEST,
        isLoading: false,
        isError: false,
      };
    }

    case types.DELETE_TEST_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    default:
      return state;
  }
};
