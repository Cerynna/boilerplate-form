import React, { useEffect, useRef, useState } from "react";
import { addRowToSheet } from "../services/sheet";

export default function Form({ callback }: { callback: () => void }) {
  const [inputs, setInputs] = useState<string[]>([""]);
  const lastInputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (lastInputRef.current) {
      lastInputRef.current.focus();
    }
  }, [inputs.length]);

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
      <h2>Formulaire</h2>
      {inputs.map((value, index) => (
        <div className="field" key={index}>
          <label htmlFor={`input_${index}`}>Input #{index + 1}</label>
          <input
            name={`input_${index}`}
            id={`input_${index}`}
            type="text"
            value={value}
            onChange={(e) => handleChange(index, e.target.value)}
            placeholder={`Input #${index + 1}`}
            style={{ display: "block", marginBottom: "8px" }}
            ref={index === inputs.length - 1 ? lastInputRef : null}
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
