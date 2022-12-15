import Card from "react-bootstrap/Card";
import photos from "../../assets/card/camara-fotografica.svg";
import ModalNewProduct from "./ModalNewProduct";

export default function NewProduct({ typeProduct }) {
  return (
    <Card className="w-25 p-1">
      {/* <Card.Header className="w-100">
        <div className="container-img d-flex justify-content-center">
          <Card.Img variant="top" src={photos} />
        </div>
      </Card.Header> */}
      <Card.Body className="">
        <ModalNewProduct typeProduct={typeProduct} />
      </Card.Body>
    </Card>
  );
}
