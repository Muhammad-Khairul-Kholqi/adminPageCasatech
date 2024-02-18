import React from "react";
import backgImg from '../../Assets/bg.png'
import '../../Style/StyleCompany.css'

const CompanyData = () => {
    return (
        <div>
            <div className = "container bg-cover bg-center mt-[20px] py-[50px] rounded-[10px]"
            style = {
                {
                    backgroundImage: `url(${backgImg})`
                }
            }><h1 className="title text-center item-center text-white text-[40px] font-bold px-[20px]"> Company Data </h1></div>
        </div>
    )
}

export default CompanyData;