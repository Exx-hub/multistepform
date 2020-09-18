import React, { useState } from "react";
import Confirm from "./Confirm";
import FormPersonalDetails from "./FormPersonalDetails";
import FormUserDetails from "./FormUserDetails";
import Success from "./Success";

function UserForm() {
  const [step, setStep] = useState(1);

  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div>
      {step === 1 && (
        <FormUserDetails
          setStep={setStep}
          input={input}
          handleChange={handleChange}
        />
      )}
      {step === 2 && (
        <FormPersonalDetails
          setStep={setStep}
          input={input}
          handleChange={handleChange}
        />
      )}
      {step === 3 && (
        <Confirm setStep={setStep} input={input} handleChange={handleChange} />
      )}
      {step === 4 && <Success />}
    </div>
  );
}

export default UserForm;
