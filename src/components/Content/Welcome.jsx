import Container from "../Layout/Container";
import Description from "../Layout/Description";
import Flex from "../Layout/Flex";
import Title from "../Layout/Title";
import wel1 from '../../assets/welcome1.png'
import wel2 from '../../assets/welcome2.png'
import wel3 from '../../assets/welcome3.png'
import wel4 from '../../assets/welcome4.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Welcome = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 0,
        cssEase: "linear"
    };
    return (
        <div>
            <Container>
                <Flex className="flex-col lg:flex-row justify-around mt-[78px] mb-[100px] gap-5.5 lg:gap-0">
                    <Title className='text-4xl lg:text-5xl lg:w-[289px] leading-12 lg:leading-[72px] text-center lg:text-left'>The biggest
                        supplier on
                        the country</Title>
                    <Description className="px-5 lg:px-0 lg:w-[579px] text-center lg:text-left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</Description>
                </Flex>
            </Container>
            {/* <Flex className="overflow-x-hidden gap- justify-between">
                <img src={wel1} alt="#welcome" />
                <img src={wel2} alt="#welcome" />
                <img src={wel3} alt="#welcome" />
                <img src={wel4} alt="#welcome" />
            </Flex> */}
            <div className="slider-container overflow-hidden">

                <Slider {...settings}>
                    <div>
                        <img src={wel1} alt="#welcome" />
                    </div>
                    <div>
                        <img src={wel2} alt="#welcome" />
                    </div>
                    <div>
                        <img src={wel3} alt="#welcome" />
                    </div>
                    <div>
                        <img src={wel4} alt="#welcome" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Welcome;