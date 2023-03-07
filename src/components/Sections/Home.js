import background from '../../img/road.jpg';

import classes from './Home.module.css';

const Home = () => {
  return (
    <div
      id="home"
      className={classes.home}
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: '50% 65%',
        opacity: '0.9',
      }}
    >
      <div className={classes.greeting}>
        <h1>Hi, I'm Bryan.</h1>
        <h2>Thank you for visiting my website.</h2>
      </div>
    </div>
  );
};
export default Home;
