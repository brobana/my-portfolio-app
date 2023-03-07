import NavBarNarrow from './NavBarNarrow';
import NavBarWide from './NavBarWide';

import classes from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className={classes['nav-bar']}>
      <NavBarWide />
      <NavBarNarrow />
    </div>
  );
};

export default NavBar;
