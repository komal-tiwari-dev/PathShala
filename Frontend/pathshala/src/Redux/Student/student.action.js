import * as types from "./student.actionType";
import axios from "axios";
import { getItem } from "../../Utils/localStorage";

export const getStudent =()=> (dispatch) => {
  const token = getItem("token");

  dispatch({ type: types.GET_STUDENT_REQUEST });
  return axios
    .get("student", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((r) => {
      dispatch({ type: types.GET_STUDENT_SUCCESS, payload: r.data });
      return types.GET_STUDENT_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: types.GET_STUDENT_FAILURE, payload: err });
      return types.GET_STUDENT_FAILURE;
    });
};

export const addStudent =(payload)=> (dispatch) => {
  const token = getItem("token");

  dispatch({ type: types.ADD_STUDENT_REQUEST });
  return axios
    .post("/student/addstudent", payload, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((r) => {
      dispatch({ type: types.ADD_STUDENT_SUCCESS, payload: r.data.student });
      return types.ADD_STUDENT_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: types.ADD_STUDENT_FAILURE, payload: err });
      return types.ADD_STUDENT_FAILURE;
    });
};


export const updateStudent =(payload)=> (dispatch) => {
  const token = getItem("token");

  dispatch({ type: types.UPDATE_STUDENT_REQUEST });
  return axios
    .patch(`/student/${payload._id}/update`, payload, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((r) => {
      dispatch({ type: types.ADD_STUDENT_SUCCESS, payload: r.data });
      return types.ADD_STUDENT_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: types.ADD_STUDENT_FAILURE, payload: err });
      return types.ADD_STUDENT_FAILURE;
    });
};


export const deleteStudent = (payload) => (dispatch) => {
  const token = getItem("token");

  dispatch({ type: types.DELETE_STUDENT_REQUEST });
  return axios
    .delete(`/student/${payload._id}/delete`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((r) => {
      dispatch({ type: types.DELETE_STUDENT_SUCCESS, payload: r.data.student });
      return types.DELETE_STUDENT_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: types.DELETE_STUDENT_FAILURE, payload: err });
      return types.DELETE_STUDENT_FAILURE;
    });
};


