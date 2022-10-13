
import * as types from "./student.actionType";

const initialState = {
  students: [],
  isLoading: false,
  isError: false,
};


export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // ADD STUDENT
    case types.ADD_STUDENT_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
  
    case types.ADD_STUDENT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }

    case types.ADD_STUDENT_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    // GET STUDENT
    case types.GET_STUDENT_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
  
    case types.GET_STUDENT_SUCCESS: {
      
      return {
        ...state,
        students:[...payload],
        isLoading: false,
        isError: false,
      };
    }

    case types.GET_STUDENT_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    // UPDATE STUDENT
    case types.UPDATE_STUDENT_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
  
    case types.UPDATE_STUDENT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }

    case types.UPDATE_STUDENT_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }



    // DELETE STUDENT
    case types.DELETE_STUDENT_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
  
    case types.DELETE_STUDENT_SUCCESS: {
      // console.log("GET STUDENT REDUCER", state.students);
      // console.log("GET STUDENT REDUCER PAYLOAD", payload);
      // let newStudent=state.students.filter(el=>{ return el._id!==payload._id})
      // console.log("GET STUDENT REDUCER NEWARR", newStudent);

      return {
        ...state,
        // students:newStudent,
        isLoading: false,
        isError: false,
      };
    }

    case types.DELETE_STUDENT_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    default:
      return state;
  }
};
