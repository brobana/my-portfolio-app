import NavBar from '../NavBar/NavBar';
import Logo from '../Logo/Logo';
import { Outlet } from 'react-router-dom';
import classes from './Layout.module.css';

const Layout = () => {
  return (
    <div className={classes.layout}>
      <header>
        <div className={classes['header-logo']}>
          <Logo />
        </div>
        <div className={classes['header-nav-bar']}>
          <NavBar />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>&copy; 2023 bryanobana.com</footer>
    </div>
  );
};

export default Layout;
