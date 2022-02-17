import React from "react";
import { opponentType } from "../../Library/Enums";

interface props {
    playerSelection: React.Dispatch<React.SetStateAction<opponentType | null>>;
}

const OpponentSelection: React.FC<props> = ({ playerSelection }) => {
    return (
        <div className="opponent-selector">
            <h2 className="opponent-selection-heading">Choose your opponent</h2>
            <div className="selection-btn-container">
                <button
                    className="computer-selection"
                    onClick={() => playerSelection(opponentType.COMPUTER)}
                >
                    Computer
                </button>
                <button
                    className="player-selection"
                    onClick={() => playerSelection(opponentType.PLAYER)}
                >
                    Player
                </button>
            </div>
        </div>
    );
};

export default OpponentSelection;
