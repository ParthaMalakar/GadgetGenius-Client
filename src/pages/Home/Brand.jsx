
const Brand = ({brand}) => {
    const {name,img}=brand;
        return (
        <div>
             <div  className="card lg:w-[400px] lg:h-[400px] lg:mt-6 bg-base-100 shadow-2xl">
                <figure className="px-7 pt-5">
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