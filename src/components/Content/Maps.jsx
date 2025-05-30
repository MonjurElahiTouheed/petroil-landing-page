// import map from '../../assets/maps.png';
import Container from '../Layout/Container';
import Flex from "../Layout/Flex";
import Title from "../Layout/Title";
const Maps = () => {
    return (
        <section>
            <div>
                {/* <img src={map} alt="#map"/> */}
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8119.898490073139!2d-122.47618973879945!3d37.733632180921326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7dc6aaaaaaab%3A0xbd1c72f99c60c295!2sThe%20Gregangelo%20Museum!5e0!3m2!1sen!2sbd!4v1748612514644!5m2!1sen!2sbd"
                className='w-full h-[450px]'></iframe>
            </div>
            <div className="bg-primary">
                <Container>
                    <Flex className='justify-between py-[47px]'>
                        <Title className="text-white text-4xl">Want to join as member branch in your area?</Title>
                        <div><button className="font-primary font-semibold text-base px-8 py-3.5 border-2 border-white text-white">CONTACT</button></div>
                    </Flex>
                </Container>
            </div>
        </section>
    );
};

export default Maps;