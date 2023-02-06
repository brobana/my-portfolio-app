import { Link } from 'react-router-dom';
import { HiCode } from 'react-icons/hi';
import { projectItems } from './ProjectsItems';
import classes from './Projects.module.css';

const ProjectItem = (props) => {
  return (
    <div className={classes['work-items']}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <Link to={props.url}>Learn more ...</Link>
    </div>
  );
};

const Projects = () => {
  return (
    <div id="projects" className={classes.work}>
      <h1>Some of the projects I developed</h1>
      <HiCode color="green" size="5em" style={{ paddingBottom: '2em' }} />
      <div className={classes['work-container']}>
        <ProjectItem
          title={projectItems[0].title}
          description={projectItems[0].description}
          url={projectItems[0].url}
        />
        <ProjectItem
          title={projectItems[1].title}
          description={projectItems[1].description}
          url={projectItems[1].url}
        />
      </div>
    </div>
  );
};

export default Projects;
