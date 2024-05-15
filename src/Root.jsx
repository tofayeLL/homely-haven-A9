import Nav from "./pages/Shared/Nav";
import { Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import { RotatingLines } from 'react-loader-spinner'
import Footer from "./pages/Shared/Footer";

const Root = () => {
    const navigation = useNavigation();
    return (
        <div className="font-poppins">
            <div className="container mx-auto lg:px-16 md:px-16 px-2">
                <Nav></Nav>
            </div>
            <div className="container mx-auto lg:px-16 md:px-16 px-2">
                {
                    navigation.state === "loading" ?

                        <div className="flex flex-col justify-center items-center">
                            <RotatingLines
                                visible={true}
                                height="100"
                                width="200"
                                color="grey"
                                strokeWidth="5"
                                animationDuration="0.75"
                                ariaLabel="rotating-lines-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                            />

                        </div>

                        :
                        <Outlet></Outlet>
                }
            </div>

            <div>
                <Footer></Footer>

            </div>




        </div>
    );
};

export default Root;