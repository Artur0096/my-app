import { createAsyncThunk } from "@reduxjs/toolkit";

interface User {
  id: number;
  username: string;
}

export const fetchUser = createAsyncThunk<User, string>(
  "auth/fetchUser",
  async (username: string) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users?username=${username}`
    );
    const users = await response.json();
    if (users.length === 0) {
      throw new Error("User not found");
    }
    return users[0];
  }
);
