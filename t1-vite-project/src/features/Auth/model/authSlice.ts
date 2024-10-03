// authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    accessToken: string;
    user: {
        accessToken: string;
        email: string;
        firstName: string;
        gender: string;
        id: number;
        image: string;
        lastName: string;
        refreshToken: string;
        userName: string;
    } | null;
    status: 'idle' | 'loading' | 'authenticated' | 'failed';
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    accessToken: localStorage.getItem('token') || '',
    user: null,
    status: 'idle',
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthInfo: (state, action: PayloadAction<{ accessToken: string; user: any, isAuthenticated: boolean }>) => {
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
            state.status = 'authenticated';
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.accessToken = '';
            state.user = null;
            state.status = 'idle';
            state.isAuthenticated = false;
            localStorage.removeItem('token');
        },
    },
});

export const { setAuthInfo, logout } = authSlice.actions;
export default authSlice.reducer;
