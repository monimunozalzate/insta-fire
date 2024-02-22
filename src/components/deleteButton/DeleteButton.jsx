import React from 'react';
import useDelete from '../../hooks/useDelete';

const DeleteButton = ({collectionRef, id}) => {
   console.log(collectionRef)
    

    // const handleDeleteClick = (collectionRef, id) => {
    //     useDelete(collectionRef, id);
    // };

    return (
        <div>
            <button className='delete'>Delete</button>
        </div>
    );
};

export default DeleteButton;
