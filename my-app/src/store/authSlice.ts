import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: number;
  username: string;
}

interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    signOut(state) {
      state.user = null;
    },
  },
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
