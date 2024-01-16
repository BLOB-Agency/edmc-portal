import React from "react";

const RememberMe = () => {
  return (
    <div className="flex items-center gap-[12px]  underline group cursor-pointer">
      <input
        type="checkbox"
        name="remember"
        id="remember"
        value={""}
        className="group-hover:cursor-pointer border-white bg-transparent border-[1px] appearance-none text-white  h-[15px] w-[15px] checked:bg-transparent checked:appearance-auto !important"
      />
      <label
        htmlFor="remember"
        className="text-white group-hover:cursor-pointer"
      >
        Remember me
      </label>
    </div>
  );
};
export default RememberMe;
