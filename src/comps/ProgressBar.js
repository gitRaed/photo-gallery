import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion';

const ProgressBar = ({file, setFile}) => {
    
    const { url, progress } = useStorage(file);
    
    useEffect(() => {
        //we're doing this so the progress bar disapears after we have the url
        if (url) {
            setFile(null);
        }
    }, [url, setFile]);//setFile has been called here cause we're using it inside

    //width: progress + '%' will be explained as an exemple. If progress = 39%, then width = 39%
    return (
        <motion.div className='progress-bar'  
            initial={{ width: 0}}
            animate={{ width: progress + '%'}}
        ></motion.div>
    )
}

export default ProgressBar;