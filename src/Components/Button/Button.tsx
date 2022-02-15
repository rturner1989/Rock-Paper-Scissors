import React from "react";
import { gameType, options } from "../../Library/Enums";
import { selection } from "../../Library/Interfaces";

interface props {
    btnClass: string;
    iconClass: string;
    name: options;
    image: string;
    item: selection;
    handlePlayerChoice?: () => void;
}

const Button: React.FC<props> = ({
    btnClass,
    iconClass,
    name,
    image,
    handlePlayerChoice,
}) => {
    return (
        <button key={name} className={btnClass} onClick={handlePlayerChoice}>
            <img
                className={`choice-svg ${image}-svg`}
                src={image}
                alt={`${name} button`}
            />
            <div className={`icon-bg ${iconClass}`}></div>
        </button>
    );
};

export default Button;
