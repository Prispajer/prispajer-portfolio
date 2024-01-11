export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-white text-center gap-10">
      <div className="flex flex-col items-center justify-center text-left mt-40 gap-10 w-1/2">
        <div className="flex flex-col text-9xl font-bold text-left mx-auto">
          <div className="text-left">WELCOME</div>
          <div className="flex items-center">PERSONAL</div>
          <div className="flex items-center">PORTFOLIO.</div>
        </div>
        <p className="text-4xl">Frontend Developer</p>
        <p>
          Welcome to my portfolio! I'm a self-taught enthusiast in the realm of
          web development. My journey into the world of programming started out
          of pure passion, and today, I strive to expand my skill set and
          deliver innovative solutions. Join me in exploring my realm of
          creativity and dedication reflected in each website I craft.
        </p>
      </div>
      <div>
        <button>View more</button>
      </div>
    </section>
  );
}
