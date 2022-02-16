import React, { useState } from 'react';

const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];//types of files user will be allowed to upload

    const changeHandler = (e) => {
        let selected = e.target.files[0]; //select the first file only
        
        //file = selected only if the file 'selected' does exist AND the file type is a valid one
        if(selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png or jpeg)');
        };
    };

    return (
        <form>
            <input type="file" onChange={changeHandler}/>
            <div className='output'>
                {error && <div className='error'>{error}</div>}
                {file && <div>{file.name}</div>}
            </div>
        </form>
    )
};

export default UploadForm;