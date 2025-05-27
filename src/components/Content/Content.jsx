import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
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
            <Contact></Contact>
        </div>
    );
};

export default Content;