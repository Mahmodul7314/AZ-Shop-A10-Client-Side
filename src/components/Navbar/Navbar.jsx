import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

const NavLinks = <>
     <li><NavLink
      to="/"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active text-red-500 font-normal lg:font-bold lg:px-4 p-2 lg:py-4  " : "font-normal lg:font-bold lg:px-4 p-2 lg:py-4 "
      }
    >
     Home
    </NavLink></li>
    <li><NavLink
      to="/addproduct"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active text-red-500 font-normal lg:font-bold lg:px-4 p-2 lg:py-4  " : "font-normal lg:font-bold lg:px-4 p-2 lg:py-4 "
      }
    >
     Add Product
    </NavLink></li>
    <li><NavLink
      to="/mycart"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active text-red-500 font-normal lg:font-bold lg:px-4 p-2 lg:py-4  " : "font-normal lg:font-bold lg:px-4 p-2 lg:py-4 "
      }
    >
     My Cart
    </NavLink></li>
   
      </>

    return (
        <div className=" w-full mx-auto">
            <div className="navbar bg-blue-200 h-32">
              <div className="w-1/2">
                <div className="navbar-start">
                  <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                      {NavLinks}
                    </ul>
                  </div>
                  <a className="btn btn-ghost normal-case text-xl"><img className="w-40 h-24" src="https://i.ibb.co/rKBwLtW/Color-logo-no-background.png" alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal px-1">
                  {NavLinks}
                  </ul>
                </div>
                </div>
                <div className="navbar-end w-1/2">
                   <div>Login</div>
                {/* { user? <> 
             <div className=" gap-2 lg:pr-6 pr-2 flex lg:flex lg:items-center">
             <p className="text-sm lg:font-bold font-normal"> {user.displayName}<br /></p>
              <div ><img className="lg:w-12 w-12 h-8 lg:h-12 rounded-full" src={user.photoURL} alt="" /></div>
              </div>
             
           <button className="btn btn-error w-16 h-4 text-black lg:font-extrabold font-normal hover:text-black hover:bg-red-500" onClick={handleLogOut} >
           <div
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active text-red-500 font-extrabold lg:px-4 px-2 lg:py-4 py-2" : " text-black font-extrabold"
           }
          >
           LogOut
           </div>
           </button>
              </>
              :
              <button className="btn btn-neutral">
              <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active text-red-500 font-extrabold px-4 py-4 pr-6" : "font-extrabold"
              }
            >
              Login
              </NavLink>
              </button>} */}
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;