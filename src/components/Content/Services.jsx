import Description from "../Layout/Description";
import Title from "../Layout/Title";
import Service from "./Service";
// import LearnButton from "../Layout/LearnButton";
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
            <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-y-7 lg:gap-y-0">
                <div className="lg:ml-[390px]">
                    <Title className='text-5xl md:text-[64px] text-center lg:text-left'>Our Services</Title>
                    <Description className="px-5 md:px-0 lg:w-[405px] ml-3 text-center lg:text-left mt-5 lg:mt-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Description>
                </div>
                {
                    services.map(service => <Service service={service}></Service>)
                }
                {/* <div className="bg-black/60 bg-blend-multiply bg-[url(assets/service1.png)] bg-cover bg-center bg-no-repeat pt-[147px] pb-[139px] pl-[116px]">More actions
                    <h3 className="text-white font-primary text-4xl font-bold">National fuel distribution and supply.</h3>
                    <LearnButton className="px-[30px] py-3.5 mt-[19px]">Learn More</LearnButton>More actions
                </div>
                <div className="bg-black/60 bg-blend-multiply bg-[url(assets/service2.png)] bg-cover bg-center bg-no-repeat pt-[147px] pb-[139px] pl-[116px]">More actions
                    <h3 className="text-white font-primary text-4xl font-bold">Supply of national industries.</h3>
                    <LearnButton className="px-[30px] py-3.5 mt-[19px]">Learn More</LearnButton>
                </div>
                <div className="bg-black/60 bg-blend-multiply bg-[url(assets/service3.png)] bg-cover bg-center bg-no-repeat pt-[147px] pb-[139px] pl-[116px]">More actions
                    <h3 className="text-white font-primary text-4xl font-bold">Modern natural oil and gas refineries.</h3>
                    <LearnButton className="px-[30px] py-3.5 mt-[19px]">Learn More</LearnButton>
                </div> */}
            </div>
        </section>
    );
};

export default Services;