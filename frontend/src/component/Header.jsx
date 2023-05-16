import React from 'react';
import bc from "../Image/back.jpg"
import { useNavigate } from 'react-router-dom';




const Navbar = () => {

    const navigate = useNavigate();

    const clickEvent = (link) =>{
        navigate(link);
    }
    return(
        <header className="grid grid-cols-10 gap-4 items-center justify-items-center bg-[#135c17] p-3" >
            <div className="col-span-1 flex">
                <a href="/Profile">
                    <img src={bc} alt="" className="w-10 h-10 rounded-full"/>
                </a>
                <a href="">
                <h1 className='font-semibold text-white text-[24px] hover:text-[#FBD9D9] ml-[20px]'>Searching</h1>
                </a>
            </div>

            <div className="col-span-9 flex items-center justify-end text-white ml-[700px]">
                    <a href="">
                        <h1 className="hover:text-yellow-400">Homepage</h1>
                    </a>
                    <a href="">
                        <h1 className='mx-[80px] hover:text-yellow-400'>Searching</h1>
                    </a>
                    <a href="">
                        <h1 className="hover:text-yellow-400">Selected</h1>
                    </a>
            </div>
        </header>
    )
}

export default Navbar;


