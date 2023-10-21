/* eslint-disable no-unused-vars */
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";


const UpdateProducts = () => {

    const product = useLoaderData();
    const { _id, name, brandName, type, price, rating, image, description } = product;


    const handleUpdateProduct = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const description = form.description.value;


       const updatedProducts = { name, brandName, type, price, rating, image, description};
        console.log(updatedProducts);

        //send data to the server
        fetch(`https://evo-autos-server-pu39k5ogs-tanzilrayhans-projects.vercel.app/products/${_id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedProducts),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if(data.modifiedCount > 0){
                    Swal.fire({
                        title:"Congrats!!!",
                        text:"Product updated successfully!!!",
                        icon: "success",
                        confirmButtonText: "Ok"
                    })
                }
            });
    };

    return (
        <div>
            <div className="hero min-h-screen spaceGrotesk"
                style={{
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1770)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="lg:flex-col ">
                    <div className="text-center text-white">
                        <h1 className="text-5xl py-3 font-bold">Update Car: {name}</h1>

                    </div>
                    <div className="w-full p-10 rounded-xl shadow-2xl bg-sky-950 mb-10">
                        <form onSubmit={handleUpdateProduct}>
                            <div className="lg:flex gap-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-bold text-white">Name</span>
                                    </label>
                                    <input type="text" name="name" defaultValue={name} placeholder="Enter name" className="input input-bordered text-slate-600" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-bold text-white">Brand Name</span>
                                    </label>
                                    <input type="text" name="brandName" defaultValue={brandName}  placeholder="Enter brand name" className="input input-bordered text-slate-600" />
                                </div>
                            </div>
                            <div className="lg:flex gap-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-bold text-white">Type</span>
                                    </label>
                                    <input type="text" name="type" defaultValue={type}  placeholder="Enter type" className="input input-bordered text-slate-600" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-bold text-white">Image</span>
                                    </label>
                                    <input type="text" name="image" defaultValue={image}  placeholder="Enter image url" className="input input-bordered text-slate-600" />
                                </div>
                            </div>
                            <div className="lg:flex gap-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-bold text-white">Price</span>
                                    </label>
                                    <input type="text" name="price" defaultValue={price}  placeholder="Enter price" className="input input-bordered text-slate-600" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-bold text-white">Rating</span>
                                    </label>
                                    <input type="text" name="rating" defaultValue={rating}  placeholder="Enter rating" className="input input-bordered text-slate-600" />
                                </div>
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-bold text-white">Short Description</span>
                                </label>
                                <input type="text" name="description" placeholder="Enter short description" className="input input-bordered w-full h-16 text-slate-600" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover font-bold text-white pt-2">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-3">
                                <button className="btn btn-primary bg-slate-600">Update Product</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProducts;