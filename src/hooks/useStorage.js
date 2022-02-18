import { useState, useEffect } from 'react';
import { projectStorage } from '../firebase/config';


const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);


    //useEffect will apply everytime the dependencie(file) is loaded
    useEffect(() => {
        //references
        const storageRef = projectStorage.ref(file.name);

        //an asynchronous method that will uploading the file to this reference
        //.on is a listener that will triger the function when the event 'state_changed' happens, it'll take a snapshot(an object)
        //in time of the upload at that moment in time
        storageRef.put(file).on('state_changed', (snap) => {

            //this variable can be seen as a progress of the upload
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (error) => {
            setError(error);
        }, async () => {
            //this part will trigger when the upload is fully complete
            const url = storageRef.getDownloadUrl();//this will get the url of the file what was just uploaded
            setUrl(url);
        });
    }, [file]);

    return { progress, url, error};

}

export default useStorage;