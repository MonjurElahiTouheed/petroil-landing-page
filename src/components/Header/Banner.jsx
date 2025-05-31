import Container from "../Layout/Container";

const Banner = () => {
    return (
        <div className="text-center lg:text-left bg-[url(assets/banner.png)] bg-cover bg-[-32rem] sm:bg-center bg-no-repeat py-32 lg:py-[258px] bg-black/60 bg-blend-multiply lg:px-5 xl:px-0">
            <Container>
                <h1 className="text-white text-[34px] px-3 lg:px-0 lg:text-[64px] font-bold font-primary lg:w-[842px]">We exist since 1975 on the oil and gas industry.</h1>
            <button className="bg-primary hover:bg-red-800 hover:text-white/90 px-[30px] lg:px-[41px] mt-[31px] py-3 lg:py-3.5 text-white font-primary font-semibold text-sm lg:text-base duration-150">LEARN MORE</button>
            </Container>
        </div>
    );
};

export default Banner;