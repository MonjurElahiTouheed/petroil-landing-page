import map from '../../assets/maps.png';
import Container from '../Layout/Container';
import Flex from "../Layout/Flex";
import Title from "../Layout/Title";
const Maps = () => {
    return (
        <section>
            <div><img src={map} alt="#map"/></div>
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