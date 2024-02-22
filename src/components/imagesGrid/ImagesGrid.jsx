import React, { useMemo } from 'react';
import useFirestore from '../../hooks/useFirestore';
import { collection } from 'firebase/firestore';
import { projectFirestore } from '../../firebase/config';
import UpdateButton from '../updateButton/UpdateButton';
import DeleteButton from '../deleteButton/DeleteButton';

const ImagesGrid = () => {
  const collectionRef = collection(projectFirestore, 'images');
  // const memoizedCollectionRef = useMemo(() => collectionRef, [collectionRef]);

  const { docs } = useFirestore(collectionRef);
  // console.log(docs)

  return (

    <div className='image-grid'>

      {docs &&
        docs.map((doc) => (
          <>
          <div className='img-wrap' key={doc.id}>
            <img src={doc.url} alt={doc.url}
             />
             <UpdateButton key={doc.createdAt}/>
             <DeleteButton key={doc.id} id={doc.id} collectionRef={collectionRef}/>
          </div>
          
          </>
        ))
      }
    </div>
  );
}

export default ImagesGrid;
