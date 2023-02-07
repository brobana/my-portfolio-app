import classes from './Home.module.css';
import background from '../../img/road.jpg';

const Home = () => {
  return (
    <div
      id="home"
      className={classes.home}
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: '0% 90%',
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
