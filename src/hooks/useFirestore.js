import { useState, useEffect } from "react";
import { onSnapshot, query, orderBy } from "firebase/firestore";


const useFirestore = (collectionRef) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const collectionQuery = query(collectionRef, orderBy('createdAt', 'desc'));

        const unsubscribe = onSnapshot(collectionQuery, (snapshot) => {
            const documents = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setDocs(documents);
            // console.log(documents)
        });

        return () => unsubscribe();

    }, [collectionRef]);

    return { docs };
}

export default useFirestore;
