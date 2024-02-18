import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Template/Side';
import Header from './Header';
import Dashboard from './Dashboard';
import AccountAdmin from './AccountAdmin';
import CompanyData from './Data/Company/CompanyData';
import SolutionsData from './Data/Solutioins/SolutionsData';
import Signin from './Signin';
import './Style/StyleApp.css';

const App = () => {
    return (
        <Router>
            <>
                <div className="flex h-screen">
                    {/* sidebar */}
                    <div className="sidebar w-[190px]">
                        <Sidebar />
                    </div>
                    <div className = "flex-1 overflow-y-auto bg-[#ECEDF2] p-4" >
                        {/* header */}
                        <div className = "bg-white py-[10px] rounded-lg shadow-md" >
                            <Header />
                        </div>
                        {/* content */}
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/company-data" element={<CompanyData />} />
                            <Route path="/data-solutions" element={<SolutionsData />} />
                            <Route path="/account-admin" element={<AccountAdmin />} />
                        </Routes>
                    </div>
                </div>

                <div>
                    <Routes>
                        <Route path="/signin" element={<Signin />} />
                    </Routes>
                </div>
            </>
        </Router>
    );
};