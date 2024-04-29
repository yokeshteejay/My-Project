import React from "react";

function Nameinfo({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
   
      <input
      className="w-100"
        type="text"
        placeholder="Your Name"
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
        id="name_inp"
      />
    </div>
  );
}

export default Nameinfo;


