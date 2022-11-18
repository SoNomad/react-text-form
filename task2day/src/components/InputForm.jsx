import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function InputForm({
  submitHandler,
  value,
  textHandler,
  blurHandler,
  inputDirty,
  error,
  sent,
}) {
  return (
    <Form className="form mt-5" onSubmit={submitHandler}>
      <Form.Group className="w-20">
        <Form.Control
          value={value}
          onChange={textHandler}
          onBlur={(e) => blurHandler(e)}
          type="text"
          placeholder="Enter text"
          className={inputDirty && error ? "form-error" : ""}
        />
        {inputDirty && error && <div className="error-message">{error}</div>}
        {sent && <div className="success-message">Message sent!</div>}
      </Form.Group>
      <div>
        <Button
          className="btn"
          variant="primary"
          type="submit"
          disabled={!value}
        >
          Submit
        </Button>
      </div>
    </Form>
  );
}
