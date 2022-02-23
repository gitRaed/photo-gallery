import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';

function App() {

  const [selectedImg, setSelectedImg] = useState(null);

  /* 
    Explanation of the modal system here.

    First, the function setSelectedImg is send as a props to ImageGrid.js . In there, it'll add the source of each img
    to a modal (selectedImg = doc.url).
    With a value now, selectedImg is send as a props to Modal.js where a backdrop of the image will be created
    A condition has been made here because without it, the modal will always appear and to close the modal,
    an event on backdrop set selectedImg back to null
  */

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;
