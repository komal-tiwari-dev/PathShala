import {
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
  SIGNUP_REQUEST,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGOUT,
} from "./auth.actionTypes";
import axios from "axios";
import { removeItem } from "../../Utils/localStorage";

export const registerTeacher = (payload) => (dispatch) => {
  dispatch({ type: SIGNUP_REQUEST });
  return axios
    .post(`/teacher/register`, payload)
    .then((r) => {
      dispatch({ type: SIGNUP_SUCCESS, payload: r.data });
      return SIGNUP_SUCCESS;
    })

    .catch((err) => {
      dispatch({ type: SIGNUP_ERROR, payload: err });
      return SIGNUP_ERROR;
    });
};

export const loginTeacher = (detail) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  return axios
    .post(`/teacher/login`, detail)
    .then((r) => {
      dispatch({ type: LOGIN_SUCCESS, payload: r.data });
      return r;
    })
    .catch((err) => {
      dispatch({ type: LOGIN_ERROR, payload: err });
      return LOGIN_ERROR;
    });
};

export const logout =()=> (dispatch) => {
  removeItem("token");
  removeItem("isAuth");
  dispatch({ type: LOGOUT });
};
