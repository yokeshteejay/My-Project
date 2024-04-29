import React from 'react'

function Ageinfo({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
   
      <input
      className='w-100'
        type="text"
        placeholder="How old are You?"
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
        id="name_inp"
      />
    </div>
  )
}

export default Ageinfo
