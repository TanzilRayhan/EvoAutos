/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {

  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, email, password);

    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
      setError("Minimum six characters, at least one letter and one number");
      Swal.fire({
        title:"Error!!!",
        text:"Minimum six characters, at least one letter and one number",
        icon: "error",
        confirmButtonText: "Ok"
    })
    }

    
    createUser(email, password,)
    .then((result) => {
      console.log(result.user);
      navigate(location?.state ? location.state : "/");
    })
    .catch((error) => {
      console.error(error);
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
        <div className="hero-content flex-col ">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold py-5">Register now!</h1>

          </div>
          <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-sky-950">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold text-white">Full Name</span>
                </label>
                <input type="name" name="name" placeholder="Enter name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold text-white">Email</span>
                </label>
                <input type="email" name="email" placeholder="Enter email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold text-white">Password</span>
                </label>
                <input type="password" name="password" placeholder="Enter password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover font-bold text-white pt-2">Forgot password?</a>
                </label>
              </div>
              <div>
              <p className="text-red-500 font-bold"></p>
              <div>
              <p className="text-red-500 font-bold">{error}</p>
              </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-slate-600">Register</button>
              </div>
              <p className="text-white">
              Already Have an Account? Please{" "}
              <Link to="/login">
                <button className="btn-link font-bold">Login</button>
              </Link>
            </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;