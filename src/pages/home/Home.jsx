import { useLoaderData } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import Clients from "../../components/sections/Clients";
import WhyUs from "../../components/sections/WhyUs";
import BrandCard from "../../components/brands/BrandCard";

const Home = () => {
    const brandData = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <WhyUs></WhyUs>

            <div className="max-w-7xl mx-auto">
                <div>
                    <h1 className="text-4xl lg:text-5xl font-bold my-20 text-center text-slate-500">Car Brands</h1>
                </div>
                <div className="grid mx-5 lg:mx-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {brandData.map((brand) => (
                        <BrandCard key={brand.id} brandData={brand}></BrandCard>
                    ))}
                </div>
            </div>

            <Clients></Clients>
        </div>

    );
};

export default Home;