import { HiCode } from 'react-icons/hi';
import classes from './Logo.module.css';

const Logo = () => {
  return (
    <div className={classes.logo}>
      <HiCode color="green" size="1.8em" style={{ paddingRight: '0.3em' }} />
      <p>bryanobana</p>
    </div>
  );
};

export default Logo;
