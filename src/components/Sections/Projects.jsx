import { Link } from 'react-router-dom';
import { HiCode } from 'react-icons/hi';
import { projectData } from './ProjectsData';

import classes from './Projects.module.css';

const ProjectItem = (props) => {
  return (
    <div className={classes['project-items']}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <Link to={props.url} target={props.openNewTab ? "_blank" : "_self"}>{props.word}</Link>
    </div>
  );
};

const Projects = () => {
  return (
    <div id="projects" className={classes.project}>
      <h1>Some of the projects I developed</h1>
      <HiCode color="green" size="5em" style={{ paddingBottom: '2em' }} />
      <div className={classes['project-container']}>
        {projectData.map((item, index) => {
          return (
            <ProjectItem
              key={index}
              title={item.title}
              description={item.description}
              url={item.url}
              word={item.word}
              openNewTab={item.openNewTab}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
