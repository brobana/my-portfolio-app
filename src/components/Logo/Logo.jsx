import { AiFillCode } from 'react-icons/ai';
import classes from './Logo.module.css';

const Logo = () => {
  return (
    <div className={classes.logo}>
      <a
        href="/#home"
        target="_self"
        rel="noreferrer"
        style={{ fontWeight: '400', paddingTop: '0.1em' }}
      >
        <AiFillCode
          color="whitesmoke"
          size="1.3em"
          style={{ paddingRight: '0.1em' }}
        />
        bryanobaña
      </a>
    </div>
  );
};

export default Logo;
