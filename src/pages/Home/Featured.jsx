import { useEffect, useState } from "react";
import FeaturedCards from "../FeaturedCards/FeaturedCards";
// animater css
import 'animate.css';


const Featured = () => {
    const [data, setData] = useState([]);

    useEffect(() => {

        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data));

    }, [])


    return (
        <div>

            <div className="space-y-3 lg:my-2">
                <h1 className="text-3xl font-bold animate__animated animate__backInLeft  animate__delay-0.5s">Featured Properties</h1>
                <p className="lg:w-[54%]  animate__animated animate__backInRight animate__delay-0.5s "> Explore curated residential properties tailored for comfort and style in our Featured section.Browse our latest hot offers</p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    data.map(item =>
                        <FeaturedCards
                            item={item}
                            key={item.id}></FeaturedCards>)
                }
            </div>

        </div>
    );
};

export default Featured;