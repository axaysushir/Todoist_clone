import React from 'react'
import {useProjectValue} from '../context'
import PropTyeps from 'prop-types'

export const ProjectOverlay = ({setProject, setShowProjectOverlay, showProjectOverlay}) => {
    const {projects} = useProjectValue()

    return (
        projects && showProjectOverlay && (
            <div className="project-overlay" data-testid="project-overlay">
                <ul className='project-overlay__list'>
                    {projects.map(project => (
                        <li key={project.projectId}>
                            <div
                            data-testid='project-overlay-action'
                        onClick={() => {
                            setProject(project.projectId)
                            setShowProjectOverlay(false)
                        }}
                        onKeyDown={() => {
                            setProject(project.projectId)
                            setShowProjectOverlay(false)
                        }}
                        role='button'
                        tabIndex={0} 
                        aria-label='Select the task project'
                        >
                            {project.name}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    )
}

ProjectOverlay.propTypes = {
    projects: PropTyeps.array,
}