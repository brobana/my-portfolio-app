import NavBarItems from './NavBarItems';

import classes from './NavBarWide.module.css';

const NavBarWide = () => {
  return (
    <div className={classes['nav-bar-wide']}>
      <NavBarItems onSetIsOpen={() => {}} />
    </div>
  );
};

export default NavBarWide;
