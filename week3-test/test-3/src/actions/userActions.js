import axios from "axios";

export const fetchUsers = () => async (dispatch) => {
  try {
    const response = await axios.get("https://reqres.in/api/users?page=2");
    dispatch({
      type: "SET_USERS",
      payload: response.data.data,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};
