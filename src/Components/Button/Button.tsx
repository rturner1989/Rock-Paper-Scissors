import React from "react";
import { gameType, options } from "../../Library/Enums";
import { selection } from "../../Library/Interfaces";

interface props {
    gameMode: gameType;
    name: options;
    image: string;
    item: selection;
    handlePlayerChoice: (item: selection) => void;
}

const Button: React.FC<props> = ({
    gameMode,
    name,
    image,
    item,
    handlePlayerChoice,
}) => {
    return (
        <button
            key={name}
            className={
                gameMode === gameType.GAME1
                    ? `game-btn ${name}`
                    : `game-btn ${name}-advanced`
            }
            onClick={() => {
                handlePlayerChoice(item);
            }}
        >
            <img
                className={`choice-svg ${image}-svg`}
                src={image}
                alt={`${name} button`}
            />
            <div
                className={
                    gameMode === gameType.GAME1
                        ? "icon-bg standard-bg"
                        : "icon-bg advanced-bg"
                }
            ></div>
        </button>
    );
};

export default Button;
