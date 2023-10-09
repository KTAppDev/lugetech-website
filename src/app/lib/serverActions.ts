'use server'
export const GetGithubProfile = async (username: string) => {
  return fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .catch((err) => console.log(err))
}

export const GetGithubRepos = async (username: string) => {
  return fetch(`https://api.github.com/users/${username}/repos`)
    .then((res) => res.json())
    .catch((err) => console.log(err))
}
