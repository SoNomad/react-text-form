import { useState } from "react";
import InputForm from "./InputForm";

function FormInput() {
  const [value, setValue] = useState("");
  const [inputDirty, setInputDirty] = useState(false);
  const [error, setError] = useState("Text can not be empty");
  const [sent, setSent] = useState(false);

  const textHandler = (e) => {
    setValue(e.target.value);
    setInputDirty(false);
    setSent(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(value);
    setSent(true);
    setValue("");
  };

  const blurHandler = (e) => {
    if (!e.target.value) {
      setInputDirty(true);
      setSent(false);
    }
  };

  return (
    <InputForm
      textHandler={textHandler}
      submitHandler={submitHandler}
      blurHandler={blurHandler}
      inputDirty={inputDirty}
      error={error}
      sent={sent}
      value={value}
    />
  );
}

export default FormInput;
