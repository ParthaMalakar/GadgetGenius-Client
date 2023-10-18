import banner from '../../../src/assets/banner.jpg';

const Home = () => {
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
                            <button  className="bg-[#FF444A] text-[#FFF] py-[14px] px-7">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;