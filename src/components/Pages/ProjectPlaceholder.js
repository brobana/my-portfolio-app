import { useNavigate } from 'react-router-dom';
import classes from './ProjectPlaceholder.module.css';

const Placeholder = () => {
  const navigate = useNavigate();
  const goBackHandler = () => {
    navigate(-1);
  };
  return (
    <div className={classes.placeholder}>
      <h1>Future projects</h1>
      <p>Thank you for taking the time to look over my work!</p>
      <p>
        I enjoy spending my free time learning and experimenting. I will
        continue to include my personal projects in my portfolio.
      </p>
      <p>Please check back later.</p>
      <button onClick={goBackHandler} className={classes.button}>
        Back
      </button>
    </div>
  );
};

export default Placeholder;
