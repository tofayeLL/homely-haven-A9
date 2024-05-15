import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
// aos package
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const Contact = () => {


    useEffect(() => {
        AOS.init({
            duration: 500
        });
    }, []);



    return (
        <div>

            <Helmet>
                <title>Contact</title>
            </Helmet>


            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32   bg-[linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.7)),url(https://i.ibb.co/4SWPknN/choose.jpg)] bg-center bg-cover " data-aos="zoom-in-up">

                <div className="flex flex-col justify-between lg:px-6 space-y-5 text-white ">

                    <div className="py-6 md:py-0 ">

                        <h1 className="text-4xl font-bold">Get in touch</h1>
                        <p className="pt-2 pb-4">Fill in the form to start a conversation with us.</p>

                        <div className="space-y-4">

                            <p className="flex items-center">
                                <span className="w-5 h-5 mr-2 sm:mr-4">
                                    <FaLocationDot></FaLocationDot>
                                </span>
                                <span> Dhaka City, Bangladesh </span>
                            </p>
                            <p className="flex items-center">
                                <span className="w-5 h-5 mr-2 sm:mr-4">
                                    <IoMdCall className="text-xl"></IoMdCall>
                                </span>
                                <span>123456789</span>
                            </p>


                            <p className="flex items-center">
                                <span className="w-5 h-5 mr-2 sm:mr-4">
                                    <MdOutlineMailOutline className="text-xl"></MdOutlineMailOutline>
                                </span>
                                <span>homelyhaven@gmail.com</span>
                            </p>
                        </div>
                    </div>











                </div>
                <form noValidate="" className="space-y-6 text-white ">
                    <div>
                        <label htmlFor="name" className="text-sm">Full name</label>
                        <input id="name" type="text" placeholder="Your  name" className="w-full p-3 rounded " />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input id="email" type="email" className="w-full p-3 rounded " placeholder='Your email' />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm">Message</label>
                        <textarea id="message" rows="3" className="w-full p-3 rounded " placeholder='Message...'></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-400 text-gray-900">Send Message</button>
                </form>
            </div>

        </div>
    );
};

export default Contact;