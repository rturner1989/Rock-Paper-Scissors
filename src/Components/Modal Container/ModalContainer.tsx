import React from "react";

interface props {
    modal: string;
    children: React.ReactNode;
}

const ModalContainer: React.FC<props> = ({ modal, children }) => {
    return <div className={modal}>{children}</div>;
};

export default ModalContainer;
