import Banner from "./Banner";
import Navbar from "./Navbar";
import Topbar from "./Topbar";

const Header = () => {
    return (
        <>
            <Topbar></Topbar>
            <Navbar></Navbar>
            <Banner></Banner>
        </>
    );
};

export default Header;