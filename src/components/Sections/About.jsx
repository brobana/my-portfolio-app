import classes from './About.module.css';

const aboutMe = [
  "I'm a developer from Lower Sackville, Nova Scotia, Canada, with over 3 years of experience in development. I currently work for a technology consulting company in Bedford. You will find me to be confident, well-spoken, and eager to learn and explore new technologies. I have a passion for innovation and automation, and I have always enjoyed coding. As a hobby, I developed and maintain this website.",
  'Prior to moving to Canada, I gained analytical, problem-solving, and programming skills through over ten years of technical support and implementation roles on various enterprise software in some multinational companies in the Philippines, where I was able to resolve issues and deliver codes to automate manual and repetitive tasks.',
];
const About = () => {
  return (
    <div id="about" className={classes.about}>
      <h1>About</h1>
      <p>{aboutMe[0]}</p>
      <p>{aboutMe[1]}</p>
    </div>
  );
};
export default About;
