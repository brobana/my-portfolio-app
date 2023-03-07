import { FcAbout } from 'react-icons/fc';
import myPicture from '../../img/me.jpg';

import classes from './About.module.css';

const aboutMe = [
  "I'm an application developer with more than three years of experience from Lower Sackville, Nova Scotia, Canada. I'm currently employed with IBM Canada in Bedford, Nova Scotia. You'll discover that I'm articulate, self-assured, and ready to learn about and experiment with new technology. I've always loved coding, and I'm passionate about automation and innovation.",
  'I spent over ten years in technical support and implementation roles on various enterprise software in some multinational companies in the Philippines, where I was able to analyze and resolve problems, and deliver codes to automate manual and repetitive work. This experience helped me develop my analytical, problem-solving, and programming skills before moving to Canada.',
];

const About = () => {
  return (
    <div id="about" className={classes.about}>
      <h1>About Me</h1>
      <FcAbout size="5em" style={{ paddingBottom: '2em' }} />
      <div className={classes.container}>
        <img src={myPicture} alt="It's me. Bryan." style={{ width: '14em' }} />
        <div className={classes.text}>
          {aboutMe.map((text, index) => {
            return <p key={index}>{text}</p>;
          })}
        </div>
      </div>
      <div
        style={{
          borderBottom: '1px lightgray solid',
          width: '100%',
          paddingBottom: '3em',
        }}
      ></div>
    </div>
  );
};
export default About;
