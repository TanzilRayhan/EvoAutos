import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BrandContainer from "./BrandConteiner";

const Brands = () => {

  const [brand, setBrand] = useState()

  const {brandName} = useParams();

  const brands = useLoaderData();

  useEffect(() =>{
    const findBrand = brands?.find (brand=>brand.brandName === brandName)
    setBrand(findBrand);
    console.log(findBrand);
  }, [brandName, brands])


  return (
    <div className=" max-w-7xl my-10 mx-auto">
        <BrandContainer brand={brand}></BrandContainer>
    </div>
  );
};

export default Brands;
