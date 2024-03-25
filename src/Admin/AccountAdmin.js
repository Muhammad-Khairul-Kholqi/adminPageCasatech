// import React, { useEffect } from 'react';
// import profile from "../Assets/profile.png"
// import background from "../Assets/bg.png"
// import '../Style/StyleAccountAdmin.css';
// import { FaPenToSquare } from "react-icons/fa6";

// const AccountAdmin = () => {
//      useEffect(() => {
//          document.title = "Account Admin | Casatech";
//      }, []);
//     return (
//         <div>
//             <div className = "back-img bg-cover bg-center h-[200px] rounded-[10px] text-center mt-[30px]"
//                 style = {
//                     {
//                         backgroundImage: `url(${background})`
//                     }
//                 } >
//                     <h1 className="title-account text-white text-[40px] font-bold py-[20px] font-roboto-slab tracking-[2px]">Account Admin</h1>
//             </div>

//                 <div className="bg-white p-[30px] mt-[30px] rounded-[10px]">
//                     <div className='flex justify-center mb-[20px]'>
//                         <img src={profile} className="w-[150px] rounded-[5px]" />
//                     </div>
//                     <div className="text-center flex justify-center gap-[20px] flex-wrap"> 
//                         {/* fullname */}
//                         <div className="border border-1 px-[10px] py-[5px] cursor-pointer hover:border-blue-600">
//                             <p>khairul</p>
//                         </div>

//                         {/* birht */}
//                         <div className="border border-1 px-[10px] py-[5px] cursor-pointer hover:border-blue-600">
//                             <p>2013-11-08</p>
//                         </div>

//                         {/* position */}
//                         <div className="border border-1 px-[10px] py-[5px] cursor-pointer hover:border-blue-600">
//                             <p>manager</p>
//                         </div>

//                         {/* address */}
//                         <div className="border border-1 px-[10px] py-[5px] cursor-pointer hover:border-blue-600">
//                             <p>cicurug</p>
//                         </div>
//                     </div>
//                 </div>
//         </div>

         

//     )
// }

// export default AccountAdmin;




import React, { useEffect } from 'react';
import profile from "../Assets/profile.png"
import background from "../Assets/bg.png"
import '../Style/StyleAccountAdmin.css';

const AccountAdmin = () => {
    useEffect(() => {
        document.title = "Account Admin | Casatech";
    }, []);

    // Mendapatkan data dari localStorage setelah pengguna berhasil login
    const fullname = localStorage.getItem('fullname');
    const place_date_birth = localStorage.getItem('place_date_birth');
    const position = localStorage.getItem('position');
    const image = localStorage.getItem('image');
    const addres = localStorage.getItem('addres');

    return (
        <div>
            <div className="back-img bg-cover bg-center h-[200px] rounded-[10px] text-center mt-[30px]"
                style={{
                    backgroundImage: `url(${background})`
                }}>
                <h1 className="title-account text-white text-[40px] font-bold py-[20px] font-roboto-slab tracking-[2px]">Account Admin</h1>
            </div>

            <div className="bg-white p-[30px] mt-[30px] rounded-[10px]">
                <div className='flex justify-center mb-[20px]'>
                    <img src={image} className="w-[150px] rounded-[5px]" alt="Profile" />
                </div>
                <div className="text-center flex justify-center gap-[20px] flex-wrap">
                    {/* fullname */}
                    <div className="border border-1 px-[10px] py-[5px] cursor-pointer hover:border-blue-600">
                        <p>{fullname}</p>
                    </div>

                    {/* birth */}
                    <div className="border border-1 px-[10px] py-[5px] cursor-pointer hover:border-blue-600">
                        <p>{place_date_birth}</p>
                    </div>

                    {/* position */}
                    <div className="border border-1 px-[10px] py-[5px] cursor-pointer hover:border-blue-600">
                        <p>{position}</p>
                    </div>

                    {/* address */}
                    <div className="border border-1 px-[10px] py-[5px] cursor-pointer hover:border-blue-600">
                        <p>{addres}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountAdmin;
