import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            {/*   <div className="flex flex-col justify-center items-center h-[100vh] lg:space-y-6 space-y-3">
                <h1 className="lg:text-5xl md:text-3xl text-xl font-semibold">404</h1>
                <h2 className="lg:text-5xl md:text-3xl text-xl font-semibold">Page Not Found</h2>
                <Link to={'/'}><button className="btn bg-slate-300 font-semibold">Go Home</button></Link>
            </div> */}


            <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">Sorry, we could not find this page.</p>
                        <p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
                        <Link to={'/'} rel="noopener noreferrer"  className="px-8 py-3 font-semibold rounded  "><button className="btn bg-violet-600 text-white text-base">Back to homepage</button> </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ErrorPage;