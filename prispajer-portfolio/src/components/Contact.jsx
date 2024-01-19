import { useState } from "react";
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
      className="screens flex flex-col items-center justify-center mt-10 mx-auto min-h-[90vh]"
    >
      <div className="mb-10">
        <h2 className="text-[50px] text-secondary font-bold">Contact me</h2>
      </div>
      <div className="flex flex-col justify-center sm:flex-row items-center gap-x-4 gap-y-6 sm:gap-y-0 mt-4">
        <button onClick={handleCopyEmail} className="buttons ">
          {isCopied ? "Copied!" : "E-mail"}
        </button>
        <button className="buttons ">Discord</button>
        <button className="buttons ">LinkedIn</button>
      </div>
    </section>
  );
}
