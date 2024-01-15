import { FiGithub } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";

export default function Sidebar() {
  return (
    <aside className="fixed min-w-[80px] min-h-[300px] top-[40%] left-0 bg-white rounded-tr-[20px] rounded-br-[20px]">
      <div className="flex justify-between items-center flex-col my-10 gap-10">
        <a href="https://github.com/Prispajer">
          <FiGithub className="cursor-pointer" size="50px" />
        </a>
        <a href="https://www.facebook.com/adikoxi/?locale=pl_PL">
          <FaFacebookF className="cursor-pointer" size="50px" />
        </a>
        <a href="https://www.instagram.com/adi.koziel.98/">
          <FiInstagram className="cursor-pointer" size="50px" />
        </a>
      </div>
    </aside>
  );
}
