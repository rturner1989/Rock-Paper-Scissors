import { useState } from "react";
import { gameType, opponentType } from "../../Library/Enums";
import GameComponent from "../Game Component/GameComponent";
import OpponentSelection from "../Opponent Selection/OpponentSelection";
import { getSelectionBasic } from "../../Library/Data";
import useLocalStorage from "../../Hooks/useLocalStorage";
import { showScore } from "../../Library/Helpers";
import ModalContainer from "../Modal Container/ModalContainer";
import GameRule from "../Game Rule/GameRule";

const RockPaperScissors = () => {
    const [player, setPlayer] = useState<opponentType | null>(null);
    const [compCounter, setCompCounter] = useLocalStorage("RPSComp", 0);
    const [playerCounter, setPlayerCounter] = useLocalStorage("RPSPlay", 0);
    const [isModalShown, setIsModalShown] = useState(false);

    function closeModal() {
        setIsModalShown(false);
    }

    return (
        <div className="RockPaperScissors">
            {isModalShown && (
                <ModalContainer modal={"RockPaperScissorsRules rules"}>
                    <GameRule
                        img={"./Images/image-rules.svg"}
                        altText={"Rock Paper Scissors Rules"}
                        handleClose={closeModal}
                    ></GameRule>
                </ModalContainer>
            )}
            <div className="game-header standard-header">
                <img src="./Images/logo.svg" alt="Standard Rules Logo" />
                {showScore(player, compCounter, playerCounter)}
                {!player && (
                    // fix bug when page refreshes it pulls previous count data
                    <button
                        onClick={() => {
                            setCompCounter(0);
                            setPlayerCounter(0);
                        }}
                    >
                        Reset Score
                    </button>
                )}
            </div>
            {!player ? (
                <OpponentSelection playerSelection={setPlayer} />
            ) : (
                <GameComponent
                    selections={getSelectionBasic}
                    opponent={player}
                    gameMode={gameType.GAME1}
                    compCounter={compCounter}
                    setCompCounter={setCompCounter}
                    playerCounter={playerCounter}
                    setPlayerCounter={setPlayerCounter}
                />
            )}
            <button
                className="rules-btn"
                onClick={() => setIsModalShown(!isModalShown)}
            >
                Rules
            </button>
        </div>
    );
};

export default RockPaperScissors;
