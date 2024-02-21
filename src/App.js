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
import AddDataSolutions from './Data/Solutioins/AddDataSolutions';
import EditDataSolutions from './Data/Solutioins/EditDataSolutions'

import DataInnovation from './Data/Innovation/DataInnovation';
import AddDataInnovation from './Data/Innovation/AddDataInnovation';
import EditDataInnovation from './Data/Innovation/EditDataInnovation';

import TestimonialData from './Data/Testimonial/TestimonialData';
import AddDataTestimoni from './Data/Testimonial/AddDataTestimonial';
import EditDataTestimoni from './Data/Testimonial/EditDataTestimoni';

import DataPortfolio from './Data/Portfolio/DataPortfolio';
import AddDataPortfolio from './Data/Portfolio/AddDataPortfolio';
import EditDataPortfolio from './Data/Portfolio/EditDataPortfolio';

import DataTeams from './Data/Teams/DataTeams';
import AddDataTeams from './Data/Teams/AddDataTeams';
import EditDataTeams from './Data/Teams/EditDataTeams';

import DataService from './Data/Service/DataService';
import AddDataService from './Data/Service/AddDataService';
import EditDataService from './Data/Service/EditDataService';

import CategoryBlog from './Data/Blog/CategoryBlog';
import DataBlog from './Data/Blog/DataBlog';
import AddDataBlog from './Data/Blog/AddDataBlog';
import EditDataBlog from './Data/Blog/EditDataBlog';

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
                        path="/add-data-solutions"
                        element={
                            <DefaultLayout>
                                <AddDataSolutions />
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
                        path = "/add-data-innovation"
                        element={
                            <DefaultLayout>
                                <AddDataInnovation />
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
                        path = "/add-data-testimonial"
                        element={
                            <DefaultLayout>
                                <AddDataTestimoni />
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
                        path = "/add-data-portfolio"
                        element={
                            <DefaultLayout>
                                <AddDataPortfolio />
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
                        path = "/add-data-teams"
                        element={
                            <DefaultLayout>
                                <AddDataTeams />
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

                    {/* service */}
                    <Route
                        path = "/data-services"
                        element={
                            <DefaultLayout>
                                <DataService />
                            </DefaultLayout>
                        }
                    />

                    <Route
                        path = "/add-data-service"
                        element={
                            <DefaultLayout>
                                <AddDataService />
                            </DefaultLayout>
                        }
                    />

                    <Route
                        path = "/edit-data-services"
                        element={
                            <DefaultLayout>
                                <EditDataService />
                            </DefaultLayout>
                        }
                    />

                    {/* blog */}
                    <Route
                        path = "/category-blog"
                        element={
                            <DefaultLayout>
                                <CategoryBlog />
                            </DefaultLayout>
                        }
                    />
                    <Route
                        path = "/data-blog"
                        element={
                            <DefaultLayout>
                                <DataBlog />
                            </DefaultLayout>
                        }
                    />

                    <Route
                        path = "/add-data-blog"
                        element={
                            <DefaultLayout>
                                <AddDataBlog />
                            </DefaultLayout>
                        }
                    />

                    <Route
                        path = "/edit-data-blog"
                        element={
                            <DefaultLayout>
                                <EditDataBlog />
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
