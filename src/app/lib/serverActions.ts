'use server'
import { profile, Repo } from "./interfaces"
const ghPinnedRepos = require('@kentaylorappdev/get-pinned-repos')

export const GetGithubProfile = async (username: string): Promise<profile> => {
  return fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .catch((err) => console.log(err))
}

export const GetGithubRepos = async (username: string): Promise<Repo[]> => {
  return fetch(`https://api.github.com/users/${username}/repos`)
    .then((res) => res.json())
    .catch((err) => console.log(err))
}


export const GetGithubPinnedRepos = async (username: string): Promise<Repo[]> => {
  const pinned = await ghPinnedRepos(username)
  const allrepos = await GetGithubRepos(username)
  
  return pinned.map((pinnedRepo:String) => {
    return allrepos.find((repo:Repo) => repo.full_name === pinnedRepo)
  })
}
