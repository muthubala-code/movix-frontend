// src/features/auth/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser, loginUser, getMe, loginWithGoogle } from "./authApi";

const initialState = {
  user: null,
  loading: true,
  error: null,
  isLogined: false,
};

export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      console.log(userData);
      const data = await registerUser(userData);
      localStorage.setItem("token", data.data.token);
      return data.data;
    } catch (error) {
      console.log(error);

      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const loginGoogle = createAsyncThunk(
  "auth/oauth/google",
  async (token, thunkAPI) => {
    try {
      const data = await loginWithGoogle(token);
      localStorage.setItem("token", data.data.token);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Login
export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const data = await loginUser(userData);
      localStorage.setItem("token", data.data.token);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Get Current User
export const me = createAsyncThunk("auth/me", async (_, thunkAPI) => {
  try {
    const data = await getMe();
    return data;
  } catch (error) {
    localStorage.removeItem("token");
    return thunkAPI.rejectWithValue("Unauthorized");
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      localStorage.removeItem("token");
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.isLogined = false;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.isLogined = true;
        state.user = action.payload.user;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.isLogined = false;
        state.error = action.payload;
      })
      // Login
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.isLogined = false;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isLogined = true;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.isLogined = false;
        state.error = action.payload;
      })
      // Me
      .addCase(me.fulfilled, (state, action) => {
        state.isLogined = true;
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(me.rejected, (state) => {
        state.isLogined = false;
        state.loading = false;
        state.user = null;
      })
      .addCase(loginGoogle.fulfilled, (state, action) => {
        state.isLogined = true;
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(loginGoogle.rejected, (state, action) => {
        state.isLogined = false;
        state.loading = false;
        state.user = null;
        state.error = action.payload;
      });
  },
});

export const { logout, loginSuccess } = authSlice.actions;
export default authSlice.reducer;
