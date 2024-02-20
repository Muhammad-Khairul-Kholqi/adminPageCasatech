import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Template/Side';

import Header from './Header';

import Dashboard from './Dashboard';

import AccountAdmin from './AccountAdmin';

import CompanyData from './Data/Company/CompanyData';
import PreviewData from './Data/Company/PreviewData';
import EditData from './Data/Company/EditData';

import SolutionsData from './Data/Solutioins/SolutionsData';
import EditDataSolutions from './Data/Solutioins/EditDataSolutions'

import DataInnovation from './Data/Innovation/DataInnovation';
import EditDataInnovation from './Data/Innovation/EditDataInnovation';

import TestimonialData from './Data/Testimonial/TestimonialData';
import EditDataTestimoni from './Data/Testimonial/EditDataTestimoni';

import DataPortfolio from './Data/Portfolio/DataPortfolio';
import EditDataPortfolio from './Data/Portfolio/EditDataPortfolio';

import DataTeams from './Data/Teams/DataTeams';
import EditDataTeams from './Data/Teams/EditDataTeams';

import Signin from './Signin';
import Signup from './Signup';
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
                    {/* dashboard */}
                    <Route
                        path="/"
                        element={
                            <DefaultLayout>
                                <Dashboard />
                            </DefaultLayout>
                        }
                    />
                    {/* company */}
                    <Route
                        path="/company-data"
                        element={
                            <DefaultLayout>
                                <CompanyData />
                            </DefaultLayout>
                        }
                    />
                    <Route
                        path = "/preview-data-company"
                        element={
                            <DefaultLayout>
                                <PreviewData />
                            </DefaultLayout>
                        }
                    />
                    <Route
                        path = "/edit-data-company"
                        element={
                            <DefaultLayout>
                                <EditData />
                            </DefaultLayout>
                        }
                    />

                    {/* solutions */}
                    <Route
                        path="/data-solutions"
                        element={
                            <DefaultLayout>
                                <SolutionsData />
                            </DefaultLayout>
                        }
                    />
                     <Route
                        path="/edit-data-solutions"
                        element={
                            <DefaultLayout>
                                <EditDataSolutions />
                            </DefaultLayout>
                        }
                    />

                    {/* innovation */}
                    <Route
                        path = "/data-innovation"
                        element={
                            <DefaultLayout>
                                <DataInnovation />
                            </DefaultLayout>
                        }
                    />
                    <Route
                        path = "/edit-data-innovation"
                        element={
                            <DefaultLayout>
                                <EditDataInnovation />
                            </DefaultLayout>
                        }
                    />

                    {/* testimonial */}
                    <Route
                        path = "/testimonial-data"
                        element={
                            <DefaultLayout>
                                <TestimonialData />
                            </DefaultLayout>
                        }
                    />
                    <Route
                        path = "/edit-data-testimonial"
                        element={
                            <DefaultLayout>
                                <EditDataTestimoni />
                            </DefaultLayout>
                        }
                    />

                    {/* portfolio */}
                    <Route
                        path = "/data-portfolio"
                        element={
                            <DefaultLayout>
                                <DataPortfolio />
                            </DefaultLayout>
                        }
                    />

                    <Route
                        path = "/edit-data-portfolio"
                        element={
                            <DefaultLayout>
                                <EditDataPortfolio />
                            </DefaultLayout>
                        }
                    />

                    {/* teams */}
                     <Route
                        path = "/data-teams"
                        element={
                            <DefaultLayout>
                                <DataTeams />
                            </DefaultLayout>
                        }
                    />

                    <Route
                        path = "/edit-data-teams"
                        element={
                            <DefaultLayout>
                                <EditDataTeams />
                            </DefaultLayout>
                        }
                    />


                    {/* account admin */}
                    <Route
                        path="/account-admin"
                        element={
                            <DefaultLayout>
                                <AccountAdmin />
                            </DefaultLayout>
                        }
                    />
                    {/* sign in & sign up */}
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />

                    {/* not found */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
