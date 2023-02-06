import classes from './NavBar.module.css';
import NavBarNarrow from './NavBarNarrow';
import NavBarWide from './NavBarWide';

const NavBar = () => {
  return (
    <div className={classes['nav-bar']}>
      <NavBarWide />
      <NavBarNarrow />
    </div>
  );
};

export default NavBar;
