export default function Skills() {
  return (
    <section className="flex items-center w-full ">
      <div className="w-3/5 p-10 flex items-center justify-center flex-col">
        <div>
          <h1 className="text-white text-9xl font-bold">My skills</h1>
        </div>
        <div className="text-white text-4xl  text-center max-w-[800px] flex flex-col">
          I work on the lot of projects. From simple to more advanced
          applications.
        </div>
      </div>
      <div className="w-2/5 h-full flex items-center flex-col p-10 ">
        <div className="text-white text-4xl  text-center max-w-[800px] flex flex-col">
          tu będzie grid
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
