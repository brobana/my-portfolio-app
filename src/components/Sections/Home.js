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
        <h1>Hello, there!</h1>
        <h3>I'm Bryan, passionate about coding, automation, and cloud technologies.</h3>
      </div>
    </div>
  );
};
export default Home;
