import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';


const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    /* 
    The useEffect function will be retrieving documents once initially and thereafter everytime a new document is added. 
    It's in sync with whatever is stored in firebase
    */

    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            //This method fires a callback function everytime a change occurs inside a collection
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id})
                });
                setDocs(documents);
            });

        return () => unsub(); //This is a cleanup function. I'll be invoked to unsubscribe from the collection when we're not longer using it
    }, [collection]);

    return { docs };
};


export default useFirestore;