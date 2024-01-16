import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
    error: null,
    loading: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart(state, action) {
            state.loading = true;
            state.error = null;
        },
        loginSuccess(state, action) {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        loginFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        logout(state, action) {
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;