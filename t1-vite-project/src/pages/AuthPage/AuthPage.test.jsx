import React from "react";
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';

describe('AuthPage', () => {
    const initialState = { auth: { isAuthenticated: false } };

    const store = configureStore({
        reducer: {
            auth: authReducer
        },
        preloadedState: initialState
    })
})

it('should render the login page if not authenticated', () => {
    render(
        <Provider store={store}>
            <MemoryRouter>
                <AuthPage />
            </MemoryRouter>
        </Provider>
    );

    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
});

