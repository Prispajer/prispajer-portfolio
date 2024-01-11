export default function Navbar() {
  return (
    <nav className="flex flex-grow-1 items-center justify-between px-10 text-white">
      <ul className="flex gap-10 py-5">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Portfolio</li>
        <li className="cursor-pointer">Contact </li>
      </ul>
      <div className="flex flex-grow-1 justify-center">
        <p className="text-4xl">PRISPAJER</p>
      </div>
      <div className="flex flex-grow-1 justify-end">
        <button className="">Work with me</button>
      </div>
    </nav>
  );
}
