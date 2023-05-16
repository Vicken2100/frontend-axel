import React from "react";
import Footer from "../component/footer"
import bc from "../Image/back.jpg"
import tak from "../Image/kotak.png"
import dek from "../Image/Ade.png"


const Selected = () =>{
    return (
        <>
            <header className="grid grid-cols-10 gap-4 items-center justify-items-center bg-[#135c17] p-3" >
                <div className="col-span-1 flex">
                    <a href="/">
                        <img src={bc} alt="" className="w-10 h-10 rounded-full"/>
                    </a>
                    <a href="">
                    <h1 className='font-semibold text-white text-[24px] ml-[20px]'>Selected</h1>
                    </a>
                </div>

                <div className="col-span-9 flex items-center justify-end text-white ml-[700px]">
                    <a href="/">
                        <h1 className="hover:text-yellow-400">Homepage</h1>
                    </a>
                    <a href="/Searching">
                        <h1 className='mx-[80px] hover:text-yellow-400'>Searching</h1>
                    </a>
                    <a href="/Selected">
                        <h1 className="hover:text-yellow-400">Selected</h1>
                    </a>
                </div>
            </header>

            <main className="flex">
            
                <div className="text-black flex-col bg-[#e2dfdf] rounded-2xl m-4">
                    <div className="">
                        <h1 className="text-[24px] mx-[45px] text-[#800080]">Category</h1>
                    </div>


                    <div className="ml-[60px] items-center flex mr-[100px] mt-[20px]">
                        <img src={tak} alt="" />
                        <h1 className="ml-[20px] text-[20px]">Fan-Fiction</h1>
                    </div>

                    <div className="ml-[60px] items-center flex mr-[100px] mt-[20px]">
                        <img src={tak} alt="" />
                        <h1 className="ml-[20px] text-[20px]">Non-Fan-Fiction</h1>
                    </div>

                    <div className="ml-[60px] items-center flex mr-[100px] mt-[20px]">
                        <img src={tak} alt="" />
                        <h1 className="ml-[20px] text-[20px]">Pendidikan</h1>
                    </div>

                    <div className="ml-[60px] items-center flex mr-[100px] mt-[20px]">
                        <img src={tak} alt="" />
                        <h1 className="ml-[20px] text-[20px]">Motivation</h1>
                    </div>

                    <div className="ml-[60px] items-center flex mr-[100px] mt-[20px]">
                        <img src={tak} alt="" />
                        <h1 className="ml-[20px] text-[20px]">Thriller</h1>
                    </div>

                    <div className="ml-[60px] items-center flex mr-[100px] mt-[20px]">
                        <img src={tak} alt="" />
                        <h1 className="ml-[20px] text-[20px]">History</h1>
                    </div>

                    <div className="ml-[60px] items-center flex mr-[100px] mt-[20px]">
                        <img src={tak} alt="" />
                        <h1 className="ml-[20px] text-[20px]">Romance</h1>
                    </div>

                    <div className="ml-[60px] items-center flex mr-[100px] mt-[20px] mb-[30px]">
                        <img src={tak} alt="" />
                        <h1 className="ml-[20px] text-[20px]">Pemasaran</h1>
                    </div>
                    
                </div>

                <div className="flex-col ml-[180px]">
                    <div className="">
                        <h1 className="text-[24px] mx-[45px] text-[black] text-center mt-3">Fan-Action</h1>
                    </div>

                    <div className="flex">
                        <section className="BEST         SELLER flex-col">
                            <div className="">
                                    <h1 className="text-[24px] mx-[45px] text-[black] text-center mt-3 mb-3">Best Seller</h1>
                                </div>
                            <div className="flex ">

                                <div className="bg-[#b2b9b3] rounded-lg shadow-lg overflow-hidden w-[150px]">
                                    <img src={dek} alt="" className="object-cover h-[90px] w-[90%] m-auto rounded-lg mt-3"/>
                                    <div className="px-6 py-3">
                                        <h1 className="font-bold text-md mb-2">Judul Buku</h1>
                                        <p className="text-[black] text-base">Penuis</p>
                                    </div>
                                    <div className="px-6 py-4 ">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2 text-[12px]">
                                        Harga-Harga
                                        </span>
                                    </div>
                                </div>

                                <div className="bg-[#b2b9b3] rounded-lg shadow-lg overflow-hidden w-[150px] ml-6">
                                    <img src={dek} alt="" className="object-cover h-[90px] w-[90%] m-auto rounded-lg mt-3"/>
                                    <div className="px-6 py-3">
                                        <h1 className="font-bold text-md mb-2">Judul Buku</h1>
                                        <p className="text-[black] text-base">Penuis</p>
                                    </div>
                                    <div className="px-6 py-4 ">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2 text-[12px]">
                                        Harga-Harga
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex mt-4">

                                <div className="bg-[#b2b9b3] rounded-lg shadow-lg overflow-hidden w-[150px]">
                                    <img src={dek} alt="" className="object-cover h-[90px] w-[90%] m-auto rounded-lg mt-3"/>
                                    <div className="px-6 py-3">
                                        <h1 className="font-bold text-md mb-2">Judul Buku</h1>
                                        <p className="text-[black] text-base">Penuis</p>
                                    </div>
                                    <div className="px-6 py-4 ">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2 text-[12px]">
                                        Harga-Harga
                                        </span>
                                    </div>
                                </div>

                                <div className="bg-[#b2b9b3] rounded-lg shadow-lg overflow-hidden w-[150px] ml-6">
                                    <img src={dek} alt="" className="object-cover h-[90px] w-[90%] m-auto rounded-lg mt-3"/>
                                    <div className="px-6 py-3">
                                        <h1 className="font-bold text-md mb-2">Judul Buku</h1>
                                        <p className="text-[black] text-base">Penuis</p>
                                    </div>
                                    <div className="px-6 py-4 ">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2 text-[12px]">
                                        Harga-Harga
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </section>

                        <section className="BEST         Author ml-[100px]">
                            <div className="">
                                <h1 className="text-[24px] mx-[45px] text-[black] text-center mt-3 mb-3">Fan-Action</h1>
                            </div>
                            <div className="flex ">

                                <div className="bg-[#b2b9b3] rounded-lg shadow-lg overflow-hidden w-[150px]">
                                    <img src={dek} alt="" className="object-cover h-[90px] w-[90%] m-auto rounded-lg mt-3"/>
                                    <div className="px-6 py-3">
                                        <h1 className="font-bold text-md mb-2">Judul Buku</h1>
                                        <p className="text-[black] text-base">Penuis</p>
                                    </div>
                                    <div className="px-6 py-4 ">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2 text-[12px]">
                                        Harga-Harga
                                        </span>
                                    </div>
                                </div>

                                <div className="bg-[#b2b9b3] rounded-lg shadow-lg overflow-hidden w-[150px] ml-6">
                                    <img src={dek} alt="" className="object-cover h-[90px] w-[90%] m-auto rounded-lg mt-3"/>
                                    <div className="px-6 py-3">
                                        <h1 className="font-bold text-md mb-2">Judul Buku</h1>
                                        <p className="text-[black] text-base">Penuis</p>
                                    </div>
                                    <div className="px-6 py-4 ">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2 text-[12px]">
                                        Harga-Harga
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex mt-4">

                                <div className="bg-[#b2b9b3] rounded-lg shadow-lg overflow-hidden w-[150px]">
                                    <img src={dek} alt="" className="object-cover h-[90px] w-[90%] m-auto rounded-lg mt-3"/>
                                    <div className="px-6 py-3">
                                        <h1 className="font-bold text-md mb-2">Judul Buku</h1>
                                        <p className="text-[black] text-base">Penuis</p>
                                    </div>
                                    <div className="px-6 py-4 ">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2 text-[12px]">
                                        Harga-Harga
                                        </span>
                                    </div>
                                </div>

                                <div className="bg-[#b2b9b3] rounded-lg shadow-lg overflow-hidden w-[150px] ml-6">
                                    <img src={dek} alt="" className="object-cover h-[90px] w-[90%] m-auto rounded-lg mt-3"/>
                                    <div className="px-6 py-3">
                                        <h1 className="font-bold text-md mb-2">Judul Buku</h1>
                                        <p className="text-[black] text-base">Penuis</p>
                                    </div>
                                    <div className="px-6 py-4 ">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2 text-[12px]">
                                        Harga-Harga
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>
                    

                </div>

            </main>

            <Footer/>
        </>
    );
}

export default Selected;