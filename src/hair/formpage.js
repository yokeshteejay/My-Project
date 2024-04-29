import React, { useState } from "react";
import Nameinfo from "./name";
import NumberInfo from "./number";
import EmailInfo from "./email";
import Ageinfo from "./age";
import Looklike from "./looklike";
import Goal from "./goal";
import Hairfall from "./hairfall";
import Quality from "./quality";
import Hairtype from "./hairtype";
import Genetic from "./genetic";
import Dandruff from "./dandruff";
import Sleep from "./sleep";
import Stress from "./stress";
import NotFoundPage from "./notfound";
import "./form.css";

function FormPage() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  });

  const FormTitles = [
    "Before we start, can we get your name?",
    "Phone Number",
    "Email",
    "How old are You?",
    "Which image best describes Your hair loss?",
    "Do You have a family history of hair loss?",
    "Have you experienced any of the below in the last 1 year?",
    "Are you currently taking any supplements or vitamins for hair?",
    "How are your energy levels?",
    "Stress Level",
    "Dandruff Description",
    "Sleep Quality",
    "scalp"
    
  ];

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return <Nameinfo formData={formData} setFormData={setFormData} />;
      case 1:
        return <NumberInfo formData={formData} setFormData={setFormData} />;
      case 2:
        return <EmailInfo formData={formData} setFormData={setFormData} />;
      case 3:
        return <Ageinfo formData={formData} setFormData={setFormData} />;
      case 4:
        return <Looklike formData={formData} setFormData={setFormData} />;
      case 5:
        return <Goal formData={formData} setFormData={setFormData} />;
      case 6:
        return <Hairfall formData={formData} setFormData={setFormData} />;
      case 7:
        return <Quality formData={formData} setFormData={setFormData} />;
      case 8:
        return <Hairtype formData={formData} setFormData={setFormData} />;
      case 9:
        return <Genetic formData={formData} setFormData={setFormData} />;
      case 10:
        return <Dandruff formData={formData} setFormData={setFormData} />;
      case 11:
        return <Sleep formData={formData} setFormData={setFormData} />;
      case 12:
        return <Stress formData={formData} setFormData={setFormData} />;
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <>

<div class="container-fluid d-flex justify-content-center" id="button_container">
  <div class="row w-75 mt-5">
    <div class="col-md-12">
      <div class="btn-group d-flex justify-content-evenly d-grid gap-3" style={{height:"70px"}}>
      <button type="button" class="btn btn-secondary">Primary</button>
      <button type="button" class="btn btn-secondary">Secondary</button>
      <button type="button" class="btn btn-secondary">Success</button>
      <button type="button" class="btn btn-secondary">Danger</button>
      </div>
    </div>
  </div>
</div>

      <div className="container-fluid d-flex justify-content-center ">
      
        <div className="row">
          <div className="col-md-8">
            <div className="progressbar" style={{marginTop:"-70px",}}>
              <div
                style={{ width: `${Math.round((page + 1) * (100 / FormTitles.length))}%` }}
              ><br></br>
                {Math.round((page + 1) * (100 / FormTitles.length))}%
              </div>
            </div>

            <div className="form-container shadow-none"style={{marginTop:"-40px"}} id="font">
              <div className="header">
                <h1 className="title">{FormTitles[page]}</h1>
              </div>
              <div className="body">{PageDisplay()}</div>
              <div className="footer">
                <button
                  disabled={page === 0}
                  onClick={() => setPage(prevPage => prevPage - 1)}
                  className="but w-25"
                >
                  Prev
                </button>
                <button
                  onClick={() => {
                    if (page === FormTitles.length - 1) {
                      alert("Form Submitted");
                      console.log(formData);
                    } else {
                      setPage(prevPage => prevPage + 1);
                    }
                  }}
                  className="but w-25"
                >
                  {page === FormTitles.length - 1 ? "Submit" : "Next"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormPage;
