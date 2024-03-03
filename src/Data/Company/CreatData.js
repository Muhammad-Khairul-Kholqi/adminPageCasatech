import React, { useState, useEffect } from 'react';
import backgImg from '../../Assets/bg.png';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import '../../Style/Company/StyleEditCompany.css';

import CreateIntegrated from './FormCreate/Integragted';
import CreateVisiMisi from './FormCreate/VisiMisi';
import CreateAbout from './FormCreate/About';
import CreateSponsorship from './FormCreate/Sponsorship';
import CreateCulture from './FormCreate/Culture';
import CreateContactCatalog from './FormCreate/ContactCatalog';

const CreateDataCompany = () => {
    useEffect(() => {
        document.title = "Create Integrated Data | Casatech";
    }, []);

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <div>
            <div
                className="container bg-cover bg-center mt-[20px] py-[50px] rounded-[10px]"
                style={{ backgroundImage: `url(${backgImg})` }}>
                <h1 className = "title text-center item-center text-white text-[40px] font-bold px-[20px] font-roboto-slab tracking-[2px]" >
                    Create Company Data
                </h1>
                <div className = "link flex flex-wrap px-[10px] items-center text-white gap-[5px] justify-center mt-[15px]" >
                    <Link to = "/company-data" >
                        <p className="hover:underline">Company Data</p>
                    </Link>
                    <MdOutlineKeyboardArrowRight className="mt-[3px]" />
                    <p className="text-blue-600">Create Company Data</p>
                </div>
            </div>

            <div className="tabs flex justify-center flex-wrap gap-[25px] p-[20px] bg-white rounded-[3px] mt-[20px]">
                <button onClick={() => handleTabClick(1)} className="{activeTab === 1 ? 'active' : ''} text-blue-600 hover:text-blue-900 hover:underline underline-offset-8">
                Integrated
                </button>
                <button onClick={() => handleTabClick(2)} className="{activeTab === 2 ? 'active' : ''} text-blue-600 hover:text-blue-900 hover:underline underline-offset-8">
                Vision & Mision
                </button>
                <button onClick={() => handleTabClick(3)} className="{activeTab === 3 ? 'active' : ''} text-blue-600 hover:text-blue-900 hover:underline underline-offset-8">
                About
                </button>
                <button onClick={() => handleTabClick(4)} className="{activeTab === 3 ? 'active' : ''} text-blue-600 hover:text-blue-900 hover:underline underline-offset-8">
                Sponsorship
                </button>
                <button onClick={() => handleTabClick(5)} className="{activeTab === 3 ? 'active' : ''} text-blue-600 hover:text-blue-900 hover:underline underline-offset-8">
                Culture
                </button>
                <button onClick={() => handleTabClick(6)} className="{activeTab === 3 ? 'active' : ''} text-blue-600 hover:text-blue-900 hover:underline underline-offset-8">
                Contact Catalog
                </button>
            </div>

            {/* integrated */}
            <div>
                {activeTab === 1 && <CreateIntegrated />}
            </div>

            {/* vision - mision */}
            <div>
                {activeTab === 2 && <CreateVisiMisi /> }
            </div>

            {/* About */}
            <div>
                {activeTab === 3 && <CreateAbout /> }
            </div>

            {/* sponsorship */}
            <div>
                {activeTab === 4 && <CreateSponsorship /> }
            </div>

            {/* culture */}
            <div>
                {activeTab === 5 && <CreateCulture /> }
            </div>

            {/* contact - catalog */}
            <div>
                {activeTab === 6 && <CreateContactCatalog /> }
            </div>


        </div>
    );
};

export default CreateDataCompany;