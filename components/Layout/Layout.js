import Footer from "./Footer";
import InfoBar from "./InfoBar";
import Navbar from "./Navbar";
import Nav from "./Nav";

const Layout = ({children}) => {
    return (
        <>
            
<InfoBar/><Nav/>
            {/* <Navbar/> */}
            {children}
            <Footer />
        </>
    );
}

export default Layout;