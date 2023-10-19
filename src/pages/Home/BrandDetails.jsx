import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";
import NoProduct from "./NoProduct";

const BrandDetails = () => {
    const {name} = useParams();
    const allProducts = useLoaderData();
    const brandProducts = allProducts.filter(pro => pro.brandName == name);
    return (
        <div>
             <div data-aos="zoom-in" className=" carousel w-full lg:h-[550px] mb-7 bg-[#E76F511A]">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="flex flex-col lg:flex-row lg:gap-20 p-4 lg:p-24">
            <div className="space-y-7 flex-1">
              <h2 className="text-2xl lg:text-6xl font-bold">
              SmartHome Guardian
              </h2>
              <p>
              The SmartHome Guardian is your ultimate security solution. Monitor and protect your home with cutting-edge technology, real-time alerts, and remote access. Keep your loved ones safe and secure 24/7.
              </p>
              <button className="btn bg-red-400 text-white">Purchase Now</button>
            </div>
            <div className="flex-1">
              <img src="https://i.ibb.co/vvT6dNy/2499813-345264-PB0-M8-X-534.jpg" className="md:w-full lg:w-[500px] lg:h-[400px]" />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <div className="flex flex-col lg:flex-row lg:gap-20 p-4 lg:p-24">
            <div className="space-y-7 flex-1">
              <h2 className="text-2xl lg:text-6xl font-bold">
              EcoGlow Solar Lantern
              </h2>
              <p>
              Light up your outdoor spaces with our EcoGlow Solar Lantern. Harness the power of the sun to create a warm and inviting ambiance in your garden or patio. Sustainable, energy-efficient, and beautiful.
              </p>
              <button className="btn bg-red-400 text-white">Purchase Now</button>
            </div>
            <div className="flex-1 ">
              <img src="https://i.ibb.co/MfLNTfC/Screenshot-2023-10-19-113552.png" className=" md:w-full lg:w-[500px] lg:h-[400px]" />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="flex flex-col lg:flex-row lg:gap-20 p-4 lg:p-24">
            <div className="space-y-7 flex-1">
              <h2 className="text-2xl lg:text-6xl font-bold">
              TechTrek Wireless Earbuds

              </h2>
              <p>
              Experience unparalleled audio quality with our TechTrek Wireless Earbuds. Enjoy crystal-clear sound, comfortable fit, and seamless connectivity. Elevate your music and calls on the go              </p>
              <button className="btn bg-red-400 text-white">Purchase Now</button>
            </div>
            <div className="flex-1">
              <img src="https://i.ibb.co/m8vb6NW/9374836.png" className="md:w-full lg:w-[500px] lg:h-[400px]" />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
        
      </div>
      
      {brandProducts.length >0 ?<div className="grid grid-cols-2 gap-5">
        { brandProducts.map(product => <Product key={product._id} product={product}></Product>)}
        </div>

      :<NoProduct></NoProduct>}
        </div>
    );
};

export default BrandDetails;