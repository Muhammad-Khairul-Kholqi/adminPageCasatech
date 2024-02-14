import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Template/Side';
import Header from './Header';
import Dashboard from './Dashboard';
import DataIntegrated from './Company_data/Integrated_data/index_integrated';
import AccountAdmin from './AccountAdmin';

const App = () => {
    return (
        <Router>
            <div className="flex h-screen">
                <div className="w-[230px]">
                    <Sidebar />
                </div>
                <div className = "flex-1 overflow-y-auto bg-[#ECEDF2] p-4" >
                    <div className = "bg-white py-[10px] rounded-lg shadow-md" >
                        <Header />
                    </div>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/company-data/integrated-data" element={<DataIntegrated />} />
                        <Route path="/account-admin" element={<AccountAdmin />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
