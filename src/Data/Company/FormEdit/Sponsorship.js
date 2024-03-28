import React from "react";

const Sponsorship = () => {
    return(
        <div className="bg-white p-[20px] rounded-[10px] mt-[20px]">
            <h1 className="text-center font-bold text-[20px] mb-[20px]">Sponsorship</h1>
            <form>
                <div className="mt-[15px]">
                    <span for="client">Clients:</span>
                    <br />
                    <input className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px]" type="number" id="client" />
                </div>
                <div className="mt-[15px]">
                    <span for="sponsor">Sponsors:</span>
                    <br />
                    <input className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px]" type="number" id="sponsor" />
                </div>
                <div className="mt-[15px]">
                    <span for="ratings">Ratings:</span>
                    <br />
                    <input className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px]" type="text" id="ratings" />
                </div>
                <div className="mt-[10px]">
                        <span for="image">Image Client:</span>
                        <br />
                        <input 
                            id="image" 
                            className="mt-[10px] w-full mb-5 text-sm text-black border-2 border-gray-600 p-[5px] rounded-[3px] cursor-pointer" 
                            type="file" 
                        />
                     </div>
                {/* <button className="mt-[20px] rounded-[3px] w-full bg-gray-500 hover:bg-gray-600 text-white py-[5px]">Save Changes</button> */}
            </form>
        </div>
    )
}

export default Sponsorship;