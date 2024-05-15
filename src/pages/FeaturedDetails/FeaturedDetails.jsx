import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom";
// aos package
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const FeaturedDetails = () => {
    const cards = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const card = cards.find(card => card.id === parseInt(idInt));
    const { image, estate_title, price, area, location, segment_name, description, status, facilities } = card;


    useEffect(() => {
        AOS.init({
            duration: 600
        });
    }, []);


    return (
        <div className="border-t ">

            <Helmet>
                <title>FeatureDetails</title>
            </Helmet>

            <div className="px-5 mx-auto sm:px-10 md:px-16 py-8 " data-aos="fade-down" >

                <div className="flex flex-col max-w-6xl mx-auto overflow-hidden rounded p-2">
                    <div className="mb-8">
                        <h1 className="inline-block text-2xl font-semibold sm:text-3xl">{estate_title}</h1>
                        <p>Location:  <span className="opacity-80">{location}</span></p>
                    </div>

                    <div>
                        <img src={image} alt="" className="w-full h-60 sm:h-[66vh] bg-gray-500 rounded-lg object-cover object-center" />
                    </div>

                    <div className="p-6 pb-12 m-4 mx-auto -mt-20 space-y-6 lg:max-w-6xl sm:px-10 sm:mx-12 lg:rounded-md bg-slate-200 " data-aos="zoom-in-up">

                        <div className="space-y-4 divide-y divide-black">

                            <div>
                                <span className="font-semibold">segmentName</span>
                                <p> {segment_name}</p>
                            </div>

                            <div className="space-y-2 pt-3">
                                <p><span className="font-medium">Price:</span> {price}</p>
                                <p><span className="font-medium">Area:</span> {area}</p>
                                <p><span className="font-medium">Status:</span> {status}</p>
                                <div>
                                    <p className="font-semibold">Facilities</p>
                                    {
                                        facilities.map((item, index) => <li key={index}>{item}</li>)
                                    }
                                </div>


                            </div>


                            <div className="py-4">
                                <p className="font-semibold">OverView</p>
                                <p>{description}</p>

                            </div>

                        </div>

                    </div>


                </div>

            </div>


        </div>
    );
};

export default FeaturedDetails;