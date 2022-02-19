import React from "react";
import { IoMdClose } from "react-icons/io";
import useWindowDimensions from "../../../Hooks/useWindowDimensions";

interface props {
    img: string;
    altText: string;
    handleClose: () => void;
}

const GameRule: React.FC<props> = ({ img, altText, handleClose }) => {
    const [windowDimensions] = useWindowDimensions();
    if (windowDimensions.width < 430) {
        return (
            <div className="rules-modal">
                <h3 className="modal-title">Rules</h3>
                <img className="modal-img" src={img} alt={altText} />
                <button className="close-modal-btn" onClick={handleClose}>
                    <span className="visually-hidden">Close Modal</span>
                    <IoMdClose
                        className="close-modal-svg"
                        aria-hidden={true}
                        focusable={false}
                    />
                </button>
            </div>
        );
    }
    return (
        <div className="rules-modal">
            <div className="modal-header">
                <h3 className="modal-title">Rules</h3>
                <button className="close-modal-btn" onClick={handleClose}>
                    <span className="visually-hidden">Close Modal</span>
                    <IoMdClose
                        className="close-modal-svg"
                        aria-hidden={true}
                        focusable={false}
                    />
                </button>
            </div>
            <img className="modal-img" src={img} alt={altText} />
        </div>
    );
};

export default GameRule;
