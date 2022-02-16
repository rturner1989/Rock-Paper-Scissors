import { useState } from "react";
import { getSelectionBasic } from "../../Library/Data";
import { gameType, opponentType } from "../../Library/Enums";
import useLocalStorage from "../../Hooks/useLocalStorage";
import GameComponent from "../Game Component/GameComponent";
import GameRule from "../Modal/Game Rule/GameRule";
import ModalContainer from "../Modal/Modal Container/ModalContainer";
import OpponentSelection from "../Opponent Selection/OpponentSelection";
import GameHeader from "./Header/GameHeader";
import { Link } from "react-router-dom";

const RockPaperScissors = () => {
    const [player, setPlayer] = useState<opponentType | null>(null);
    const [compCounter, setCompCounter] = useLocalStorage("RPSComp", 0);
    const [playerCounter, setPlayerCounter] = useLocalStorage("RPSPlay", 0);
    const [isModalShown, setIsModalShown] = useState(false);

    function closeModal() {
        setIsModalShown(false);
    }

    return (
        <div className="RockPaperScissors selected-game">
            {isModalShown && (
                <ModalContainer
                    modal={"RockPaperScissorsRules rules-modal-container"}
                >
                    <GameRule
                        img={"./Images/image-rules.svg"}
                        altText={"Rock Paper Scissors Rules"}
                        handleClose={closeModal}
                    ></GameRule>
                </ModalContainer>
            )}
            <GameHeader
                containerClass={"standard-header"}
                imgPath={"./Images/logo.svg"}
                imgAlt={"Standard Rules Logo"}
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
                    selections={getSelectionBasic}
                    opponent={player}
                    gameMode={gameType.GAME1}
                    compCounter={compCounter}
                    setCompCounter={setCompCounter}
                    playerCounter={playerCounter}
                    setPlayerCounter={setPlayerCounter}
                />
            )}
            <div className="btn-container">
                <button className="home-btn">
                    <Link className="home-link" to="/Rock-Paper-Scissors">
                        Home
                    </Link>
                </button>
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

export default RockPaperScissors;
