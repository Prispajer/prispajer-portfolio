export default function Navbar() {
  return (
    <nav className="flex items-center justify-between text-white">
      <ul className="flex gap-10 py-5 flex-1">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Portfolio</li>
        <li className="cursor-pointer">Contact </li>
      </ul>
      {/* <div className="flex flex-1 justify-center ">
        <h1 className="nickname text-4xl cursor-default	">PRISPAJER</h1>
      </div> */}
      <div className="flex flex-1 justify-end">
        <button className="bg-transparent">Work with me</button>
      </div>
    </nav>
  );
}
