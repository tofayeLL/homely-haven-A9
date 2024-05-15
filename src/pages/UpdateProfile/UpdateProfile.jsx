import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
// aos package
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Helmet } from "react-helmet";



const UpdateProfile = () => {
    const { user, updateUserProfile, setUser } = useContext(AuthContext);


    const handleUpdate = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        console.log(name, email, photo);


        // update user profile 
        updateUserProfile(name, photo, email)
            .then(

                () => setUser(
                    {
                        ...user, displayName: name, photoURL: photo
                    }
                )
            )
    }


    // use effect for aos
    useEffect(() => {
        AOS.init({
            duration: 800
        });
    }, []);


    return (

        <div className="flex flex-col justify-center  lg:w-[100vh] mx-auto space-y-3 my-6 bg-slate-200 shadow-xl lg:px-0 px-5  lg:py-12 py-6 rounded-md" data-aos="fade-up">

            <Helmet>
                <title>Update profile</title>
            </Helmet>



            <div className=" mx-auto text-purple-700">
                <h1 className="text-3xl font-bold mb-6">Update current user profile</h1>
            </div>


            <form onSubmit={handleUpdate} className="lg:w-[80%] mx-auto space-y-5  rounded-lg ">

                <div >
                    <p className="mb-1 font-medium">User Name</p>
                    <input type="text" name="name" placeholder="user name" className="input input-bordered w-full" defaultValue={user.displayName} />
                </div>

                <div >
                    <p className="mb-1 font-medium">Photo Url</p>
                    <input type="text" name="photo" placeholder="photo url" className="input input-bordered w-full" defaultValue={user.photoURL} />
                </div>

                <div>
                    <p className="mb-1 font-medium">User Email</p>
                    <input type="email" name="email" placeholder="user email" className="input input-bordered w-full" required defaultValue={user.email} />
                </div>


                <div>
                    <button className="btn text-white text-lg w-full bg-purple-600" type="submit">Update</button>
                </div>




            </form>


        </div>
    );
};

export default UpdateProfile;