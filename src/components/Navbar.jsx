import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Serviney/logo.png';
import { AuthContext } from '../provider/AuthProvider';
import useAdminChecker from '../Hook/useAdminChecker';
const Navbar = () => {
    const {user,logout}=useContext(AuthContext)
    const [isAdmin]=useAdminChecker()
    const brandColor = 'text-[#2ecc71]';
    const highlightColor = 'text-[#3498db]';
    const textColor = 'text-gray-700 hover:text-gray-900';

    const ServineyLogo = () => (
        <div >
            
         <img src={Logo} alt="logo" />
        </div>
    );

    return (
        <div className="bg-white border-b border-gray-100 shadow-sm">
            <div className="navbar container mx-auto px-4">
                
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link to="/" className={highlightColor}>Home</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            {isAdmin&&<li><Link to="/dashboard/home">dashboard</Link></li> }
                            <li><Link to="/login" className="btn btn-primary btn-sm mt-1">Login</Link></li> 
                        </ul>
                    </div>

                    <Link to="/" className="btn btn-ghost text-xl normal-case flex items-center p-0">
                        <ServineyLogo />
                        
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-2">
                        <li><Link to="/" className={`font-medium ${highlightColor}`}>Home</Link></li>
                        <li><Link to="/services" className={textColor}>Services</Link></li>
                        <li><Link to="/products" className={textColor}>Products</Link></li>
                       {isAdmin&& <li><Link to="/dashboard/home" className={textColor}>dashboard</Link></li> }
                    </ul>
                </div>

                <div className="navbar-end w-auto">
                    <div className="text-right hidden md:block mr-4">
                        <p className="text-xs text-gray-500 mb-0 leading-none">Call Now</p>
                        <a href="tel:+12345678900" className={`text-base font-semibold tracking-wider ${brandColor}`}>
                            (+1) 234-567-8900
                        </a>
                    </div>
                   <div className='lg:block hidden'>
                    {
                        !user? <Link to="/login" className="btn btn-success text-white ">Login</Link>: <button onClick={logout} className='btn btn-error text-white'>Logout</button>
                    }
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;