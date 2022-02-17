import { useState } from "react";
import { Link } from "react-router-dom";
import { getSelectionAdvanced } from "../../Library/Data";
import { gameType, opponentType } from "../../Library/Enums";
import useLocalStorage from "../../Hooks/useLocalStorage";
import GameComponent from "../Game Component/GameComponent";
import GameRule from "../Modal/Game Rule/GameRule";
import ModalContainer from "../Modal/Modal Container/ModalContainer";
import OpponentSelection from "../Opponent Selection/OpponentSelection";
import GameHeader from "./Header/GameHeader";

const RockPaperScissorsLizardSpock = () => {
    const [player, setPlayer] = useState<opponentType | null>(null);
    const [compCounter, setCompCounter] = useLocalStorage("RPSLSComp", 0);
    const [playerCounter, setPlayerCounter] = useLocalStorage("RPSLSPlay", 0);
    const [isModalShown, setIsModalShown] = useState(false);

    function closeModal() {
        setIsModalShown(false);
    }

    return (
        <div className="RockPaperScissorsLizardSpock selected-game">
            {isModalShown && (
                <ModalContainer
                    modal={
                        "RockPaperScissorsLizardSpockRules rules-modal-container"
                    }
                >
                    <GameRule
                        img={"./Images/image-rules-bonus.svg"}
                        altText={"Rock Paper Scissors Lizard Spock Rules"}
                        handleClose={closeModal}
                    ></GameRule>
                </ModalContainer>
            )}
            <GameHeader
                containerClass={"advanced-header"}
                imgPath={"./Images/logo-bonus.svg"}
                imgAlt={"Advanced Rules Logo"}
                player={player}
                compCounter={compCounter}
                setCompCounter={setCompCounter}
                playerCounter={playerCounter}
                setPlayerCounter={setPlayerCounter}
            />
            {!player ? (
                <OpponentSelection playerSelection={setPlayer} />
            ) : (
                <GameComponent
                    selections={getSelectionAdvanced}
                    opponent={player}
                    gameMode={gameType.GAME2}
                    compCounter={compCounter}
                    setCompCounter={setCompCounter}
                    playerCounter={playerCounter}
                    setPlayerCounter={setPlayerCounter}
                />
            )}
            <div className="btn-container">
                <Link className="home-btn link" to="/Rock-Paper-Scissors">
                    Home
                </Link>
                <button
                    className="rules-btn"
                    onClick={() => setIsModalShown(!isModalShown)}
                >
                    Rules
                </button>
            </div>
        </div>
    );
};

export default RockPaperScissorsLizardSpock;
