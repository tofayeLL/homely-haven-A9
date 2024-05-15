import { useContext, useState } from "react";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";

// aos package
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";




const Register = () => {

    const [showPass, setShowPass] = useState(false);
    const [errorRegister, setErrorRegister] = useState('');
    const { createUser, updateUserProfile } = useContext(AuthContext);





    const handleLogin = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, photo, password);



        // validation for password
        setErrorRegister('');

        if (password.length < 6) {

            return toast.error(" passwords must be 6 characters!");
        }
        if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {

            return toast.error("password must have included small and capital letter!");
        }




        // create user
        createUser(email, password)
            .then((result) => {
                console.log(result.user);
                toast.success("Registration complete Successfully");
                // update user profile
                updateUserProfile(name, photo);
                e.target.reset();
            })
            .catch((error) => {
                setErrorRegister(error.message);


            })

    }



    // use effect for aos scroll animation
    useEffect(() => {
        AOS.init({
            duration: 900
        });
    }, []);



    return (
        <div className="flex flex-col justify-center items-center">

            <Helmet>
                <title>Register</title>
            </Helmet>


            <div className="flex flex-col justify-center  lg:w-[100vh] mx-auto space-y-3 my-6 bg-slate-200 shadow-xl lg:px-0 px-5  lg:py-12 py-6 rounded-md" data-aos="zoom-in-down">



                <div className=" mx-auto text-purple-700">
                    <h1 className="text-3xl font-bold mb-6">Please Register Now!!</h1>
                </div>


                <form onSubmit={handleLogin} className="lg:w-[80%] mx-auto space-y-5  rounded-lg ">

                    <div >
                        <p className="mb-1 font-medium">User Name</p>
                        <input type="text" name="name" placeholder="Username" className="input input-bordered w-full" />
                    </div>

                    <div >
                        <p className="mb-1 font-medium">Photo Url</p>
                        <input type="text" name="photo" placeholder="photo url" className="input input-bordered w-full" />
                    </div>

                    <div>
                        <p className="mb-1 font-medium">User Email</p>
                        <input type="email" name="email" placeholder="Email address" className="input input-bordered w-full" required />
                    </div>

                    <div >
                        <p className="mb-1 font-medium"> Password</p>
                        <div className="relative">
                            <input type={showPass ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered w-full" required />

                            <span onClick={() => setShowPass(!showPass)} className="absolute top-3 right-3">{showPass ? <FiEyeOff className="text-xl" ></FiEyeOff> : <FiEye className="text-xl"></FiEye>}</span>

                        </div>
                    </div>

                    <div className="text-center">

                        <p className="text-red-500 text-bold">{errorRegister.replace('auth/', '')}</p>
                    </div>


                    <div>
                        <button className="btn text-white text-lg w-full bg-purple-600" type="submit">Register</button>
                    </div>




                </form>




                <div className="text-center ">
                    <p className="font-medium mt-6 text-sm mr-2">have an account ?   Please  <Link to={'/login'} className="btn-active text-purple-700 btn-link">Login</Link></p>
                </div>




            </div>
        </div>
    );
};

export default Register;