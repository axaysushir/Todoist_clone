import React, { useState } from "react";
import { FaCloudMoon } from "react-icons/fa";
import { AddTask } from "../AddTask";
import PropTypes from "prop-types";
import logo from './icon.svg'

export const Header = ({ darkMode, setDarkMode }) => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src={logo} alt="Todolist" style={{width: '40px', backgroundColor: 'white', borderRadius: '50%'}} />
        </div>
        <div className="settings">
          <ul>
            <li
              aria-label="Quick Add Task"
              data-testid="quick-add-task-action"
              className="settings__add"
              onClick={() => {
                setShowQuickAddTask(true);
                setShouldShowMain(true);
              }}
              onKeyDown={() => {
                setShowQuickAddTask(true);
                setShouldShowMain(true);
              }}
            >
              +
            </li>
            <li
              onClick={() => setDarkMode(!darkMode)}
              data-testid="dark-mode-action"
              aria-label="Dark mode"
              className="settings__darkmode"
            >
              <FaCloudMoon />
            </li>
          </ul>
          <h2 className="app-heading">Todoist</h2>
        </div>
      </nav>
      <AddTask
        showAddTaskMain={false}
        shouldShowMain={shouldShowMain}
        showQuickAddTask={showQuickAddTask}
        setShowQuickAddTask={setShowQuickAddTask}
      />
    </header>
  );
};
//3.35
Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};
