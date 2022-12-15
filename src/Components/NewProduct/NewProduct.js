import Card from "react-bootstrap/Card";
import photos from "../../assets/card/camara-fotografica.svg";
import ModalNewProduct from "./ModalNewProduct";

export default function NewProduct({ typeProduct }) {
  return (
    <Card className="w-25 p-1">
      <Card.Body className="">
        <ModalNewProduct typeProduct={typeProduct} />
      </Card.Body>
    </Card>
  );
}
