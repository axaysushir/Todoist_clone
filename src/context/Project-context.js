import React, {createContext, useContext} from 'react'
import {useProjects} from '../hooks'

//1.36
export const ProjectsContext = createContext()
export const ProjectsProvider = ({children}) => {
    const  {projects, setProjects} = useProjects();

    return (
        <ProjectsContext.Provider value={{projects, setProjects}}>
            {children}
        </ProjectsContext.Provider>
    )
}

export const useProjectValue = () => useContext(ProjectsContext)