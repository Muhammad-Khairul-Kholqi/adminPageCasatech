import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Template/Side';
import Header from './Header';
import Dashboard from './Dashboard';
import AccountAdmin from './AccountAdmin';
import CompanyData from './Data/Company/CompanyData';
import SolutionsData from './Data/Solutioins/SolutionsData';
import Signin from './Signin';
import NotFound from './NotFound';
import './Style/StyleApp.css';

const DefaultLayout = ({ children }) => {
    return (
        <div className="flex h-screen">
            {/* sidebar */}
            <div className="sidebar w-[190px]">
                <Sidebar />
            </div>
            <div className="flex-1 overflow-y-auto bg-[#ECEDF2] p-4">
                {/* header */}
                <div className="bg-white py-[10px] rounded-lg shadow-md">
                    <Header />
                </div>
                {/* content */}
                {children}
            </div>
        </div>
    );
};

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <DefaultLayout>
                                <Dashboard />
                            </DefaultLayout>
                        }
                    />
                    <Route
                        path="/company-data"
                        element={
                            <DefaultLayout>
                                <CompanyData />
                            </DefaultLayout>
                        }
                    />
                    <Route
                        path="/data-solutions"
                        element={
                            <DefaultLayout>
                                <SolutionsData />
                            </DefaultLayout>
                        }
                    />
                    <Route
                        path="/account-admin"
                        element={
                            <DefaultLayout>
                                <AccountAdmin />
                            </DefaultLayout>
                        }
                    />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
