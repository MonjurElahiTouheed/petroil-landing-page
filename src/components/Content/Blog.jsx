import React from 'react';
import Container from '../Layout/Container';
import Flex from '../Layout/Flex';

const Blog = () => {
    return (
        <section className='py-[110px] bg-[#F0F0F0]'>
            <Container>
                <Flex className="justify-between">
                    <div className="pt-[75px] pb-[55.28px] bg-[url(assets/blog1.png)] px-[45px] bg-black/60 bg-blend-multiply w-[339px]">
                        <h4 className='font-primary text-2xl font-bold text-white w-[209px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h4>
                        <button className='bg-white/50 text-white mt-[52px] font-primary font-semibold text-xs px-[23px] py-[11px]'>Read more</button>
                    </div>
                    <div className="pt-[75px] pb-[55.28px] bg-[url(assets/blog1.png)] px-[45px] bg-black/60 bg-blend-multiply w-[339px]">
                        <h4 className='font-primary text-2xl font-bold text-white w-[209px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h4>
                        <button className='bg-white/50 text-white mt-[52px] font-primary font-semibold text-xs px-[23px] py-[11px]'>Read more</button>
                    </div>
                    <div className="pt-[75px] pb-[55.28px] bg-[url(assets/blog1.png)] px-[45px] bg-black/60 bg-blend-multiply w-[339px]">
                        <h4 className='font-primary text-2xl font-bold text-white w-[209px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h4>
                        <button className='bg-white/50 text-white mt-[52px] font-primary font-semibold text-xs px-[23px] py-[11px]'>Read more</button>
                    </div>
                </Flex>
            </Container>
        </section>
    );
};

export default Blog;