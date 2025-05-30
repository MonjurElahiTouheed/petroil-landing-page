import Container from "../Layout/Container";
import Description from "../Layout/Description";
import Flex from "../Layout/Flex";
import Title from "../Layout/Title";
import wel1 from '../../assets/welcome1.png'
import wel2 from '../../assets/welcome2.png'
import wel3 from '../../assets/welcome3.png'
import wel4 from '../../assets/welcome4.png'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
const Welcome = () => {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     speed: 2000,
    //     autoplaySpeed: 2000,
    //     cssEase: "linear"
    // };
    return (
        <div>
            <Container>
                <Flex className="justify-around mt-[78px] mb-[100px]">
                    <Title className='text-5xl w-[289px] leading-[72px]'>The biggest
                        supplier on
                        the country</Title>
                    <Description className="w-[579px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</Description>
                </Flex>
            </Container>
            <Flex className="overflow-x-hidden justify-between">
                <img src={wel1} alt="" />
                <img src={wel2} alt="" />
                <img src={wel3} alt="" />
                <img src={wel4} alt="" />
            </Flex>
            {/* <div className="slider-container overflow-hidden">

                <Slider  {...settings}>
                    <div>
                        <img src={wel1} alt="" />
                    </div>
                    <div>
                        <img src={wel2} alt="" />
                    </div>
                    <div>
                        <img src={wel3} alt="" />
                    </div>
                    <div>
                        <img src={wel4} alt="" />
                    </div>
                </Slider>
            </div> */}
        </div>
    );
};

export default Welcome;