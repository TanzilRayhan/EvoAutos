import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Clients from "../../components/sections/Clients";
import WhyUs from "../../components/sections/WhyUs";
//import Slider from "../../components/slider/Slider";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <WhyUs></WhyUs>
            <Clients></Clients>
            <Footer></Footer>
        </div>
    );
};

export default Home;