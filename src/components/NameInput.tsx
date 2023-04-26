import React, { useState } from "react";
import { useDispatch } from "react-redux";

const NameInput = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNameSubmit = () => {
    dispatch({ type: "SET_NAME", payload: name });
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} />
      <button onClick={handleNameSubmit}>이름 저장</button>
    </div>
  );
};

export default NameInput;
