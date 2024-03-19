// import React, { Component } from 'react';
// import axios from "axios"
// import BaseUrl from '../Api/BaseUrl';

// const axiosReq = axios.create()
// const AuthContext = React.createContext()

// export class AuthContextProvider extends Component {
//     constructor() {
//         super()
//         this.state = {
//             users: [],
//             user: JSON.parse(localStorage.getItem('user')) || {}, 
//             token: localStorage.getItem('token') || "",
//             isLoggedIn: (localStorage.getItem('user') === null) ? false : true
//         }
//     }

//     login = (credentials) => {
//         return axiosReq.post(`${BaseUrl}auth/login`, credentials)
//         .then(response => {
//             const{ token } = response.data
//             localStorage.setItem("token", token)

//             this.useState({
//                 token,
//                 isLoggedIn: true
//             })

//             return console.log(response)
//         })
//     }

//     logout = () => {
//         localStorage.removeItem('token')
//         this.useState({
//             isLoggedIn: false
//         })
        
//         return console.log('Keluar')
//     }

//     render() {
//         return (
//             <AuthContext.Provider value={{ 
//                 login: this.login,
//                 logout: this.logout,
//                 ...this.state
//              }}>
//              {this.props.children}
//             </AuthContext.Provider>
//         )
//     }
// }

// export const withAuth = (WrappedComponent) => {
//     return class extends Component {
//         render() {
//             return (
//                 <AuthContext.Consumer>
//                     {(context) => (
//                         <WrappedComponent {...this.props} {...context} />
//                     )}
//                 </AuthContext.Consumer>
//             )
//         }
//     }
// }










// versi gpt

// import React, { createContext, useState } from 'react';
// import axios from 'axios';

// // Membuat konteks autentikasi
// export const AuthContext = createContext();

// // Membuat komponen provider untuk konteks autentikasi
// export const AuthContextProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     // Fungsi untuk login
//     const login = async (credentials) => {
//         try {
//             const response = await axios.post('/auth/login', credentials);
//             const { token, data } = response.data;
//             localStorage.setItem('token', token);
//             setUser(data);
//             setIsLoggedIn(true);
//         } catch (error) {
//             console.error('Login error:', error);
//             // Tampilkan pesan kesalahan atau lakukan penanganan kesalahan lainnya
//         }
//     };

//     // Fungsi untuk logout
//     const logout = () => {
//         localStorage.removeItem('token');
//         setUser(null);
//         setIsLoggedIn(false);
//     };

//     return (
//         <AuthContext.Provider value={{ 
//             user,
//             isLoggedIn,
//             login,
//             logout
//         }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// // Higher-order component untuk menghubungkan komponen dengan konteks autentikasi
// export const withAuth = (Component) => {
//     return (props) => (
//         <AuthContext.Consumer>
//             {(authContext) => <Component {...props} authContext={authContext} />}
//         </AuthContext.Consumer>
//     );
// };







// import React, { createContext, useState, useContext } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const login = () => {
//     // Lakukan logika login di sini, misalnya setelah menerima token dari server
//     setIsLoggedIn(true);
//   };

//   const logout = () => {
//     // Lakukan logika logout di sini, misalnya menghapus token dari local storage
//     setIsLoggedIn(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);






// import React, { createContext, useContext, useState } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(localStorage.getItem('token') || '');

//   const login = (newToken) => {
//     setToken(newToken);
//     localStorage.setItem('token', newToken);
//   };

//   const logout = () => {
//     setToken('');
//     localStorage.removeItem('token');
//   };

//   return (
//     <AuthContext.Provider value={{ token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);




// import axios from 'axios';
// import BaseUrl from '../Api/BaseUrl';

// const AuthContext = async (username, password) => {
//   try {
//     // Lakukan permintaan HTTP POST untuk login dengan menggunakan Axios
//     const response = await axios.post(`${BaseUrl}auth/login`, {
//       username,
//       password
//     });

//     // Jika permintaan berhasil, simpan toke    n yang diterima
//     const { data } = response;
//     const { token } = data;

//     // Simpan token ke local storage
//     localStorage.setItem('token', token);

//     // Mengembalikan data pengguna yang berhasil login
//     return data;
//   } catch (error) {
//     // Tangani kesalahan jika login gagal
//     throw new Error(error.response.data.message);
//   }
// };

// export default AuthContext;


// import React, { createContext, useReducer, useEffect } from 'react';
// import axios from 'axios';
// import BaseUrl from '../Api/BaseUrl';

// // Inisiasi state autentikasi
// const initialState = {
//     isAuthenticated: false,
//     user: null,
//     token: localStorage.getItem('token') || null,
// };

// // Membuat konteks autentikasi
// export const AuthContext = createContext();

// // Reducer untuk mengelola state autentikasi
// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'LOGIN':
//             localStorage.setItem('token', action.payload.token);
//             return {
//                 ...state,
//                 isAuthenticated: true,
//                 user: action.payload.user,
//                 token: action.payload.token,
//             };
//         case 'LOGOUT':
//             localStorage.removeItem('token');
//             return {
//                 ...state,
//                 isAuthenticated: false,
//                 user: null,
//                 token: null,
//             };
//         default:
//             return state;
//     }
// };

// // Komponen konteks autentikasi
// export const AuthProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(reducer, initialState);

//     // Lakukan pengecekan autentikasi ketika komponen di-mount
//     useEffect(() => {
//         const checkAuth = async () => {
//             try {
//                 const response = await axios.get(`${BaseUrl}auth/register`, {
//                     headers: {
//                         Authorization: `Bearer ${state.token}`,
//                     },
//                 });
//                 const user = response.data.user;
//                 dispatch({ type: 'LOGIN', payload: { user, token: state.token } });
//             } catch (error) {
//                 console.error('Authentication check failed', error);
//                 dispatch({ type: 'LOGOUT' });
//             }
//         };

//         if (state.token) {
//             checkAuth();
//         }
//     }, [state.token]);

//     return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
// };
