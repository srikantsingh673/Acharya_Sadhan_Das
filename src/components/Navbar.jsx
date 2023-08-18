import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, logo, logotext } from '../assets';
import mlogo from '../assets/sadhan_das/logo.png'

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <img
            src={mlogo} // your logo comes here
            alt="logo"
            className="sm:w-[80px] sm:h-[80px] w-[45px] h-[45px] object-contain"
          />

          {/* if you have text you want besides your logo it comes here.
          Otherwise delete this if you don't need it. */}
        </Link>
        {/* mobile */}
        <ul>
        <li className={`hover:text-taupe text-[21px] font-medium font-mova
                uppercase tracking-[3px] cursor-pointer nav-links text-align: center`}>
          <a href='#about'>About</a>&nbsp;&nbsp;&nbsp;
          <a href='#contact'>Contact</a>
        </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
