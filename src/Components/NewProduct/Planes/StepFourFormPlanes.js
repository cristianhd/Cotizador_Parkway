import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

import axios from "axios";

export default function StepFourFormPlanes({ form, handleSavePhotos }) {
  const [imagesFiles, setImagesFiles] = useState({});
  const readyUpload = imagesFiles.length;
  const loadedPhotos = form.photos.length ? true : false;

  const [changePhoto, setChangePhoto] = useState(false);
  const activeChangePhotos = () => setChangePhoto(true);
  const disableChangePhotos = () => setChangePhoto(false);

  // create intance FormData
  const formPhotos = new FormData();

  function handleUploadPhotos() {
    //Append all images to object data
    for (const index in imagesFiles) {
      formPhotos.append("photos", imagesFiles[index]);
    }

    // Request post multi photos
    axios
      .post("/photos/upload", formPhotos, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        const namePhotos = res.data;
        // Save response (array to url) in state form
        handleSavePhotos(namePhotos);
      });

    // set initial value
    setImagesFiles({});

    // disable state change photo
    disableChangePhotos();

    alert("Fotografías Cargadas");
  }

  console.log(changePhoto, loadedPhotos);
  return (
    <>
      <Row className="m-1">
        {loadedPhotos ? (
          <span>Fotos Cargadas</span>
        ) : (
          <span>Selecciones máximo 3 fotografías</span>
        )}
        <Form.Group as={Col} className="p-3">
          <Form.Control
            required
            disabled={loadedPhotos && !changePhoto}
            type="file"
            multiple
            name="photos"
            accept="image/png, image/gif, image/jpeg"
            onChange={(e) => setImagesFiles(e.target.files)}
          />
        </Form.Group>
        <Form.Group className="p-2">
          {loadedPhotos && !readyUpload ? (
            <Button
              active={true}
              // disabled={!changePhoto}
              className="w-100"
              variant="warning"
              onClick={activeChangePhotos}
            >
              Cambiar
            </Button>
          ) : (
            <Button
              active={true}
              disabled={!readyUpload && !loadedPhotos}
              className="w-100"
              variant="success"
              onClick={handleUploadPhotos}
            >
              Cargar
            </Button>
          )}
        </Form.Group>
      </Row>
    </>
  );
}
