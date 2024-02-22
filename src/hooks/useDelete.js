import { deleteDoc, collection } from 'firebase/firestore';


const useDelete = async (collectionRef, id) => {
    try {
        // Get a reference to the document you want to delete
        const docRef = collection(collectionRef, id);

        // Delete the document
        await deleteDoc(docRef);

        // Optionally, update the state after deletion using your useFirestore hook
        useFirestore(collectionRef); // Pass the collectionRef to re-fetch the updated data
    } catch (error) {
        console.error('Error deleting document:', error);
    }
};

export default useDelete;
