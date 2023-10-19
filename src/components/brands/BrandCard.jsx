/* eslint-disable react/prop-types */


const BrandCard = ({ brandData }) => {
    const { brandName, brandImage } = brandData;
    return (
        <div>
            <div>
                <div className="card card-compact w-full shadow-xl bg-slate-200">
                    <figure >
                        <img className="w-full p-4 h-96" src={brandImage}></img>
                    </figure>
                    <div className="card-body">

                        <h2 className="card-title">{brandName}</h2>
                       
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandCard;