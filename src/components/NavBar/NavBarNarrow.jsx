import { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import NavBarItems from './NavBarItems';

import classes from './NavBarNarrow.module.css';

const NavBarNarrow = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  const navOpen = <MdMenu size="2em" onClick={navOpenHandler} />;
  const navClose = <MdClose size="2em" onClick={navOpenHandler} />;

  return (
    <div className={classes['nav-bar-narrow']}>
      <div className={classes['hamburger-items']}>
        {isOpen && (
          <NavBarItems
            onSetIsOpen={() => {
              setIsOpen(false);
            }}
          />
        )}
      </div>
      <div className={classes['hamburger-btn']}>
        {!isOpen ? navOpen : navClose}
      </div>
    </div>
  );
};

export default NavBarNarrow;
