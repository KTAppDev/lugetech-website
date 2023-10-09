import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <main className=" h-full w-full flex flex-col">
      <div
        id="logo"
        className="flex flex-row items-center justify-around font-bold text-xl"
      >
        <p> LugeTech</p>
      </div>
      <div id="profiles" className=" flex flex-col h-full w-full ">
        <div id="profile" className="flex flex-row h-1/2 w-full gap-4 ">
          <div id="profile-info" className=" flex flex-col w-full gap-4 justify-between ">
            <div id="info" className=" flex flex-row w-full p-2 rounded-md border-2 border-zinc-200 shadow-xl">
              <div id="profile-image" className=" flex flex-col sm:w-4/10 md:w-1/10 lg:w-1/10 xl:w-1/10 2xl:w-1/12  mr-2">
                <Image className=" rounded-full w-auto h-auto object-cover shadow-xl"
                  src="https://avatars.githubusercontent.com/u/61248118?v=4"
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
              {/* <div></div> empty div for info that can beb added later */}

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
