import React, { useState } from 'react'
import {FaCloudMoon} from 'react-icons/fa'
import { AddTask } from '../AddTask'
import PropTypes from 'prop-types'

export const Header = ({darkMode, setDarkMode}) => {
    const [shouldShowMain, setShouldShowMain] = useState(false)
    const [showQuickAddTask, setShowQuickAddTask] = useState(false)
        return (
            <header className='header' data-testid='header'>
                <nav>
                    <div className="logo">
                        <img src="./logo192.png" alt="Todolist"/>
                    </div>
                    <div className="settings">
                        <ul>
                            <li 
                            aria-label='Quick Add Task'
                            data-testid='quick-add-task-action' className="settings__add"
                            onClick={() => {
                                setShowQuickAddTask(true);
                                setShouldShowMain (true);
                            }}
                            onKeyDown={() => {
                                setShowQuickAddTask(true);
                                setShouldShowMain (true);
                            }}
                            >+</li>
                            <li
                            onClick={() => setDarkMode(!darkMode)} 
                            data-testid='dark-mode-action'
                            aria-label='Dark mode'
                            className="settings__darkmode"><FaCloudMoon /></li>
                        </ul>
                        <h3 className='app-heading'>Todoist</h3>
                    </div>
                </nav>
                <AddTask 
                showAddTaskMain={false}
                shouldShowMain={shouldShowMain}
                showQuickAddTask={showQuickAddTask}
                setShowQuickAddTask={setShowQuickAddTask}
                />
            </header>
        )
}
//3.35
Header.propTypes =  {
    darkMode: PropTypes.bool.isRequired,
    setDarkMode: PropTypes.func.isRequired
}