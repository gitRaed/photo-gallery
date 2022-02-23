import React from 'react';

const Modal = ({selectedImg, setSelectedImg}) => {

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')) { // check if the click target is on the backdrop and not the img
            setSelectedImg(null); // to close the modal
        }
    }

    return (
        <div className="backdrop" onClick={handleClick}>
            <img src={selectedImg} alt="enlarged pic" />
        </div>
    )
}

export default Modal;