import React from "react";
import { IoMdClose } from "react-icons/io";

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
                <button className="close-modal-btn" onClick={handleClose}>
                    <span className="visually-hidden">add task</span>
                    <IoMdClose
                        className="close-modal-svg"
                        aria-hidden={true}
                        focusable={false}
                    />
                </button>
            </div>
            <img src={img} alt={altText} />
        </div>
    );
};

export default GameRule;
