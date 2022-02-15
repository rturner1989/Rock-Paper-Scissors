import React from "react";
import { opponentType } from "../../Library/Enums";

interface props {
    playerSelection: React.Dispatch<React.SetStateAction<opponentType | null>>;
}

const OpponentSelection: React.FC<props> = ({ playerSelection }) => {
    return (
        <div className="opponent-selector">
            <h2 className="opponent-selection-heading">Choose your opponent</h2>
            <div>
                <button onClick={() => playerSelection(opponentType.COMPUTER)}>
                    Computer
                </button>
                <button onClick={() => playerSelection(opponentType.PLAYER)}>
                    Player
                </button>
            </div>
        </div>
    );
};

export default OpponentSelection;
