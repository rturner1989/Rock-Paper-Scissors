import React from "react";

interface props {
    img: string;
    handleClose: () => void;
}

const GameRule: React.FC<props> = ({ img, handleClose }) => {
    return (
        <div className="rules-modal">
            <div>
                <h3>Rules</h3>
                <button onClick={handleClose}>Close</button>
            </div>
            <img src={img} alt="" />
        </div>
    );
};

export default GameRule;
