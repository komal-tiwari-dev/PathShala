import * as types from "./test.actionType";
import axios from "axios";
import { getItem } from "../../Utils/localStorage";

export const getStudentTest =(id)=> (dispatch) => {
  const token = getItem("token");

  dispatch({ type: types.GET_TEST_REQUEST });
  return axios
    .get(`/test/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((r) => {
      dispatch({ type: types.GET_TEST_SUCCESS, payload: r.data });
      return types.GET_TEST_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: types.GET_TEST_FAILURE, payload: err });
      return types.GET_TEST_FAILURE;
    });
};

export const addTest =(studentId,payload)=> (dispatch) => {
  const token = getItem("token");

  dispatch({ type: types.ADD_TEST_REQUEST });
  return axios
    .post(`/test/${studentId}/addtest`, payload, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((r) => {
      dispatch({ type: types.ADD_TEST_SUCCESS, payload: r.data.TEST });
      return types.ADD_TEST_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: types.ADD_TEST_FAILURE, payload: err });
      return types.ADD_TEST_FAILURE;
    });
};


export const updateTest = (studentId,payload) => (dispatch) => {
  const token = getItem("token");

  dispatch({ type: types.UPDATE_TEST_REQUEST });
  return axios
    .patch(`/TEST/${studentId}/update/${payload._id}`, payload, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((r) => {
      dispatch({ type: types.ADD_TEST_SUCCESS, payload: r.data });
      return types.ADD_TEST_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: types.ADD_TEST_FAILURE, payload: err });
      return types.ADD_TEST_FAILURE;
    });
};


export const deleteTest = (studentID,testId) => (dispatch) => {
  const token = getItem("token");

  dispatch({ type: types.DELETE_TEST_REQUEST });
  return axios
    .delete(`/test/${studentID}/delete/${testId}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((r) => {
      dispatch({ type: types.DELETE_TEST_SUCCESS, payload: r.data.TEST });
      return types.DELETE_TEST_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: types.DELETE_TEST_FAILURE, payload: err });
      return types.DELETE_TEST_FAILURE;
    });
};


