import axios from "axios";
import { BASE_URL } from "./../config";

export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_OK = "USER_LOGIN_OK";
export const USER_LOGIN_KO = "USER_LOGIN_KO";
export const USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST";
export const USER_REGISTER_OK = "USER_REGISTER_OK";
export const USER_REGISTER_KO = "USER_REGISTER_KO";
export const USER_LOGOUT = "USER_LOGOUT";

const HEADERS = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const userLogin = (username, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const URL = BASE_URL + "/api/auth/login";
    const { data } = await axios.post(URL, { username, password }, HEADERS);
    dispatch({ type: USER_LOGIN_OK, payload: data });
    localStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    console.log(error);
    dispatch({
      type: USER_LOGIN_KO,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const userLogout = () => (dispatch) => {
  localStorage.removeItem("user");
  dispatch({ type: USER_LOGOUT });
  document.location.href = "/login";
};

export const userRegister = (username, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });
    const URL = BASE_URL + "/api/auth/register";
    const { data } = await axios.post(URL, { username, password }, HEADERS);
    dispatch({ type: USER_REGISTER_OK, payload: data });
    localStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_REGISTER_KO, payload: error.response && error.response.data });
  }
};
