import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({selectedImg, setSelectedImg}) => {

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')) { // check if the click target is on the backdrop and not the img
            setSelectedImg(null); // to close the modal
        }
    }

    return (
        <motion.div className="backdrop" onClick={handleClick}
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
        >
            <motion.img src={selectedImg} alt="enlarged pic" 
                initial={{ y: "-100vh"}}
                animate={{ y: 0}}
            />
        </motion.div>
    )
}

export default Modal;