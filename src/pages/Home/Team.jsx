import React from 'react';
import team3 from '../../assets/images/team3.jpg';
import team2 from '../../assets/images/team2.jpg';
import team4 from '../../assets/images/team4.jpg';
import team5 from '../../assets/images/team5.jpg';
import team6 from '../../assets/images/team6.jpg';
import team1 from '../../assets/images/team1.jpg';
// aos package
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Team = () => {


    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);



    return (
        <div>

            <section className="py-6  border-[1px] border-slate-200 rounded-lg" data-aos="zoom-in">
                <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-8">
                    <h1 className="text-3xl font-bold leading-none text-center sm:text-4xl">Our team</h1>
                    <p className="max-w-2xl text-center text-gray-400">Meet the talented individuals behind Homely Haven, dedicated to crafting exceptional living spaces and providing unparalleled service to our residents.</p>

                    <div className="flex flex-row flex-wrap-reverse justify-center">
                        <div className="flex flex-col justify-center m-6 text-center">
                            <div className=''>
                                <img alt="" className="self-center object-cover flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full  border-[3px] border-violet-400 p-[2px]" src={team3} />
                            </div>
                            <p className="text-xl font-semibold leading-tight">Sophie Bennett</p>
                            <p className="text-gray-400">Graphic Designer</p>
                        </div>
                        
                        <div className="flex flex-col justify-center m-6 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full border-[3px] border-violet-400 p-[2px] object-cover " src={team2} />
                            <p className="text-xl font-semibold leading-tight">Marcus Reynolds</p>
                            <p className="text-gray-400">Brand Strategist</p>
                        </div>
                        <div className="flex flex-col justify-center m-6 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full border-[3px] border-violet-400 p-[2px] object-cover " src={team4}/>
                            <p className="text-xl font-semibold leading-tight">Nolan Carter</p>
                            <p className="text-gray-400">Frontend Developer</p>
                        </div>
                        <div className="flex flex-col justify-center m-6 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full border-[3px] border-violet-400 p-[2px] object-cover " src={team5} />
                            <p className="text-xl font-semibold leading-tight">Emily White</p>
                            <p className="text-gray-400">Content Coordinator</p>
                        </div>
                        <div className="flex flex-col justify-center m-6 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full border-[3px] border-violet-400 p-[2px] object-cover " src={team6}/>
                            <p className="text-xl font-semibold leading-tight">Jasmine Lee</p>
                            <p className="text-gray-400">UI/UX Architect</p>
                        </div>
                        <div className="flex flex-col justify-center m-6 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full border-[3px] border-violet-400 p-[2px] object-cover " src={team1} />
                            <p className="text-xl font-semibold leading-tight">Ava Thompson</p>
                            <p className="text-gray-400">Creative Director</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Team;