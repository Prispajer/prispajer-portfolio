import React from "react";
import { FiGithub } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";

export default function Sidebar() {
  const [isHidden, setIsHidden] = React.useState(false);

  const handleView = () => {
    setIsHidden(window.innerWidth < 1130);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleView);
    handleView();

    return () => window.removeEventListener("resize", handleView);
  }, []);

  return (
    <aside
      className={
        isHidden
          ? "sidebar bottom-0 left-0 w-[100vw] max-h-[100px] bg-primary fixed border-0 p-2"
          : "sidebar top-[40%] left-0 rounded-tr-[20px] rounded-br-[20px] min-w-[80px] min-h-[280px] bg-primary fixed "
      }
    >
      <div
        className={
          isHidden
            ? "flex flex-row justify-center gap-10"
            : "flex justify-between items-center flex-col my-10 gap-10"
        }
      >
        <a href="https://github.com/Prispajer">
          <FiGithub className="text-black" size="40px" />
        </a>
        <a href="https://www.facebook.com/adikoxi/?locale=pl_PL">
          <FaFacebookF className="text-black" size="40px" />
        </a>
        <a href="https://www.instagram.com/adi.koziel.98/">
          <FiInstagram className="text-black" size="40px" />
        </a>
      </div>
    </aside>
  );
}
