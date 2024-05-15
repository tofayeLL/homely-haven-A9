
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const Nav = () => {
    const { user, logOutUser } = useContext(AuthContext);



    const links = <>
        <li className="font-medium"><NavLink to={'/'}>Home</NavLink></li>
        {/* <li className="font-medium"><NavLink to={'/update'}>Update Profile</NavLink></li> */}

        {
            user &&
            <li className="font-medium"><NavLink to={'/update'}>Update Profile</NavLink></li>
        }

        <li className="font-medium"><NavLink to={'/contact'}>Contact us</NavLink></li>
        <li className="font-medium"><NavLink to={'/faq'}>FAQ ?</NavLink></li>
    </>



    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                toast.success("Logout Successfully");

            })
            .catch((error) => {
                toast.error(error.message);

            })
    }




    return (
        <div className="lg:mb-3 mb-7 ">



            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content z-[10] shadow bg-base-100 rounded-box w-40 ">
                            {
                                links
                            }

                        </ul>
                    </div>
                    <a className="btn btn-ghost lg:text-2xl text-sm font-bold gap-0">Homely<span className="text-purple-600">Haven</span> </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-2">
                        {
                            links
                        }

                    </ul>
                </div>
                <div className="navbar-end">
                    {user ?
                        <div className="flex  justify-center items-center gap-2 ">
                            <div className="tooltip tooltip-bottom lg:w-14 w-12 rounded-full border-[2px] border-green-400 z-10 " data-tip={user?.displayName || 'Tofayel'}>
                                <img className="w-full rounded-full p-1" alt="Tailwind CSS Navbar component" src={user?.photoURL || 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'} />
                            </div>

                            <button onClick={handleLogOut} className="btn lg:text-base text-xs text-purple-600">Logout</button>



                        </div>
                        : <Link to={'/login'}><button className="btn lg:text-base text-xs text-purple-600">Login</button></Link>
                    }
                </div>
            </div>

        </div>
    );
};

export default Nav;