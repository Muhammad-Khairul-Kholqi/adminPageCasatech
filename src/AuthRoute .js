import React, { useEffect, useState } from 'react';
import { Route, Navigate } from 'react-router-dom';

// Fungsi untuk memeriksa apakah pengguna sudah login
const isAuthenticated = () => {
    // Ganti ini dengan logika autentikasi yang sesuai dengan aplikasi Anda
    // Misalnya, periksa apakah token sudah tersedia di localStorage atau bukan
    const token = localStorage.getItem('token');
    return token ? true : false;
};

// Komponen Higher-Order Component (HOC) untuk memeriksa autentikasi
const AuthRoute = ({ element, ...rest }) => {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            // Pemeriksaan autentikasi
            const isAuthenticatedUser = isAuthenticated();
            setAuthenticated(isAuthenticatedUser);
            setLoading(false);
        };

        checkAuth();
    }, []);

    if (loading) {
        return <p>Loading...</p>; // Tampilkan pesan loading jika masih memeriksa autentikasi
    }

    return authenticated ? (
        // Jika sudah login, render komponen yang dimaksud
        <Route {...rest} element={element} />
    ) : (
        // Jika belum login, arahkan ke halaman login
        <Navigate to="/" replace />
    );
};

export default AuthRoute;
