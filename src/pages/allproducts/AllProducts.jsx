import { useLoaderData } from "react-router-dom";
import AllProductCard from "./AllProductCard";


const AllProducts = () => {

    const allProducts = useLoaderData();

    return (
        <div className="max-w-5xl mx-auto mb-10">
            <h1 className="text-5xl font-extrabold text-center p-10">Total Products: {allProducts.length}</h1>
            <div className="grid grid-cols-1 px-5 gap-4">
            {
                allProducts.map(product => <AllProductCard key={product._id} product={product}></AllProductCard>)
            }
            </div>
        </div>
    );
};

export default AllProducts;