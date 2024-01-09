import React from "react";

export default function About() {
  return (
    <section className={"flex items-center lg:ml-80 ml-0 w-full mx-10"}>
      <div className="w-1/2">
        <img
          className="max-h-64"
          src="../../public/images/avatar.png"
          alt="It's meee"
        />
      </div>
      <div className="flex items-center flex-col w-1/2 ">
        <div className="">
          <h1>Adrian Kozieł</h1>
        </div>
        <div className="">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
          reprehenderit voluptate mollitia at libero! Quisquam commodi magni,
          incidunt omnis molestias sint facere vel reiciendis ratione dolor at,
          deserunt, adipisci est!
        </div>
        <div className="">
          <button>Contact me</button>
          <a href="">My projects</a>
        </div>
      </div>
    </section>
  );
}
