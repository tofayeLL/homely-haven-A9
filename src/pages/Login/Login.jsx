import { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
// aos package
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Login = () => {
    const [showPass, setShowPass] = useState(false);

    const { signInUser, googleLogIn, gitHubLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);


        // sign in user
        signInUser(email, password)
            .then((result) => {
                console.log(result.user);
                e.target.reset();
                navigate(location?.state ? location.state : '/');
                toast.success("Login Successfully");
            })
            .catch((error) => {
                toast.error(error.message.replace('auth/', 'userEmail or password-').replace('-credential', ''));
            })
    }

    // google login
    const handleGoogleLogin = () => {
        googleLogIn()
            .then((result) => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/');
                toast.success("Login Successfully");
            })
            .catch((error) => {
                console.log(error.message);
            })

    }
    // github login
    const handleGitLogin = () => {
        gitHubLogin()
            .then((result) => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/');
                toast.success("Login Successfully");
                
            })
            .catch((error) => {
                console.log(error.message);
            })

    }


     // use effect for aos
     useEffect(() => {
        AOS.init({
            duration: 800
        });
    }, []);



    return (

        <div className="flex flex-col justify-center items-center">
            <Helmet>
                <title>Login</title>
            </Helmet>



            <div className="flex flex-col justify-center  lg:w-[100vh] mx-auto space-y-4 my-6 bg-slate-200 shadow-xl lg:px-0 px-5  lg:py-12 py-6 rounded-md" data-aos="fade-down">



                <div className=" mx-auto text-purple-700">
                    <h1 className="text-3xl font-bold ">Please Login Now!!</h1>
                </div>


                <form onSubmit={handleLogin} className="lg:w-[80%] mx-auto space-y-5  rounded-lg " >

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


                    <div>
                        <button className="btn text-white text-lg w-full bg-purple-600" type="submit">Login</button>
                    </div>

                    <div className="flex flex-col w-full border-opacity-50 ">

                        <div className="divider">Login with social accounts</div>

                    </div>


                </form>
                <div className="text-center lg:space-x-3 md:space-x-2"  >
                    <Link><button onClick={handleGoogleLogin} className="btn bg-purple-600 text-white"><FaGoogle className="text-xl" ></FaGoogle> Login with Google</button></Link>
                    <Link><button onClick={handleGitLogin} className="btn bg-purple-600 text-white"><FaGithub className="text-xl"></FaGithub>   Login with Github</button></Link>
                </div>


                <div className="text-center " >
                    <p className="font-medium mt-6 text-sm mr-2">Do not have an account ?  Please <Link to={'/register'} className="btn-active text-purple-700 btn-link">Register</Link></p>
                </div>


            </div>
        </div>
    );
};

export default Login;