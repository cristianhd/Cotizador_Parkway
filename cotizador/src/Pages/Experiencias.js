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
  const [experiencias, setExperiencias] = useState([]);
  const [suggest, setSuggest] = useState([]);
  const [showOrigin, setShowOrigin] = useState(false);
  const [showDestination, setShowDestination] = useState(false);

  const { querySearch, queryPlaces } = useSelector((state) => state);

  const query = querySearch.querySearch;
  const suggestPlaces = queryPlaces.queryPlaces;

  const [form, setForm] = useState({});

  useEffect(() => {
    setExperiencias(query);
  }, [query]);
  useEffect(() => {
    setSuggest(suggestPlaces);
  }, [suggestPlaces]);

  useEffect(() => {
    setExperiencias([]);
    window.scroll({
      top: 700,
      behavior: "smooth",
    });
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(getSearch(form.origin, form.destination, "experiencias"));
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
    <div className="w-100 d-flex flex-column">
      <div className="card-product p-3">
        <h2>Planes</h2>
        <Form onSubmit={handleOnSubmit} className="p-3">
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
            <Form.Group
              as={Col}
              md={1}
              className="p-1 "
            >
              <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                <Button
                  className=" shadow-none border-0 w-100 h-100"
                  variant="primary"
                  type="submit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </Button>
              </div>
            </Form.Group>
          </Row>
        </Form>
      </div>
      <div className="d-flex flex-wrap justify-content-evenly m-5 w-inherit ">
        <Cards data={experiencias} />
        <NewProduct typeProduct="experiencias" />
      </div>
    </div>
  );
}
