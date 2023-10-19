


const AddProducts = () => {
    return (
        <div>
            <div className="hero min-h-screen spaceGrotesk"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1770)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content flex-col ">
          <div className="text-center text-white">
            <h1 className="text-5xl py-5 font-bold">Add Cars</h1>
        
          </div>
          <div className="card  shadow-2xl bg-sky-950">
            <form className="card-body ">
              <div className="form-control md:w-1/2">
                <div className="flex">
                <label className="label">
                  <span className="label-text text-xl font-bold text-white">Email</span>
                </label>
                <input type="email" placeholder="Enter email" className="input input-bordered" required />
                <label className="label">
                  <span className="label-text text-xl font-bold text-white">Email</span>
                </label>
                </div>
                
                <input type="email" placeholder="Enter email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold text-white">Password</span>
                </label>
                <input type="password" placeholder="Enter password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover font-bold text-white pt-2">Forgot password?</a>
                </label>
              </div>
            
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-slate-600">Login</button>
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