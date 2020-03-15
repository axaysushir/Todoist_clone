import React, {useState} from 'react'
import {FaTrashAlt} from 'react-icons/fa'
import {useSelectedProjectValue, useProjectValue} from '../context'
import {firebase} from '../firebase'
import PropTypes from 'prop-types'


export const IndividualProject = ({project}) => {
    const [showConfirm, setShowConfirm] = useState(false)
    const {projects, setProjects} = useProjectValue()
    const {setSelectedProject} = useSelectedProjectValue()
    // take delete confirmation from user & assign to firebase
    const deleteProject = docId => {
        firebase.firestore()
        .collection('projects')
        .doc(docId)
        .delete()
        .then(() => {
            setProjects([...projects])
            setSelectedProject('INBOX'); // refresh all
        })
    }

    return (
        <>
      <span className="sidebar__dot">•</span>
      <span className="sidebar__project-name">{project.name}</span>
      <span
        className="sidebar__project-delete"
        data-testid="delete-project"
        onClick={() => setShowConfirm(!showConfirm)}
        onKeyDown={() => setShowConfirm(!showConfirm)}
        tabIndex={0}
        role="button"
        aria-label="Confirm deletion of project"
      >
        <FaTrashAlt />
        {showConfirm && (
          <div className="project-delete-modal">
            <div className="project-delete-modal__inner">
              <p>Are you sure you want to delete this project?</p>
              <button
                type="button"
                onClick={() => deleteProject(project.docId)}
              >
                Delete
              </button>
              <span
                onClick={() => setShowConfirm(!showConfirm)}
                onKeyDown={() => setShowConfirm(!showConfirm)}
                tabIndex={0}
                role="button"
                aria-label="Cancel adding project, do not delete"
              >
                Cancel
              </span>
            </div>
          </div>
        )}
      </span>
    </>
    )
}

IndividualProject.propTypes = {
  project: PropTypes.object.isRequired,
}