import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
// aos package
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



const FeaturedCards = ({ item }) => {

    const { image, estate_title, id, price, area } = item;

    useEffect(() => {
        AOS.init({
          duration : 700
        });
      }, []);
      
    return (
        <div className="">

            {/* card section */}
            <div className=""  >

                {/* card 1 */}
                <div className="rounded-md shadow-sm my-6 border-[1px] border-[#e0e0e2] " data-aos="fade-down">

                    <div className="p-6" >
                        <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                    </div>

                    <div className="flex flex-col justify-between p-6 space-y-8" data-aos="fade-up">
                        <div className="space-y-2" >
                            <h2 className="text-xl font-semibold tracking-wide text-violet-800 ">{estate_title}</h2>
                            <p className="text-lg font-semibold">{price}</p>
                            <p >{area}</p>
                        </div>
                        <Link to={`/card/${id}`}> <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400  text-white">View Details</button></Link>
                    </div>

                </div>

            </div>


        </div>
    );
};

export default FeaturedCards;

FeaturedCards.propTypes = {
    item: PropTypes.object
}