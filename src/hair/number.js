import React from "react";

function NumberInfo({ formData, setFormData }) {
  return (
    <div className="personal-info-container">
     
      <input
      className="w-100"
        type="text"
        placeholder="Enter Your Number"
 
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
        id="name_inp"
      />
    </div>
  );
}

export default NumberInfo;
