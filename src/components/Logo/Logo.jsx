import { AiFillCode } from 'react-icons/ai';
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
        <AiFillCode
          color="green"
          size="1.2em"
          style={{ paddingRight: '0.1em', paddingTop: '0.1em' }}
        />
        bryanobaña
      </a>
    </div>
  );
};

export default Logo;
