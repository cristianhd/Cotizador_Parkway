import React, { useEffect, useRef, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import DatePicker from "../Components/DatePicker";
import InputPlace from "../Components/InputPlace";
import Rooms from "../Components/Rooms";
import "../style/experiencias.css";
import Cards from "../Components/Cards";
import { Button } from "react-bootstrap";
import lupa from "../assets/card_product/lupa.svg";
import { getSearch, getSearchPlaces } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import NewProduct from "../Components/NewProduct";

export default function Experiencias() {
  const dispatch = useDispatch();
  const [typeProduct, setTypeProduct] = useState("");
  const [suggest, setSuggest] = useState([]);
  const [showOrigin, setShowOrigin] = useState(false);
  const [showDestination, setShowDestination] = useState(false);

  const { querySearch, queryPlaces } = useSelector((state) => state);

  const query = querySearch.querySearch;
  const suggestPlaces = queryPlaces.queryPlaces;

  const [form, setForm] = useState({});

  useEffect(() => {
    const type = window.location.pathname.slice(1) 
    setTypeProduct(type);
  }, [query]);
  useEffect(() => {
    setSuggest(suggestPlaces);
  }, [suggestPlaces]);

  useEffect(() => {
    window.scroll({
      top: 600,
      behavior: "smooth",
    });
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(getSearch(form.origin, form.destination, typeProduct));
  };

  const handleSuggestOnclick = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
    setShowOrigin(false);
    setShowDestination(false);
  };

  console.log(form);

  function handleOnChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "origin" || name === "destination") {
      if (name === "origin" && value !== "") {
        setShowOrigin(true);
      } else {
        setShowOrigin(false);
      }
      if (name === "destination" && value !== "") {
        setShowDestination(true);
      } else {
        setShowDestination(false);
      }

      dispatch(getSearchPlaces(value));
    }

    setForm({
      ...form,
      [name]: value,
    });
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="card-product p-4">
        <h2>Planes</h2>
        <Form onSubmit={handleOnSubmit} className="">
          <Row className="p-1">
            <Form.Group
              className="gap-1 p-1 d-flex flex-row justify-content-between"
              as={Col}
              md={6}
            >
              <InputPlace
                name="origin"
                labelName="Origen"
                value={form.origin}
                onChange={handleOnChange}
                suggest={suggest}
                suggestOnclick={handleSuggestOnclick}
                show={showOrigin}
              />
              <InputPlace
                name="destination"
                labelName="Destino"
                value={form.destination}
                onChange={handleOnChange}
                suggest={suggest}
                suggestOnclick={handleSuggestOnclick}
                show={showDestination}
              />
            </Form.Group>

            <Form.Group as={Col} md={3} className="p-1">
              <DatePicker />
            </Form.Group>

            <Form.Group
              as={Col}
              md={2}
              className="p-1 d-flex flex-row justify-content-between"
            >
              <Rooms />
            </Form.Group>
            <Form.Group as={Col} md={1} className="p-1 ">
              <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                <Button
                  className=" shadow-none border-0 w-100 h-100"
                  variant="primary"
                  type="submit"
                >
                  <img src={lupa} alt="lupa"></img>
                </Button>
              </div>
            </Form.Group>
          </Row>
        </Form>
      </div>
    </div>
  );
}
