import React from "react";
import { opponentType } from "../../../Library/Enums";
import ScoreCard from "./ScoreCard/ScoreCard";
import { VscDebugRestart } from "react-icons/vsc";

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
                    <div className="reset-btn-container">
                        <p>Reset Score</p>
                        <button
                            className="score-reset-btn"
                            onClick={() => {
                                setCompCounter(0);
                                setPlayerCounter(0);
                            }}
                        >
                            <span className="visually-hidden">next week</span>
                            <VscDebugRestart
                                className="reset-score-svg"
                                aria-hidden={true}
                                focusable={false}
                            />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GameHeader;
