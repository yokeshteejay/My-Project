import React from 'react'

function Goal({ formData, setFormData }) {
  return (


<>

<div class="container mt-5">
<div class="form-check">
  <input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
  <label class="form-check-label" for="exampleRadios1">
  Mother or any from mother's side of the family
  </label>
</div>
<div class="form-check">
  <input type="radio" name="exampleRadios" id="exampleRadios2" value="option2" checked></input>
  <label class="form-check-label" for="exampleRadios2">
  Father or anyone from father's side of the family
  </label>
</div>
<div class="form-check">
  <input type="radio" name="exampleRadios" id="exampleRadios3" value="option3"  checked></input>
  <label class="form-check-label" for="exampleRadios3">
  Both
  </label>
</div>

<div class="form-check">
  <input type="radio" name="exampleRadios" id="exampleRadios3" value="option3"  checked></input>
  <label class="form-check-label" for="exampleRadios3">
   None
  </label>
</div>
</div>

</>
  )
}

export default Goal
