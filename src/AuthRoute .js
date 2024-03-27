// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';

// const PrivateRoute = ({ element: Element, ...rest }) => {
//     // Periksa apakah token tersimpan di localStorage
//     const isAuthenticated = !!localStorage.getItem('token');

//     return isAuthenticated ? (
//         // Jika token ada, kembalikan Route dengan komponen yang dimaksud
//         <Route {...rest} element={<Element />} />
//     ) : (
//         // Jika tidak, arahkan pengguna ke halaman login
//         <Navigate to="/" replace />
//     );
// };

// export default PrivateRoute;
