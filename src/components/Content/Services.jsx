import Description from "../Layout/Description";
import Flex from "../Layout/Flex";
import Title from "../Layout/Title";
import LearnButton from "../Layout/LearnButton";
const Services = () => {
    return (
        <section className="mt-7">
            {/* <Flex className="flex-wrap">
                <div className="ml-[390px]">
                    <Title className='text-[64px]'>Our Services</Title>
                    <Description className="w-[405px] ml-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Description>
                </div>

                <img src={service1} alt="" />
                <img src={service2} alt="" />
                <img src={service3} alt="" />

            </Flex>
            <div className="flex">
                <div className="ml-[390px]">
                    <Title className='text-[64px]'>Our Services</Title>
                    <Description className="w-[405px] ml-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Description>
                </div>
                <div><img src={service1} alt="" /></div>
            </div>
            <div className="flex">
                <img src={service2} alt="" />
                <img src={service3} alt="" />
            </div> */}
            <div className="grid grid-cols-2 items-center">
                <div className="ml-[390px]">
                    <Title className='text-[64px]'>Our Services</Title>
                    <Description className="w-[405px] ml-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Description>
                </div>
                <div className="bg-black/60 bg-blend-multiply bg-[url(assets/service1.png)] pt-[147px] pb-[139px] pl-[116px]">
                    <h3 className="text-white font-primary text-4xl font-bold">National fuel distribution and supply.</h3>
                    <LearnButton className="px-[30px] py-3.5 mt-[19px]">Learn More</LearnButton>
                </div>
                <div className="bg-black/60 bg-blend-multiply bg-[url(assets/service2.png)] pt-[147px] pb-[139px] pl-[116px]">
                    <h3 className="text-white font-primary text-4xl font-bold">Supply of national industries.</h3>
                    <LearnButton className="px-[30px] py-3.5 mt-[19px]">Learn More</LearnButton>
                </div>
                <div className="bg-black/60 bg-blend-multiply bg-[url(assets/service3.png)] pt-[147px] pb-[139px] pl-[116px]">
                    <h3 className="text-white font-primary text-4xl font-bold">Modern natural oil and gas refineries.</h3>
                    <LearnButton className="px-[30px] py-3.5 mt-[19px]">Learn More</LearnButton>
                </div>
            </div>
        </section>
    );
};

export default Services;