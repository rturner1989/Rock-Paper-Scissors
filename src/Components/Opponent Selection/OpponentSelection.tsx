import React from "react";
import { opponentType } from "../../Library/Enums";

interface props {
    playerSelection: React.Dispatch<React.SetStateAction<opponentType | null>>;
    title: string;
}

const OpponentSelection: React.FC<props> = ({ playerSelection, title }) => {
    return (
        <div>
            <h1>{title}</h1>
            <button onClick={() => playerSelection(opponentType.COMPUTER)}>
                Computer
            </button>
            <button onClick={() => playerSelection(opponentType.PLAYER)}>
                Player
            </button>
        </div>
    );
};

export default OpponentSelection;
