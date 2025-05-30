const Service = ({service}) => {
    
    return (
        <div className={`bg-black/60 bg-blend-multiply bg-[url(${service.bgImage})] bg-cover bg-center bg-no-repeat pt-[147px] pb-[139px] pl-[116px]`}>
            <h3 className="text-white font-primary text-4xl font-bold">{service.title}</h3>
            <button className="bg-primary text-white font-primary font-semibold text-base hover:bg-red-800 hover:text-white/90 duration-150 px-[30px] py-3.5 mt-[19px]">Learn More</button>
        </div>
    );
};

export default Service;