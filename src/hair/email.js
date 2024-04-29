import React from "react";

function EmailInfo({ formData, setFormData }) {
  return (
    <div className="other-info-container">
 
      <input
      className="w-100"
        type="text"
        placeholder="Email"
        onChange={(e) => {
          setFormData({ ...formData, other: e.target.value });
        }}
        id="name_inp"
      />
    </div>
  );
}

export default EmailInfo;
