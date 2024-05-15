import { Helmet } from "react-helmet";
// aos package
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Faq = () => {

    useEffect(() => {
        AOS.init({
            duration: 700
        });
    }, []);


    return (
        <div className=" border-t py-8">
             <Helmet>
                <title>Faq</title>
            </Helmet>


            <section className="bg-slate-200 rounded-lg " data-aos="flip-up">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8 ">
                    <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                    <p className="mt-4 mb-8 ">Discover answers to common questions about residential living on HomelyHavens FAQ page. From maximizing space to creating a cozy ambiance, find expert advice for your home.</p>

                    <div className="space-y-4">

                        <details className="w-full border rounded-lg">

                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-black">What types of residential home services does HomelyHaven offer?</summary>

                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 opacity-70 ">HomelyHaven offers a range of residential home services including interior design consultations, home staging for selling or renting properties, home organization services, and home renovation project management. </p>

                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-black">How can I request a consultation for residential home services from HomelyHaven?</summary>

                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 opacity-70">To request a consultation, simply fill out the contact form on the HomelyHaven website with your name, contact information, and a brief description of the services youre interested in. A member of our team will get in touch with you to discuss your needs further. </p>
                        </details>

                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-black">Do you offer virtual consultations for residential home services?</summary>

                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 opacity-70">Yes, HomelyHaven offers virtual consultations for residential home services to accommodate clients who prefer remote meetings or are located outside of our service area. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-black">What sets HomelyHavens residential home services apart from other providers?</summary>

                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 opacity-70">HomelyHaven takes a personalized approach to residential home services, focusing on understanding each clients unique needs and preferences to deliver tailored solutions. Our team of experts combines creativity, professionalism, and attention to detail to ensure exceptional results. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-black">How can I learn more about the residential home services offered by HomelyHaven?</summary>

                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 opacity-70">To learn more about our residential home services, including pricing, process, and portfolio, visit the  `Featured Properties`  section of our website or contact us directly with any questions you may have.. </p>
                        </details>



                    </div>
                </div>
            </section>
            

        </div>
    );
};

export default Faq;