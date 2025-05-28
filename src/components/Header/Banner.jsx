import Container from "../Layout/Container";

const Banner = () => {
    return (
        <div className="bg-[url(assets/banner.png)] py-[258px] bg-black/60 bg-blend-multiply">
            <Container>
                <h1 className="text-white text-[64px] font-bold font-primary w-[842px]">We exist since 1975 on the oil and gas industry.</h1>
            <button className="bg-primary px-[41px] mt-[31px] py-3.5 text-white font-primary font-semibold text-base">LEARN MORE</button>
            </Container>
        </div>
    );
};

export default Banner;