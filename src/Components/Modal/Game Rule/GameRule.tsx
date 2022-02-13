import React from "react";

interface props {
    img: string;
    altText: string;
    handleClose: () => void;
}

const GameRule: React.FC<props> = ({ img, altText, handleClose }) => {
    return (
        <div className="rules-modal">
            <div className="modal-header">
                <h3>Rules</h3>
                <button onClick={handleClose}>Close</button>
            </div>
            <img src={img} alt={altText} />
        </div>
    );
};

export default GameRule;
