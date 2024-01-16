import React from "react";

const PrimaryBtn = ({ text, onClick, disabled, styles }) => {
    return (
        <button
        className={`bg-secondary rounded-[25px] text-white py-[10px] px-[25px] transition-all duration-300 active:bg-[#bb61c95c] ${styles}   ${
            disabled && "opacity-50 cursor-not-allowed"
        }`}
        onClick={onClick}
        disabled={disabled}
        >
        {text}
        </button>
    );
    }

    export default PrimaryBtn;