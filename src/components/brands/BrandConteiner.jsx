
import Slider from "../slider/Slider"


const BrandContainer = ({ brand }) => {
    const { name, brandName, type, price, rating, image, description } = brand || {};
    return (
        <div>
            <Slider></Slider>
            <div className="card card-side my-10 flex flex-col lg:flex-row bg-slate-300 shadow-xl">
                <figure className="lg:w-1/2 px-5"><img src={image} /></figure>
                <div className="flex flex-col lg:flex-row justify-center py-10 items-center ml-10 max-w-xl">
                    <div>
                        <h2 className="card-title text-3xl font-bold">{name}</h2>
                        <div className="flex pt-2 gap-2">
                            <div className="badge badge-secondary font-extrabold">{brandName}</div>
                            <div className="badge badge-primary">{type}</div>
                        </div>

                        <div className="flex py-2 gap-2">
                            <div className="badge badge-secondary badge-outline font-extrabold">Price: {price}</div>
                            <div className="badge badge-primary badge-outline font-bold">Ratings: {rating}</div>
                        </div>

                        <p className="mr-20 font-semibold text-lg">{description}</p>
                        <div>
                            
                            <button className="btn mt-5 text-slate-900 bg-slate-400" onClick={() => document.getElementById('my_modal_2').showModal()}>Add to Cart</button>
                            <dialog id="my_modal_2" className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-center text-3xl">Congratulations!!!</h3>
                                    <p className="py-4 text-center text-lg">Product Added to Cart Successfully</p>
                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandContainer;