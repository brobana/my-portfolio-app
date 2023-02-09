import Layout from './components/Layout/Layout';
import HomeSection from './components/Sections/Home';
import AboutSection from './components/Sections/About';
import ProjectsSection from './components/Sections/Projects';
import ContactSection from './components/Sections/Contact';
import WorkPage from './components/Pages/Projects/Placeholder';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <div>
              <HomeSection />
              <AboutSection />
              <ProjectsSection />
              <ContactSection />
            </div>
          }
        />
        <Route path="projects">
          <Route
            index
            path=""
            element={
              <p style={{ paddingTop: '5rem', paddingLeft: '2rem' }}>Projects Landing Page</p>
            }
          />
          <Route path="portfolio-website" element={<WorkPage />} />
          <Route path="placeholder" element={<WorkPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
