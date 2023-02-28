import { Fragment } from 'react';
import Layout from './components/Layout/Layout';
import HomeSection from './components/Sections/Home';
import AboutSection from './components/Sections/About';
import ProjectsSection from './components/Sections/Projects';
import ContactSection from './components/Sections/Contact';
import ProjectPlaceholderPage from './components/Pages/ProjectPlaceholder';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Fragment>
              <HomeSection />
              <AboutSection />
              <ProjectsSection />
              <ContactSection />
            </Fragment>
          }
        />
        <Route
          path="project-placeholder"
          element={<ProjectPlaceholderPage />}
        />
      </Route>
    </Routes>
  );
};

export default App;
