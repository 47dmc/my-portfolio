import React from "react";

const Button = ({ styles, title, icon }) => (
  <button type="button" className={`flex py-4 px-6 font-poppins font-medium text-[18px] bg-[#8F0D0D] text-dimWhite rounded-[28px] ${styles}`}>
    {title}
    <img 
      src={icon}
    />
  </button>
);

export default Button;