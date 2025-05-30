import Description from "../Layout/Description";
import Title from "../Layout/Title";
import LearnButton from "../Layout/LearnButton";
const Services = () => {
    return (
        <section className="mt-7">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="md:ml-[390px]">
                    <Title className='text-[64px]'>Our Services</Title>
                    <Description className="w-[405px] ml-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Description>
                </div>
                <div className="bg-black/60 bg-blend-multiply bg-[url(assets/service1.png)] bg-cover bg-center bg-no-repeat pt-[147px] pb-[139px] pl-[116px]">
                    <h3 className="text-white font-primary text-4xl font-bold">National fuel distribution and supply.</h3>
                    <LearnButton className="px-[30px] py-3.5 mt-[19px]">Learn More</LearnButton>
                </div>
                <div className="bg-black/60 bg-blend-multiply bg-[url(assets/service2.png)] bg-cover bg-center bg-no-repeat pt-[147px] pb-[139px] pl-[116px]">
                    <h3 className="text-white font-primary text-4xl font-bold">Supply of national industries.</h3>
                    <LearnButton className="px-[30px] py-3.5 mt-[19px]">Learn More</LearnButton>
                </div>
                <div className="bg-black/60 bg-blend-multiply bg-[url(assets/service3.png)] bg-cover bg-center bg-no-repeat pt-[147px] pb-[139px] pl-[116px]">
                    <h3 className="text-white font-primary text-4xl font-bold">Modern natural oil and gas refineries.</h3>
                    <LearnButton className="px-[30px] py-3.5 mt-[19px]">Learn More</LearnButton>
                </div>
            </div>
        </section>
    );
};

export default Services;