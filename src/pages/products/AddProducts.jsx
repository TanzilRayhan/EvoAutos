import Swal from "sweetalert2";


const AddProducts = () => {

    const handleAddProduct = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const description = form.description.value;


        const newProducts = { name, brandName, type, price, rating, image, description};
        console.log(newProducts);

        //send data to the server
        fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProducts),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title:"Congrats!!!",
                        text:"Product successfully inserted!!!",
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
                <div className="flex-col ">
                    <div className="text-center text-white">
                        <h1 className="text-5xl py-3 font-bold">Add Cars</h1>

                    </div>
                    <div className="w-full p-10 rounded-xl shadow-2xl bg-sky-950 mb-10">
                        <form onSubmit={handleAddProduct}>
                            <div className="flex gap-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-bold text-white">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Enter name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-bold text-white">Brand Name</span>
                                    </label>
                                    <input type="text" name="brandName" placeholder="Enter brand name" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-bold text-white">Type</span>
                                    </label>
                                    <input type="text" name="type" placeholder="Enter type" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-bold text-white">Image</span>
                                    </label>
                                    <input type="text" name="image" placeholder="Enter image url" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-bold text-white">Price</span>
                                    </label>
                                    <input type="text" name="price" placeholder="Enter price" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-bold text-white">Rating</span>
                                    </label>
                                    <input type="text" name="rating" placeholder="Enter rating" className="input input-bordered" required />
                                </div>
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-bold text-white">Short Description</span>
                                </label>
                                <input type="text" name="description" placeholder="Enter short description" className="input input-bordered w-full h-16" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover font-bold text-white pt-2">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-3">
                                <button className="btn btn-primary bg-slate-600">Submit Product</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;