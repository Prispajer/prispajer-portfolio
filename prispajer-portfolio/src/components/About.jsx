export default function About({ showMenu }) {
  return (
    <section
      className={
        showMenu
          ? "flex items-center w-full ml-80"
          : "flex items-center w-full ml-0"
      }
    >
      <div className="w-2/5 p-10 flex items-center justify-center">
        <img
          className=" logo h-[390px] rounded-full"
          src="../../public/images/avatar.png"
          alt="It's meee"
        />
      </div>
      <div className="w-3/5 h-full flex items-center flex-col p-10 ">
        <div>
          <h1 className="text-white text-9xl font-bold">Adrian Kozieł</h1>
        </div>
        <div className="text-white text-4xl  text-center max-w-[800px] flex flex-col">
          Hi, I'm Adrian, and my programming journey commenced when I undertook
          the development of a website for our family business. The process
          ignited a passion for the creative aspects of web design and
          functionality, marking the beginning of my coding adventure. Now, I'm
          continually honing my frontend skills, striving to evolve into a
          seasoned developer. Join me on this exploration of turning ideas into
          innovative web experiences!
        </div>
        <div>
          <button className="text-white">Contact me</button>
          <a className="text-white" href="">
            My projects
          </a>
        </div>
      </div>
    </section>
  );
}
