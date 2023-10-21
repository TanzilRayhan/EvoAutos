/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const BrandCard = ({brandData}) => { 
    const {brandName, brandImage } = brandData;
    return (
        <div>
            <div>
                <div className="card card-compact w-full shadow-xl bg-slate-300">
                    <figure >
                        <img className="w-full p-6 h-96" src={brandImage}></img>
                    </figure>
                    <div className="flex justify-center items-center pb-5">
                        <Link className="btn glass w-full " to={`/brands/${brandName}`}>
                        <button className="text-3xl text-slate-500 font-extrabold">{brandName}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandCard;