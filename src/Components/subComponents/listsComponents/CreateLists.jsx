import React, { useState } from "react";

const CreateLists = () => {
  const [nameValue, setNameValue] = useState("");
  const [desValue, setDesValue] = useState("");

  const updateNameValue = e => {
    setNameValue(e.target.value);
  };

  const updateDesValue = e => {
    setDesValue(e.target.value);
  };

  return (
    <div>
      <div className="input-wrap">
        <input
          type="text"
          name="name"
          aria-label="name"
          maxLength="25"
          onChange={updateNameValue}
          autoFocus
          required
        />
        <label className="input-label">
          <span className="label-content">Name</span>
        </label>
        <div className="counter">{nameValue.length}/25</div>
      </div>

      <div className="input-wrap">
        <input
          type="text"
          name="description"
          aria-label="description"
          maxLength="100"
          onChange={updateDesValue}
          required
        />
        <label className="input-label">
          <span className="label-content">Description</span>
        </label>
        <div className="counter">{desValue.length}/100</div>
      </div>

      <div className="body">
        <label>
          <div className="label-text">Make private</div>
          <div className="label-input">
            <input type="checkbox" name="check" />
          </div>
        </label>
        <div className="label-info">
          <span>Only you can view private list</span>
        </div>
      </div>
    </div>
  );
};

export default CreateLists;
