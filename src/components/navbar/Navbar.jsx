/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useTheme from "../../theme/useTheme";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
      logOut();
  };
  const { toggleTheme } = useTheme();

  const navLinks = (
    <>
      <li><NavLink className="font-bold" to="/">Home</NavLink></li>
      <li><NavLink className="font-bold" to="/allProducts">All Products</NavLink></li>
      <li><NavLink className="font-bold" to="/addProducts">Add Products</NavLink></li>
      <li><NavLink className="font-bold" to="/updateProducts">Update Products</NavLink></li>
    </>
  )

  return (
    <div className="max-w-7xl spaceGrotesk mx-auto">
        <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl"><img className="w-40" src="./../../../public/EVOAUTOS.png" alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
  {/* <button onClick={toggleTheme}>Change Theme</button> */}
  <div className="flex justify-center">
   {/* <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div> */}
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://i.ibb.co/7N6yJY6/User.png" />
        </div>
      </label>
       
      <ul tabIndex={0} className="flex items-center justify-center dropdown-content mt-3 z-[1] rounded-box">
      {user ? (
                    <button onClick={handleSignOut} className="w-40 p-3 rounded-md glass bg-slate-400 font-bold ">
                        Sign Out
                    </button>
                ) : (
                 
                    <Link to="/login">
                        <button className="w-40 p-3 rounded-md glass bg-slate-400 font-bold ">Login</button>
                    </Link>
                )}
      </ul>
    </div>
  </div>
  </div>
</div>
      </div>
  );
};

export default Navbar;
