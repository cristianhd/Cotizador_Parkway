<Row className="m-1">
  <Form.Group as={Col} className="p-3">
    <FloatingLabel required label="DESCRIPCION" className="m-1">
      <Form.Control
        required
        as="textarea"
        placeholder="Escribe una descripción"
        name="description"
        value={form.description}
        onChange={handleOnChangeForm}
      />
    </FloatingLabel>
  </Form.Group>
</Row>;
