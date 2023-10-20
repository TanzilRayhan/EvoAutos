/* eslint-disable react/prop-types */


const AllProductCard = ({ product }) => {

    const { name, brandName, type, price, rating, image, description } = product;

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure className="w-1/2"><img src={image} /></figure>
                <div className="card-body max-w-xl">
                    <div>
                        
                    </div>
                    <h2 className="card-title">{name}</h2>
                    <div className="flex gap-2">
                        <div className="badge badge-secondary">{brandName}</div>
                        <div className="badge badge-primary">{type}</div>
                    </div>

                    <div className="flex gap-2">
                    <div className="badge badge-secondary badge-outline">Price: {price}</div>
                    <div className="badge badge-primary badge-outline">Ratings: {rating}</div>
                    </div>
                   
                    <p className="mr-20">{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProductCard;