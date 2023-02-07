import { HiCode } from 'react-icons/hi';
import classes from './Logo.module.css';

const Logo = () => {
  return (
    <div className={classes.logo}>
      <a
        href="/#home"
        target="_self"
        rel="noreferrer"
        style={{ fontWeight: '400' }}
      >
        <HiCode color="green" size="1.2em" style={{ paddingRight: '0.2em', paddingTop: '0.2em' }} />
        bryanobaña
      </a>
    </div>
  );
};

export default Logo;
