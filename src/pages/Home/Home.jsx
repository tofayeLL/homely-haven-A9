import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Featured from "./Featured";
import ChooseUs from "./ChooseUs";
import Team from "./Team";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <div className="lg:py-4">
        <Banner></Banner>
      </div>

      <div className="lg:my-12 md:my-8 mt-6">
        <Featured></Featured>
      </div>
      <div>
        <ChooseUs></ChooseUs>
      </div>
      <div className="lg:my-12 md:my-8 ">
        <Team></Team>
      </div>

    </div>
  );
};

export default Home;