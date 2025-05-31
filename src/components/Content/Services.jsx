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
            <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-y-7 xl:gap-y-0 lg:place-items-stretch">
                <div className="xl:justify-self-end xl:self-center xl:mr-[149px]">
                    <Title className='text-5xl xl:text-[64px] text-center xl:text-left'>Our Services</Title>
                    <Description className="px-5 md:px-0 xl:w-[405px] ml-3 text-center xl:text-left mt-5 xl:mt-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Description>
                </div>
                {
                    services.map(service => <Service service={service}></Service>)
                }
            </div>
        </section>
    );
};

export default Services;