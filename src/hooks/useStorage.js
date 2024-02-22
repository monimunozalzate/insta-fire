import { useState, useEffect } from "react";
import { projectStorage, projectFirestore } from '../firebase/config'
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    // References
    const storageRef = ref(projectStorage, file.name);

    // Upload to Firebase
    const uploadImg = uploadBytesResumable(storageRef, file);

    useEffect(() => {
        const uploadImage = uploadImg.on('state_changed', (snapshot) => {
            const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            console.log(err);
        }, async () => {
            const imageUrl = await getDownloadURL(uploadImg.snapshot.ref);
            const createdAt = serverTimestamp();
            
            // Add to Firestore
            try {
                await addDoc(collection(projectFirestore, "images"), {
                    url: imageUrl,
                    createdAt: createdAt
                });
            } catch (error) {
                console.log(error);
            }

            // Set URL state
            setUrl(imageUrl);
        });

        // Cleanup function
        return () => {
            // Unsubscribe the 'state_changed' event listener when the component unmounts or when a new file is received
            uploadImage();
        };
       
    }, [file]);

    return { progress, url, error };
}

export default useStorage;
