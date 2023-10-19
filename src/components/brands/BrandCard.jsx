/* eslint-disable react/prop-types */


const BrandCard = ({ brandData }) => {
    const { brandName, brandImage } = brandData;
    return (
        <div>
            <div>
                <div className="card card-compact w-full shadow-xl bg-slate-300">
                    <figure >
                        <img className="w-full p-6 h-96" src={brandImage}></img>
                    </figure>
                    <div className="flex justify-center items-center pb-5">
                        <button className="btn glass w-full text-2xl font-extrabold">{brandName}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandCard;