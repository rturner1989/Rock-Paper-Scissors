import React from "react";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import { options } from "../../Library/Enums";
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
    const [windowDimensions] = useWindowDimensions();

    if (windowDimensions.width < 430) {
        return (
            <button
                key={name}
                className={btnClass}
                onTouchStart={handlePlayerChoice}
            >
                <img
                    className={`choice-svg ${image}-svg`}
                    src={image}
                    alt={`${name} button`}
                />
                <div className={`icon-bg ${iconClass}`}></div>
            </button>
        );
    }

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
