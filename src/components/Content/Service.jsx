const Service = ({service}) => {
    
    return (
        <div className={`bg-black/60 bg-blend-multiply bg-[url(${service.bgImage})] bg-cover bg-center bg-no-repeat pt-[147px] pb-[139px] pl-5 xl:pl-[116px] pr-5 xl:pr-0 text-center xl:text-left`}>
            <h3 className="text-white font-primary text-4xl leading-12 font-bold">{service.title}</h3>
            <button className="bg-primary text-white font-primary font-semibold text-base hover:bg-red-800 hover:text-white/90 duration-150 px-[30px] py-3.5 mt-7.5 md:mt-[19px]">Learn More</button>
        </div>
    );
};

export default Service;