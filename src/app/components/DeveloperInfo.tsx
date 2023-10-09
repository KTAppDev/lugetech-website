import React from 'react'
import Image from 'next/image'
import { GetGithubProfile } from '../lib/serverActions';
import BadgesPanel from './BadgesPanel';
interface developer {
  name: string,
}
export const DeveloperInfo = async (props: developer) => {
  const profile = await GetGithubProfile(props.name);
  return (
    <div id="info" className=" flex flex-row w-full p-2 rounded-md border-2 border-zinc-200 shadow-xl">
      <div id="profile-image" className=" flex flex-col sm:w-4/10 md:w-1/10 lg:w-1/10 xl:w-1/10 2xl:w-1/12  mr-2">
        <Image className=" rounded-full w-auto h-auto object-cover shadow-xl"
          src={profile.avatar_url}
          alt="Profile Picture"
          width={70}
          height={70}
        />

      </div>
      <div id="profile-name" className=" flex flex-col w-full">
        <p className="font-bold">Clint Eastman</p>
        <div id="profile-title">
          <p className="text-xs border-b-2">Full Stack Software Engineer</p>
        </div>
        <div id="About " className=" mt-2 text-xs md:text-sm tracking-tight w-full flex flex-wrap justify-start">I am a ssoftwa ssoftware engineer with a passion for building things.I asoftware engin ssoftware engineer with a passion for building things.I asoftware enginre engineer with a passion for building things.I asoftware engineer with a passion for building things.I aoftware engineer with a passion for building things.I am a software engineer with a passion for building things</div>
      </div>
      <div id="profile-badges" className=" flex flex-col w-1/6">
        <BadgesPanel />
      </div>

    </div>
  )
}
