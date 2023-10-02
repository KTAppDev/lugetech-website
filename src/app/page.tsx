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
          <div>
            <div id="profile-info" className=" flex flex-col w-5/6 gap-2">
              <div id="info" className=" flex flex-row w-full">
                info Div
              </div>
              <div id="github-info" className=" flex flex-row">
                Github Div
              </div>
            </div>
          </div>
            <div id="badges" className=" flex flex-1 flex-col">
              Ba
            </div>
        </div>
        <div className=" h-1/2">Projects</div>
      </div>
    </main>
  );
};

export default page;
