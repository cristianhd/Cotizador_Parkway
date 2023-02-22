import React, { useState } from "react";
import { Button, Form, Modal, Row } from "react-bootstrap";
import EditDescription from "./EditDescription";
import EditPrice from "./EditPrice";
import EditTitle from "./EditTitle";

export default function FormEdit({
  id,
  typeProduct,
  nameItemEdit,
  handleUpdate,
}) {
  const [form, setForm] = useState({
    includes: { transport: "", route: "", visit: "", food: "" },
  });
  const [validated, setValidated] = useState(false);

  function handleOnSubmitForm(e) {
    const formEvent = e.currentTarget;
    e.preventDefault();

    if (formEvent.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      handleUpdate(id, typeProduct, form);
      setValidated(false);
    }
  }

  function handleOnChangeForm(e) {
    const name = e.target.name;
    const value = e.target.value;
    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleOnChangeIncludes(name, includesInput) {
    setForm({
      ...form,
      includes: { ...form.includes, [name]: includesInput },
    });
  }

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleOnSubmitForm}
      autoComplete="off"
    >
      {nameItemEdit === "Título" && (
        <EditTitle form={form} handleOnChangeForm={handleOnChangeForm} />
      )}
      {nameItemEdit === "Descripción" && (
        <EditDescription
          typeProduct={typeProduct}
          form={form}
          handleOnChangeForm={handleOnChangeForm}
          handleOnChangeIncludes={handleOnChangeIncludes}
        />
      )}
      {nameItemEdit === "Precios" && <EditPrice />}

      <Row className="m-1 p-1">
        <div className="w-100 m-1 p-1 d-flex justify-content-end">
          <Button type="submit">Guardar</Button>
        </div>
      </Row>
    </Form>
  );
}
