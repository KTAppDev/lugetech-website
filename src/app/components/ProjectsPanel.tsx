import React from 'react'
import { GetGithubRepos, GetGithubPinnedRepos } from '../lib/serverActions';
interface project {
  developer: string,
}

const ProjectsPanel = async(props: project) => {
  const repos = await GetGithubPinnedRepos(props.developer);
  console.log(repos) //just to test if the data is being fetched
  return (
    <div id='projects'>Projects Panel
      <div id='projects-list' className='flex flex-col md:flex-row gap-4 hover:bg-sky-600'>
        <div id='project'>
          <a href={repos[1].html_url} target='_blank' rel='noreferrer'>
            <div id='project-name'>{repos[1].name}</div>
            <div id='project-description'>{repos[1].description}</div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPanel
