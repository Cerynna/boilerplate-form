import React, { useState } from "react";
import { addRowToSheet } from "../services/sheet";

export default function Form({ callback }: { callback: () => void }) {
  const [inputs, setInputs] = useState<string[]>([""]);
  const clearInputs = () => {
    setInputs([""]);
  };
  const handleAddInput = () => {
    setInputs([...inputs, ""]);
  };
  const handleChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addRowToSheet(inputs, callback);
    clearInputs();
  };
  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((value, index) => (
        <div key={index}>
          <label htmlFor={`input_${index}`}>Input #{index + 1}</label>
          <input
            name={`input_${index}`}
            type="text"
            value={value}
            onChange={(e) => handleChange(index, e.target.value)}
            placeholder={`Input #${index + 1}`}
            style={{ display: "block", marginBottom: "8px" }}
          />
        </div>
      ))}

      <button type="button" onClick={handleAddInput}>
        Add
      </button>

      <button type="submit" style={{ marginLeft: "10px" }}>
        Submit
      </button>
    </form>
  );
}
