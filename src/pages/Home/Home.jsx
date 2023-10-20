import { useLoaderData } from 'react-router-dom';
import banner from '../../../src/assets/banner.jpg';
import discount from '../../../src/assets/discount.jpg';
import Brand from './Brand';

const Home = () => {
    const brands = useLoaderData();

    return (
        <div>
            <div className="hero max-w-full mx-auto" style={{

                background: 'rgba(255, 255, 255, 0.7)',

                backgroundImage: `url(${banner})`,

                backgroundSize: 'cover',

                backgroundPosition: 'center',

                backgroundRepeat: 'no-repeat',

                width: '100%',

                height: '580px',

            }}>
                <div className="hero-overlay bg-opacity-90"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-white text-3xl font-bold w-96 md:w-[550px] ">Unleash Tomorrow's Innovations Today: Your Gateway to Tech Wonders, Gadgets, and Electronics Marvels!</h1>
                        <div className="mt-10">
                            <input type="text" className="border-solid border-2 border-[#DEDEDE] bg-[#FFF] py-3 pl-1 w-80" name="text" placeholder="Search Product Brand here...." />
                            <button className="bg-[#FF444A] text-[#FFF] py-[14px] px-7">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className='text-center text-3xl mt-10 font-bold'>Brands Details</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-5'>
                {
                    brands.map(brand => <Brand
                        key={brand._id} brand={brand}></Brand>)
                }
            </div>
            <div className="bg-[#F9F6] flex flex-col lg:flex-row lg:gap-20 ">
                <div className="space-y-7 flex-1 pt-8 pl-10 ">
                    <h1>Sale Offer <span className='text-red-400 text-xl'>-20% </span>Off This Week</h1>
                    <h2 className="text-2xl lg:text-4xl font-bold">
                        Featured Product Apple Accessories 2023

                    </h2>
                    <p>
                        Starting at <span className='text-xl text-red-400'>$1209.00</span>
                    </p>
                    <button className="btn bg-red-400 text-white">Shopping Now</button>
                </div>
                <div className="flex-1">
                    <img src={discount} className="md:w-full h-96" />
                </div>
            </div>
            <div data-aos="fade-up"
                data-aos-duration="3000" className='bg-[#009CDB26] mt-10'>
                <h2 className=' text-center text-4xl pt-5 font-bold '>Give Us Product Suggestion</h2>
                <div>


                    <div className="  hero min-h-screen ">

                        <div className="hero-content flex-col gap-7 lg:flex-row-reverse">
                            <div className="text-center md:w-[650px] lg:text-left">
                                <p className="py-6 text-5xl font-bold">Product Suggest that you not find in our website </p>
                                <p>Discover our handpicked selection of the latest and greatest tech gadgets and electronics. From cutting-edge smartphones to innovative smart home devices, our expert recommendations will help you stay ahead of the tech curve and make informed choices. Whether you're a tech enthusiast or a casual consumer, find the perfect product for your needs here.</p>
                            </div>
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <form className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Product Name</span>
                                        </label>
                                        <input type="text" placeholder="Product Name" className="input input-bordered" required />
                                    </div>
            
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Product Picture</span>
                                        </label>
                                        <input type="email" placeholder="Picture" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Date</span>
                                        </label>
                                        <input type="date" placeholder="Pick yor Date" className="input input-bordered" required />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Product Description</span>
                                        </label>
                                        <input type="text" placeholder="Description" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;