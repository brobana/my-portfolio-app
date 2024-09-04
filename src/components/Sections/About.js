import { FcAbout } from 'react-icons/fc';
import myPicture from '../../img/me.jpg';

import classes from './About.module.css';

const aboutMe = [
  "I am an application developer with over four years of experience, based in Lower Sackville, Nova Scotia, Canada. I am articulate, self-assured, and eager to explore and experiment with new technology. Coding has always been a passion of mine, and I am deeply interested in automation and innovation.",
  'Before moving to Canada, I spent over ten years in technical support and implementation roles for enterprise software in multinational companies in the Philippines. During this time, I honed my analytical, problem-solving, and programming skills by resolving issues and automating manual tasks. This experience laid the foundation for my transition into development.',
  'Looking ahead, I am eager to further advance my full-stack development capabilities, particularly in cloud-based technologies like AWS. I am passionate about contributing to innovative projects that leverage automation and cutting-edge technology, and I am always on the lookout for opportunities that will allow me to grow and make a significant impact.',
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
