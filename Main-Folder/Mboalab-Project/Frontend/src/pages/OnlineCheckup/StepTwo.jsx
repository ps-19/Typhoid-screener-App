import React from "react";
import "./OnlineCheckup.scss";

const StepTwo = ({ step, setStep, formData, setFormData }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <section className="form__container">
      <div className="form">
        <div className="form__description">
          <p className="form__step">Step two</p>
          <h2>Symptoms</h2>
          <p>
            Rate the severity of the symptoms observed. <br /> None indicates
            that the symptom is not observed, medium indicates that the symptom
            is observed but not frequently and high indicates that the symptom
            occurs frequently.
          </p>
        </div>

        <div className="form__input">
          {/* Fever */}
          <div className="form__input__question">
            <label htmlFor="fever">
              1. Fever (an abnormally high body temperature)
            </label>

            <div
              className="options"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  Fever: e.target.value,
                });
              }}
            >
              <label>
                <input
                  type="radio"
                  value="High"
                  name="Fever"
                  required
                  defaultChecked={formData.Fever === "High"}
                />
                High
              </label>

              <label>
                <input
                  type="radio"
                  value="Medium"
                  name="Fever"
                  required
                  defaultChecked={formData.Fever === "Medium"}
                />
                Medium
              </label>

              <label>
                <input
                  type="radio"
                  value="None"
                  name="Fever"
                  required
                  defaultChecked={formData.Fever === "None"}
                />
                None
              </label>
            </div>
          </div>

          {/* Abdominal Pain */}
          <div className="form__input__question">
            <label htmlFor="Abdominal_pain">2. Abdominal Pain </label>

            <div
              className="options"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  Abdominal_pain: e.target.value,
                });
              }}
            >
              <label>
                <input
                  type="radio"
                  value="High"
                  name="Abdominal_pain"
                  required
                  defaultChecked={formData.Abdominal_pain === "High"}
                />
                High
              </label>

              <label>
                <input
                  type="radio"
                  value="Medium"
                  name="Abdominal_pain"
                  required
                  defaultChecked={formData.Abdominal_pain === "Medium"}
                />
                Medium
              </label>

              <label>
                <input
                  type="radio"
                  value="None"
                  name="Abdominal_pain"
                  required
                  defaultChecked={formData.Abdominal_pain === "None"}
                />
                None
              </label>
            </div>
          </div>

          {/* Cough */}
          <div className="form__input__question">
            <label htmlFor="cough">3. Cough </label>

            <div
              className="options"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  Cough: e.target.value,
                });
              }}
            >
              <label>
                <input
                  type="radio"
                  value="High"
                  name="Cough"
                  required
                  defaultChecked={formData.Cough === "High"}
                />
                High
              </label>

              <label>
                <input
                  type="radio"
                  value="Medium"
                  name="Cough"
                  required
                  defaultChecked={formData.Cough === "Medium"}
                />
                Medium
              </label>

              <label>
                <input
                  type="radio"
                  value="None"
                  name="Cough"
                  required
                  defaultChecked={formData.Cough === "None"}
                />
                None
              </label>
            </div>
          </div>

          {/* Diarrhea */}
          <div className="form__input__question">
            <label htmlFor="Diarrhea">4. Diarrhea </label>

            <div
              className="options"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  Diarrhea: e.target.value,
                });
              }}
            >
              <label>
                <input
                  type="radio"
                  value="High"
                  name="Diarrhea"
                  required
                  defaultChecked={formData.Diarrhea === "High"}
                />
                High
              </label>

              <label>
                <input
                  type="radio"
                  value="Medium"
                  name="Diarrhea"
                  required
                  defaultChecked={formData.Diarrhea === "Medium"}
                />
                Medium
              </label>

              <label>
                <input
                  type="radio"
                  value="None"
                  name="Diarrhea"
                  required
                  defaultChecked={formData.Diarrhea === "None"}
                />
                None
              </label>
            </div>
          </div>

          {/* Constipation */}
          <div className="form__input__question">
            <label htmlFor="Constipation">5. Constipation </label>

            <div
              className="options"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  Constipation: e.target.value,
                });
              }}
            >
              <label>
                <input
                  type="radio"
                  value="High"
                  name="Constipation"
                  required
                  defaultChecked={formData.Constipation === "High"}
                />
                High
              </label>

              <label>
                <input
                  type="radio"
                  value="Medium"
                  name="Constipation"
                  required
                  defaultChecked={formData.Constipation === "Medium"}
                />
                Medium
              </label>

              <label>
                <input
                  type="radio"
                  value="None"
                  name="Constipation"
                  required
                  defaultChecked={formData.Constipation === "None"}
                />
                None
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="form__button">
        <button
          onClick={() => {
            setStep(step - 1);
            scrollToTop();
          }}
          className="form__button--previous"
        >
          Previous
        </button>
        <button
          onClick={() => {
            setStep(step + 1);

            scrollToTop();
          }}
          className="form__button__next"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default StepTwo;
