import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUser = createAsyncThunk("user/remove", async (user) => {
  const response = await axios.delete(`http://localhost:3005/users/${user.id}`);

  // bug return response.data;
  return user;
});
export { removeUser };
