import React from 'react';
import useFirestore from '../../hooks/useFirestore';
import { collection } from 'firebase/firestore';
import { projectFirestore } from '../../firebase/config';
import UpdateButton from '../updateButton/UpdateButton';
import DeleteButton from '../deleteButton/DeleteButton';

const ImagesGrid = () => {
  const collectionRef = collection(projectFirestore, 'images');

  const { docs } = useFirestore(collectionRef);
  console.log(docs)

  return (

    <div className='image-grid'>
      <p>grid</p>
      {docs &&
        docs.map((doc) => (

          <div className='img-wrap' key={doc.id}>
            <img src={doc.url} alt={doc.url}
            />
            <UpdateButton />
            <DeleteButton id={doc.id} />
          </div>


        ))
      }
    </div>
  );
}

export default ImagesGrid;
