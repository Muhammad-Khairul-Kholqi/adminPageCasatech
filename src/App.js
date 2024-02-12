import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Template/Sidebar';
import Dashboard from './Dashboard';
import DataIntegrated from './Company_data/Integrated_data/index_integrated';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar className="w-[303px]"/>
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/company-data/integrated-data" element={<DataIntegrated />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
