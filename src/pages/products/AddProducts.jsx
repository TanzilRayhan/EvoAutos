


const AddProducts = () => {
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
                        <form className=" ">
                        <div className="flex gap-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-bold text-white">Name</span>
                                    </label>
                                    <input type="email" placeholder="Enter name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-bold text-white">Brand Name</span>
                                    </label>
                                    <input type="email" placeholder="Enter brand name" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-bold text-white">Type</span>
                                    </label>
                                    <input type="email" placeholder="Enter type" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-bold text-white">Image</span>
                                    </label>
                                    <input type="email" placeholder="Enter image url" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-bold text-white">Price</span>
                                    </label>
                                    <input type="email" placeholder="Enter price" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-bold text-white">Rating</span>
                                    </label>
                                    <input type="email" placeholder="Enter rating" className="input input-bordered" required />
                                </div>
                            </div>
                           
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-bold text-white">Short Description</span>
                                </label>
                                <textarea type="text" placeholder="Enter short description" className="input input-bordered w-full h-20" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover font-bold text-white pt-2">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-slate-600">Submit Product</button>
                            </div>

                        </form>
                        <div className="flex justify-center pb-5">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;