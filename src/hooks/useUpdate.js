import { useState } from 'react';
import { setDoc, getDoc } from 'firebase/firestore';

const useUpdate = (docRef, docId) => {
    const [doc, setDocState] = useState([]);

    const updateData = async (dataToUpdate) => {
        try {
            // Perform the update operation using setDoc
            await setDoc(docRef, dataToUpdate);

            // Optionally, you can fetch the updated data and set it in the state
             const updatedSnapshot = await getDoc(docRef);
            const updatedData = updatedSnapshot.data();
            setDocState(updatedData);
        } catch (error) {
            console.error('Error updating document:', error);
        }
    };

    return { doc, updateData };
};

export default useUpdate;
