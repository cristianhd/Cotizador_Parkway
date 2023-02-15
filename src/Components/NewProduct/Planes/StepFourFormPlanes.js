import React, { useEffect, useState } from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { uploadPhoto } from "../../../Redux/action";
import axios from "axios";

export default function StepFourFormPlanes({ form, handleSavePhotos }) {
  const [imagesFiles, setImagesFiles] = useState({});

  const readyUpload = imagesFiles.length > 0;

  const formPhotos = new FormData();
  const dispatch = useDispatch();

  function handleOnChangePhotos(files) {
    setImagesFiles(files);
  }
  function handleUploadPhotos() {
    for (const index in imagesFiles) {
      formPhotos.append("photos", imagesFiles[index]);
    }
    axios
      .post("/photos/upload", formPhotos, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        const namePhotos = res.data;
        handleSavePhotos(namePhotos);
      });
    alert("Fotografías Cargadas");
    setImagesFiles({});
  }
  return (
    <>
      <Row className="m-1">
        <Form.Group as={Col} className="p-3">
          <span>Selecciones max 3 fotografías</span>
          <Form.Control
            required
            type="file"
            multiple
            name="photos"
            accept="image/png, image/gif, image/jpeg"
            onChange={(e) => handleOnChangePhotos(e.target.files)}
          />
        </Form.Group>
        <Form.Group>
          <Button
            disabled={!readyUpload}
            className="w-100"
            variant="success"
            onClick={handleUploadPhotos}
          >
            Cargar
          </Button>
        </Form.Group>
      </Row>
    </>
  );
}
