import React from "react";
import Image from "next/image";

const LoginInput = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  error,
  label,
  icon,
}) => {
  return (
    <div className="flex flex-col gap-[6px]">
      <label htmlFor={name} className="pl-[15px]">
        {label}
      </label>
      <div className="flex flex-row gap-[12px] bg-inputBg border-[1px] border-inputBorder rounded-[25px] py-[10px] px-[15px] focus-within:border-secondary transition-all duration-300">
        <Image src={`/assets/${icon}`} priority width={20} height={14} />
        <input
          className="bg-transparent w-full focus:outline-none focus-visible:outline-none autofill:bg-transparent !important"
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          minLength={type === "password" ? "8" : ""}
        />
        {error && <span className="text-red-500 text-sm">{error}</span>}
      </div>
    </div>
  );
};

export default LoginInput;
