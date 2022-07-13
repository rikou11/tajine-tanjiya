import Footer from "./Footer";
import InfoBar from "./InfoBar";
import Navbar from "./Navbar";

const Layout = ({children}) => {
    return (
        <>
            
<InfoBar/>
            <Navbar/>
            {children}
            <Footer />
        </>
    );
}

export default Layout;