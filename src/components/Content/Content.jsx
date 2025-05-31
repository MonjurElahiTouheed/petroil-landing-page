import About from "./About";
import Blog from "./Blog";
import Maps from "./Maps";
import Services from "./Services";
import Welcome from "./Welcome";

const Content = () => {
    return (
        <div>
            <Welcome></Welcome>
            <Services></Services>
            <About></About>
            <Blog></Blog>
            <Maps></Maps>
        </div>
    );
};

export default Content;