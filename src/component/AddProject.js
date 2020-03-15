import React, {useState} from 'react'
import {firebase} from '../firebase'
import {generatePushId} from '../helpers'
import {useProjectValue} from '../context'
import PropTypes from 'prop-types'

export const AddProject = ({shouldshow = false}) => {
    const [show, setShow] = useState(shouldshow)
    const [projectName, setProjectName] = useState()
    const projectId = generatePushId()
    const {projects, setProjects} = useProjectValue() /// get project fom firebase

    const addProject = () => projectName &&
        firebase.firestore()
        .collection('projects')
        .add({
            projectId,
            name: projectName,
            userId: 'GhIyddUBs6IpAvzrKuDh'
    })
    .then(() => {
        setProjects([...projects])
        setProjectName('')
        setShow(false)
    })

    return (
        
        <div className="add-project" data-testid='add-project'>
            {show && (
                <div className='add-project__input'>
                <input value={projectName}
                onChange={e => setProjectName(e.target.value)}
                className='add-project__name'
                data-testid='project-name'
                type='text'
                placeholder='Name your project'
                />
                <button className='add-project__submit'
                type='button'
                onClick={() => addProject()}
                data-testid='add-project-submit'>
                    Add Project
                </button>
                <span data-testid='hide-project-overlay'
                className='add-project__cancel'
                aria-label="Cancel adding project"
                onClick={() => setShow(false)}
                onKeyDown={() => setShow(false)}
                role="button"
                tabIndex={0} >Cancel
                </span>
                </div>
                
            )}
            <span className='add-project__plus'>+</span>
            <span data-testid='add-project-action'
                className='add-project__text'
                onClick={() => setShow(!show)}
                onKeyDown={() => setShow(!show)}
                role="button"
                tabIndex={0} >Add Project
            </span>
        </div>
        
    )
} 

AddProject.prototype = {
    shouldShow: PropTypes.bool
}
