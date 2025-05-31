import Container from '../Layout/Container';
import Flex from '../Layout/Flex';
import { TiChevronRight } from "react-icons/ti";

const Blog = () => {
    return (
        <section className='py-[110px] bg-[#F0F0F0]'>
            <Container>
                <Flex className="flex-col lg:flex-row justify-between gap-10">
                    <div className="pt-[75px] pb-[55.28px] bg-[url(assets/blog1.png)] px-[45px] bg-black/60 bg-blend-multiply w-[339px]">
                        <h4 className='font-primary text-2xl font-bold text-white w-[209px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h4>
                        <button className='bg-white/50 text-white mt-[52px] font-primary font-semibold text-xs px-[23px] py-[11px]'>Read more</button>
                    </div>
                    <div className="pt-[75px] pb-[55.28px] bg-[url(assets/blog1.png)] px-[45px] bg-black/60 bg-blend-multiply w-[339px]">
                        <h4 className='font-primary text-2xl font-bold text-white w-[209px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h4>
                        <button className='bg-white/50 text-white mt-[52px] font-primary font-semibold text-xs px-[23px] py-[11px]'>Read more</button>
                    </div>
                    <div className="pt-[75px] pb-[55.28px] bg-[url(assets/blog3.png)] px-[45px] bg-black/60 bg-blend-multiply w-[339px]">
                        <h4 className='font-primary text-2xl font-bold text-white w-[209px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h4>
                        <button className='bg-white/50 text-white mt-[52px] font-primary font-semibold text-xs px-[23px] py-[11px]'>Read more</button>
                    </div>
                </Flex>
                <Flex className="mt-[29px] justify-center lg:justify-end">
                    <h5 className='font-primary font-bold text-base'>MORE FROM THE BLLOG</h5><TiChevronRight size={20}/>
                </Flex>
            </Container>
        </section>
    );
};

export default Blog;