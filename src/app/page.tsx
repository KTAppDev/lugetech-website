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
      <div id="profiles" className=" flex flex-col h-full w-full ">
        <div id="profile" className="flex flex-row h-1/2 w-full gap-2 border-2 border-blue-600">
            <div id="profile-info" className=" flex flex-col w-full gap-2 justify-between rounded-md shadow-lg ">
              <div id="info" className=" flex flex-row w-full">
              <div id="profile-image" className=" flex flex-col w-2/6 md:w-1/6 mr-2">
                <Image className=" rounded-full w-auto h-auto object-cover shadow-xl "
                  src="https://avatars.githubusercontent.com/u/61248118?v=4"
                  alt="Profile Picture"
                  width={70}
                  height={70}
                />
              </div>
                <div id="profile-name" className=" flex flex-col w-full ">
                  <h1>Clint Eastman</h1>
                  <div id="profile-title">
                    Software Engineer
                  </div>
                  <div id="About" className=" text-sm tracking-tight w-full flex flex-wrap justify-start ">I am a software engineer with a passion for building things. I have a background in full stack development, but I am currently focused on front end development. I am currently working on a few projects, but I am always open to new opportunities.</div>
                  </div>
                   {/* <div></div> empty div for info that can beb added later */}

              </div>
              <div id="github-info" className=" flex flex-row">
                Github Div
              </div>
            </div>
          <div id="badges" className=" flex flex-col w-1/6 border-2 border-green-700">
            BA
          </div>
        </div>
        <div className=" h-1/2">Projects</div>
      </div>
    </main>
  );
};

export default page;
