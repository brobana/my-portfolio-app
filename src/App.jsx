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
        <Route path="tools">
          <Route index path="" element={<p>Tools Landing Page</p>} />
          <Route path="tool-one" element={<WorkPage />} />
          <Route path="tool-two" element={<WorkPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
