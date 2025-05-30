import Description from "../Layout/Description";
import Title from "../Layout/Title";
import Service from "./Service";
const Services = () => {
    const services = [
        {
            bgImage: "assets/service1.png",
            title: "National fuel distribution and supply."
        },
        {
            bgImage: "assets/service2.png",
            title: "Supply of national industries."
        },
        {
            bgImage: "assets/service3.png",
            title: "Modern natural oil and gas refineries."
        }
    ]
    return (
        <section className="mt-7">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="md:ml-[390px]">
                    <Title className='text-5xl md:text-[64px] text-center md:text-left'>Our Services</Title>
                    <Description className="px-5 md:px-0 md:w-[405px] ml-3 text-center md:text-left mt-5 md:mt-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Description>
                </div>
                {
                    services.map(service => <Service service={service}></Service>)
                }
            </div>
        </section>
    );
};

export default Services;