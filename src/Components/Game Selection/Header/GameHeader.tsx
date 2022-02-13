import React from "react";
import { opponentType } from "../../../Library/Enums";
import ScoreCard from "./ScoreCard/ScoreCard";

interface props {
    containerClass: string;
    imgPath: string;
    imgAlt: string;
    player: opponentType | null;
    compCounter: number;
    setCompCounter: React.Dispatch<React.SetStateAction<any>>;
    playerCounter: number;
    setPlayerCounter: React.Dispatch<React.SetStateAction<any>>;
}

const GameHeader: React.FC<props> = ({
    containerClass,
    imgPath,
    imgAlt,
    player,
    compCounter,
    playerCounter,
    setCompCounter,
    setPlayerCounter,
}) => {
    return (
        <div className={`game-header ${containerClass}`}>
            <img className="header-img" src={imgPath} alt={imgAlt} />
            <div className="score-reset-container">
                <ScoreCard
                    player={player}
                    opponent={compCounter}
                    user={playerCounter}
                />
                {!player && (
                    <button
                        className="reset-btn"
                        onClick={() => {
                            setCompCounter(0);
                            setPlayerCounter(0);
                        }}
                    >
                        Reset Score
                    </button>
                )}
            </div>
        </div>
    );
};

export default GameHeader;
