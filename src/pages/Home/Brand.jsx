
const Brand = ({brand}) => {
    const {name,img}=brand;
        return (
        <div>
             <div data-aos="fade-down-right" className="card w-[400px] h-[400px] md:mt-16 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl h-[300px] w-[350px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                   
                </div>
            </div>
        </div>
    );
};

export default Brand;