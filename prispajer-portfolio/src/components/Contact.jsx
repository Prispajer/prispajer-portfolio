import { useState } from "react";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import useClipboard from "react-use-clipboard";

export default function Contact({ contactRef }) {
  const [email, setEmail] = useState("koziel.adrian98@gmail.com");
  const [isCopied, setCopied] = useClipboard(email, { successDuration: 2000 });

  const handleCopyEmail = () => {
    setCopied();
  };

  return (
    <section
      ref={contactRef}
      className="flex flex-col items-center justify-center mt-10 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xxl:max-w-[1320px] xl:max-w-[1140px] mx-auto h-[90vh]"
    >
      <div>
        <h2 className="text-3xl text-white font-bold">Contact</h2>
      </div>
      <div className="flex items-center space-x-4 mt-4">
        <button
          onClick={handleCopyEmail}
          className="bg-blue-500 text-white px-4 py-2 "
        >
          {isCopied ? "Email Copied!" : "Copy Email"}
        </button>
      </div>
    </section>
  );
}
