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

  return <></>;
}
