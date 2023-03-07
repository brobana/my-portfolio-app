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
        <img
          src="/logo192.png"
          height="25"
          alt="logo"
          style={{ paddingRight: '0.4em', paddingTop: '0.1em' }}
        />
        bryanobaña
      </a>
    </div>
  );
};

export default Logo;
