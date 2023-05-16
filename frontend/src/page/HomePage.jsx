import React from "react";
import Footer from "../component/footer"
import Buku from "../Image/Langit.jpeg"
import GamTak from "../Image/deskbuk.jpg"


const HomePage = () =>{
    return (
        <>
            <header className="grid grid-cols-10 gap-4 items-center justify-items-center bg-[#135c17] p-3" >
                <div className="col-span-1 flex">
                    <a href="">
                    <h1 className='font-semibold text-white text-[24px] ml-[20px]'>HomePage</h1>
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
            
            <section className="Kotak Samping m-4 relative">
                <div className="relative">
                    <img src={GamTak} alt="" className="w-[600px] h-[600px]"/>
                    <p className="absolute inset-0 flex items-center justify-center text-[#0A8000] font-bold text-[37px]">Dezbook <br />Information</p>
                </div>
            </section>

                
                    <div className="flec-col">
                        <div className="">
                            <h1 className="text-[24px] mx-[45px] text-[black] mt-4">Terlaris</h1>
                        </div>

                        <div className="flex mt-4">
                            <div className="bg-[#b2b9b3] rounded-lg shadow-lg overflow-hidden w-[150px]">
                                <img src={Buku} alt="" className="object-cover h-[90px] w-[90%] m-auto rounded-lg mt-3"/>
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
                                <img src={Buku} alt="" className="object-cover h-[90px] w-[90%] m-auto rounded-lg mt-3"/>
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
                                <img src={Buku} alt="" className="object-cover h-[90px] w-[90%] m-auto rounded-lg mt-3"/>
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
                                <img src={Buku} alt="" className="object-cover h-[90px] w-[90%] m-auto rounded-lg mt-3"/>
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
                                <img src={Buku} alt="" className="object-cover h-[90px] w-[90%] m-auto rounded-lg mt-3"/>
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
                                <img src={Buku} alt="" className="object-cover h-[90px] w-[90%] m-auto rounded-lg mt-3"/>
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
                                <img src={Buku} alt="" className="object-cover h-[90px] w-[90%] m-auto rounded-lg mt-3"/>
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
                    
                



                    <div className="">
                        <h1 className="text-[24px] mx-[45px] text-[black] mt-4">Recommended</h1>
                    </div>

                    <div className="flex mt-4">
                        <div className="bg-[#b2b9b3] rounded-lg shadow-lg overflow-hidden w-[150px]">
                            <img src={Buku} alt="" className="object-cover h-[90px] w-[90%] m-auto rounded-lg mt-3"/>
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
                            <img src={Buku} alt="" className="object-cover h-[90px] w-[90%] m-auto rounded-lg mt-3"/>
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
                            <img src={Buku} alt="" className="object-cover h-[90px] w-[90%] m-auto rounded-lg mt-3"/>
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
                            <img src={Buku} alt="" className="object-cover h-[90px] w-[90%] m-auto rounded-lg mt-3"/>
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
                            <img src={Buku} alt="" className="object-cover h-[90px] w-[90%] m-auto rounded-lg mt-3"/>
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
                            <img src={Buku} alt="" className="object-cover h-[90px] w-[90%] m-auto rounded-lg mt-3"/>
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
                            <img src={Buku} alt="" className="object-cover h-[90px] w-[90%] m-auto rounded-lg mt-3"/>
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
                </div>

            </main>
            <Footer/>
        </>
       
    );
}

export default HomePage;