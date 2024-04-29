import React from 'react'

function Hairfall({ formData, setFormData }) {
  return (
    <>
    
<div class="container mt-5">
<div class="form-check">
  <input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
  <label class="form-check-label" for="exampleRadios1">
None
  </label>
</div>
<div class="form-check">
  <input type="radio" name="exampleRadios" id="exampleRadios2" value="option2" checked></input>
  <label class="form-check-label" for="exampleRadios2">
  
Severe Illness (Dengue, Malaria, Typhoid)
  </label>
</div>
<div class="form-check">
  <input type="radio" name="exampleRadios" id="exampleRadios3" value="option3"  checked></input>
  <label class="form-check-label" for="exampleRadios3">
  
Heavy weight loss / heavy weight gain
  </label>
</div>

<div class="form-check">
  <input type="radio" name="exampleRadios" id="exampleRadios3" value="option3"  checked></input>
  <label class="form-check-label" for="exampleRadios3">
  
Surgery / heavy medication
  </label>
</div>
</div>

    </>
  )
}

export default Hairfall
