import { React, useState, useEffect } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import ProgressStep from "../../components/ProgressStep/ProgressStep";
import FormImg from "../../asset/image/form-img.png";
import "./OnlineCheckup.scss";

function OnlineCheckup() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    location: "",
    age: "",
    dayvisited: "",
    Fever: "",
    Abdominal_pain: "",
    Cough: "",
    Diarrhea: "",
    Constipation: "",
    Rose_spots: "",
    Muscle_weakness: "",
    Anorexia: "",
    Headache: "",
    Skin_rash: "",
    Weightlessness: "",
    Stomach_distension: "",
    Malaise: "",
    Occult_blood_in_stool: "",
    Haemorrahages: "",
    Delirium: "",
    Abdominal_rigidity: "",
    Epistaxis: "",
    Loss_of_appetite: "",
    Temperature: "",
  });

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const stepList = [
    <StepOne
      step={step}
      setStep={setStep}
      formData={formData}
      setFormData={setFormData}
    />,
    <StepTwo
      step={step}
      setStep={setStep}
      formData={formData}
      setFormData={setFormData}
    />,
    <StepThree
      step={step}
      setStep={setStep}
      formData={formData}
      setFormData={setFormData}
    />,
    <StepFour
      step={step}
      setStep={setStep}
      formData={formData}
      setFormData={setFormData}
    />,
    <StepFive
      step={step}
      setStep={setStep}
      formData={formData}
      setFormData={setFormData}
    />,
  ];

  return (
    <>
      <section className={isVisible ? "intro__page" : "intro__page hidden"}>
        <div className="intro__page-img">
          <img src={FormImg} alt="" />
        </div>

        <div className="intro__page-text">
          <h1>Welcome to MboaLab Typhoid Checkup.</h1>
          <p>
            This test consists of a series of questions curated to analyze your
            symptoms. Please answer the questions as accurately as possible.
          </p>
          <p>
            If you have any questions, please contact us on +254 700 000 000
          </p>
          <button
            onClick={() => {
              setIsVisible(false);
            }}
          >
            Start
          </button>
        </div>
      </section>

      <form className="checkup__form" action="/online-checkup" method="post">
        <ProgressStep step={step} setStep={setStep} />

        {stepList[step]}
      </form>
    </>
  );
}

export default OnlineCheckup;
