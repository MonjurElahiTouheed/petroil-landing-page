import React from 'react';
import Container from '../Layout/Container';
import Flex from '../Layout/Flex';

const Blog = () => {
    return (
        <section className='py-[110px] bg-[#F0F0F0]'>
            <Container>
                <Flex className="justify-between">
                    <div className="pt-[75px] pb-[55px]">
                        <h4 className='font'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h4>
                    </div>
                </Flex>
            </Container>
        </section>
    );
};

export default Blog;