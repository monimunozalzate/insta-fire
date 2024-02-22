import React from 'react';
import useDelete from '../../hooks/useDelete';
import { collection } from 'firebase/firestore';
import useFirestore from '../../hooks/useFirestore';

const DeleteButton = ({ id}) => {
   const collectionRef = collection(useFirestore, 'images', id);

   const { docs } = useFirestore(collectionRef);
   
    // const handleDeleteClick = (collectionRef, id) => {
    //     console.log(collectionRef, id);
    // };
    console.log(collectionRef, id);
    return (
        <div>
            <button className='delete' onClick={()=>console.log('deleted' + id + '=>' +collectionRef)}>Delete</button>
        </div>
    );
};

export default DeleteButton;
