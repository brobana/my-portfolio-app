import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

import classes from './Contact.module.css';

const onClickHandler = (url) => {
  return () => window.open(url, '_blank');
};

const Contact = () => {
  return (
    <div id="contact" className={classes.contact}>
      <FaLinkedin
        color="white"
        size="3em"
        onClick={onClickHandler(
          'https://linkedin.com/in/bryan-obana-94638a265'
        )}
      />
      <FaGithubSquare
        color="white"
        size="3em"
        onClick={onClickHandler('https://github.com/brobana')}
      />
    </div>
  );
};
export default Contact;
