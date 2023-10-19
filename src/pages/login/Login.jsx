/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {

  const {signIn} = useContext(AuthContext);
  const {googleSignIn} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
    console.log(email, password);
    signIn(email, password, photo)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        Swal.fire('Invalid Email/Password/ Try again!!!')
      });
  };



  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen spaceGrotesk"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1770)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content flex-col ">
          <div className="text-center text-white">
            <h1 className="text-5xl py-5 font-bold">Login now!</h1>
        
          </div>
          <div className="card flex-shrink-0 w-96 max-w-md shadow-2xl bg-sky-950">
            <form onSubmit={handleLogin} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold text-white">Email</span>
                </label>
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
              <div>
                <p className="text-red-500 font-bold">{error}</p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-slate-600">Login</button>
              </div>
              <p className="text-white">
              Do not have an account? Please{" "}
              <Link to="/register">
              <button className="btn-link font-bold">Register</button>
              </Link>
            </p>
            </form>
            <div className="flex justify-center pb-5">
            <button onClick={handleGoogle} className="btn">
              <img
                className="w-5"
                src="https://i.ibb.co/b2CSKK1/Pik-Png-com-google-icon-png-344234.png "
                alt=""
              />
              Sign in with Google
            </button>
          </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;