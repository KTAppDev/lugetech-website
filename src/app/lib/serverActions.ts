'use server'
import { profile, Repo } from './interfaces'
export const GetGithubProfile = async (username: string):Promise<profile> => {
  return fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .catch((err) => console.log(err))
}

export const GetGithubRepos = async (username: string): Promise<Repo> => {
  return fetch(`https://api.github.com/users/${username}/repos`)
    .then((res) => res.json())
    .catch((err) => console.log(err))
}
