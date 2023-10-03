import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <main className=" h-full w-full flex flex-col">
      <div
        id="logo"
        className="flex flex-row items-center justify-around font-bold text-xl"
      >
        <p> LugeTech </p>
      </div>
      <div id="profiles" className=" flex flex-col h-full w-full bg-yellow-200">
        <div
          id="profile"
          className="flex flex-row h-1/2 w-full bg-lime-200 gap-2"
        >
            <div id="profile-info" className=" flex flex-col w-5/6 gap-2 justify-between">
              <div id="info" className=" flex flex-row w-4/6">
              <div id="profile-image" className=" flex flex-col w-1/6">
                <Image className=" rounded-full"
                  src="https://avatars.githubusercontent.com/u/61248118?v=4"
                  alt="Profile Picture"
                  width={70}
                  height={70}
                />
              </div>
                <div id="profile-name" className=" flex flex-col">
                  Clint Eastman
                  <div id="profile-title">
                    Software Engineer
                  </div>
                  <div id="About">I am a software engineer with a passion for building things.</div>
                  </div>
                   {/* <div></div> empty div for info that can beb added later */}
              </div>
              <div id="github-info" className=" flex flex-row">
                Github Div
              </div>
            </div>
          <div id="badges" className=" flex flex-col min-w-1/6">
            BA
          </div>
        </div>
        <div className=" h-1/2">Projects</div>
      </div>
    </main>
  );
};

export default page;
