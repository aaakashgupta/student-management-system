import React from "react";
import { FaArrowRight } from "react-icons/fa";
function PrimaryButton({
  buttonText = "Start Managing",
  icon,
  className,
  buttonClickFun,
}) {
  return (
    <button
      onClick={buttonClickFun}
      className={`${className} bg-black flex items-center gap-2 text-white px-4 py-2 rounded hover:cursor-pointer`}
    >
      {icon ? icon : ""}

      <span>{buttonText}</span>
    </button>
  );
}

export default PrimaryButton;
