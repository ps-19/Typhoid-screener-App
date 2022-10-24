import React from "react";
import "./OnlineCheckup.scss";

const StepThree = ({ step, setStep, formData, setFormData }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <section className="form__container">
      <div className="form">
        <div className="form__description">
          <p className="form__step">Step three</p>
          <h2>Symptoms</h2>
          <p>
            Rate the severity of the symptoms observed. <br /> None indicates
            that the symptom is not observed, medium indicates that the symptom
            is observed but not frequently and high indicates that the symptom
            occurs frequently.
          </p>
        </div>

        <div className="form__input">
          {/* Rose Spots */}
          <div className="form__input__question">
            <label htmlFor="Rose_spots">
              1. Rose Spots (small red spots on abdomen or chest)
            </label>

            <div
              className="options"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  Rose_spots: e.target.value,
                });
              }}
            >
              <label>
                <input
                  type="radio"
                  value="High"
                  name="Rose_spots"
                  required
                  defaultChecked={formData.Rose_spots === "High"}
                />
                High
              </label>

              <label>
                <input
                  type="radio"
                  value="Medium"
                  name="Rose_spots"
                  required
                  defaultChecked={formData.Rose_spots === "Medium"}
                />
                Medium
              </label>

              <label>
                <input
                  type="radio"
                  value="None"
                  name="Rose_spots"
                  required
                  defaultChecked={formData.Rose_spots === "None"}
                />
                None
              </label>
            </div>
          </div>

          {/* Muscle Weakness */}
          <div className="form__input__question">
            <label htmlFor="Muscle_weakness">2. Muscle Weakness </label>

            <div
              className="options"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  Muscle_weakness: e.target.value,
                });
              }}
            >
              <label>
                <input
                  type="radio"
                  value="High"
                  name="Muscle_weakness"
                  required
                  defaultChecked={formData.Muscle_weakness === "High"}
                />
                High
              </label>

              <label>
                <input
                  type="radio"
                  value="Medium"
                  name="Muscle_weakness"
                  required
                  defaultChecked={formData.Muscle_weakness === "Medium"}
                />
                Medium
              </label>

              <label>
                <input
                  type="radio"
                  value="None"
                  name="Muscle_weakness"
                  required
                  defaultChecked={formData.Muscle_weakness === "None"}
                />
                None
              </label>
            </div>
          </div>

          {/* Anorexia */}
          <div className="form__input__question">
            <label htmlFor="Anorexia">
              3. Anorexia (lack or loss of appetite)
            </label>

            <div
              className="options"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  Anorexia: e.target.value,
                });
              }}
            >
              <label>
                <input
                  type="radio"
                  value="High"
                  name="Anorexia"
                  required
                  defaultChecked={formData.Anorexia === "High"}
                />
                High
              </label>

              <label>
                <input
                  type="radio"
                  value="Medium"
                  name="Anorexia"
                  required
                  defaultChecked={formData.Anorexia === "Medium"}
                />
                Medium
              </label>

              <label>
                <input
                  type="radio"
                  value="None"
                  name="Anorexia"
                  required
                  defaultChecked={formData.Anorexia === "None"}
                />
                None
              </label>
            </div>
          </div>

          {/* Headache */}
          <div className="form__input__question">
            <label htmlFor="Headache">4. Headache </label>

            <div
              className="options"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  Headache: e.target.value,
                });
              }}
            >
              <label>
                <input
                  type="radio"
                  value="High"
                  name="Headache"
                  required
                  defaultChecked={formData.Headache === "High"}
                />
                High
              </label>

              <label>
                <input
                  type="radio"
                  value="Medium"
                  name="Headache"
                  required
                  defaultChecked={formData.Headache === "Medium"}
                />
                Medium
              </label>

              <label>
                <input
                  type="radio"
                  value="None"
                  name="Headache"
                  required
                  defaultChecked={formData.Headache === "None"}
                />
                None
              </label>
            </div>
          </div>

          {/* Skin Rash */}
          <div className="form__input__question">
            <label htmlFor="Skin_rash">5. Skin Rash </label>

            <div
              className="options"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  Skin_rash: e.target.value,
                });
              }}
            >
              <label>
                <input
                  type="radio"
                  value="High"
                  name="Skin_rash"
                  required
                  defaultChecked={formData.Skin_rash === "High"}
                />
                High
              </label>

              <label>
                <input
                  type="radio"
                  value="Medium"
                  name="Skin_rash"
                  required
                  defaultChecked={formData.Skin_rash === "Medium"}
                />
                Medium
              </label>

              <label>
                <input
                  type="radio"
                  value="None"
                  name="Skin_rash"
                  required
                  defaultChecked={formData.Skin_rash === "None"}
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

export default StepThree;
