import axios from "axios";
import { BASE_URL } from "./../config";

export const USER_LIST_REQUEST = "USER_LIST_REQUEST";
export const USER_LIST_OK = "USER_LIST_OK";
export const USER_LIST_KO = "USER_LIST_KO";

export const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_LIST_REQUEST });
    const {
      login: { user },
    } = getState();
    const headers = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    };
    const URL = BASE_URL + "/api/users";
    const { data } = await axios.get(URL, headers);
    dispatch({ type: USER_LIST_OK, payload: data });
  } catch (error) {
    dispatch({ type: USER_LIST_KO, payload: error.response && error.response.data });
  }
};
