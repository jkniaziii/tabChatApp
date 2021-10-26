import React, { useState } from 'react';
import Navbar from '../navbar/NavbarComponent';
import { NAV_ITEMS } from '../navbar/constants';


const Router = () => {
    const [selectedNav, setSelectedNav] = useState(NAV_ITEMS[0].nav);
  
    const handleClickNavItem = (navItem) => {
      setSelectedNav(navItem);
    };
  
    return (
      <Navbar selectedNav={selectedNav} onClickNavItem={handleClickNavItem} />
    );
  };
  
  export default Router;