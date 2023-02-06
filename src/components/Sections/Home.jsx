import classes from './Home.module.css';

const Home = () => {
  return (
    <div id="home" className={classes.home}>
      <div className={classes.greeting}>
        <h1>Hi, I'm Bryan.</h1>
        <h2>Nice to meet you!</h2>
      </div>
    </div>
  );
};
export default Home;
