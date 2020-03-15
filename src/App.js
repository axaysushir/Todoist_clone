import React,{useState} from "react";
import {Header} from "./component/layout/Header";
import { Content } from "./component/layout/Content";
import PropTypes from 'prop-types'
import { ProjectsProvider, SelectedProjectProvider } from "./context";
// import Auth from './Auth'

const App = ({ darkModeDefault = false }) => {
  const [darkMode, setDarkMode] = useState(darkModeDefault)
  return (
    <SelectedProjectProvider>
      
      <ProjectsProvider>
        <main data-testid='application'
        className={darkMode ? 'darkmode' : undefined} >
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Content />
          </main>
      </ProjectsProvider>
      
    </SelectedProjectProvider>
  );
};

export default App;

App.propTypes = {
  darkModeDefault: PropTypes.bool
}