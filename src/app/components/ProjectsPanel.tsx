import React from 'react'
import { GetGithubRepos } from '../lib/serverActions';
interface project {
  developer: string,
}

const ProjectsPanel = async(props: project) => {
const repos = await GetGithubRepos(props.developer);
console.log(repos)
  return (
    <div id='projects'>Projects Panel
      <div id='projects-list' className='flex flex-col md:flex-row gap-4'>
        <div id='project'>
          <div id='project-name'>{repos[0].name}</div>
          <div id='project-description'>{repos[0].description}</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPanel
