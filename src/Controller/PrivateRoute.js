import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = ({ element, ...rest }) => {
    // Check apakah pengguna sudah login atau belum
    const isLoggedIn = localStorage.getItem('token') !== null;

    // Jika pengguna sudah login, maka render komponen yang diminta
    // Jika belum, maka arahkan pengguna ke halaman login
    return isLoggedIn ? (
        <Route {...rest} element={element} />
    ) : (
        <Navigate to="/" replace />
    );
};

export default PrivateRoute;
