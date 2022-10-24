import React from "react";

const StepFour = ({ step, setStep, formData, setFormData }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <section className="form__container">
      <div className="form">
        <div className="form__description">
          <p className="form__step">Step four</p>
          <h2>Symptoms</h2>
          <p>
            Rate the severity of the symptoms observed. <br /> None indicates
            that the symptom is not observed, medium indicates that the symptom
            is observed but not frequently and high indicates that the symptom
            occurs frequently.
          </p>
        </div>

        <div className="form__input">
          {/* Weightlessness */}
          <div className="form__input__question">
            <label htmlFor="Weightlessness">1. Weightlessness</label>

            <div
              className="options"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  Weightlessness: e.target.value,
                });
              }}
            >
              <label>
                <input
                  type="radio"
                  value="High"
                  name="Weightlessness"
                  required
                  defaultChecked={formData.Weightlessness === "High"}
                />
                High
              </label>

              <label>
                <input
                  type="radio"
                  value="Medium"
                  name="Weightlessness"
                  required
                  defaultChecked={formData.Weightlessness === "Medium"}
                />
                Medium
              </label>

              <label>
                <input
                  type="radio"
                  value="None"
                  name="Weightlessness"
                  required
                  defaultChecked={formData.Weightlessness === "None"}
                />
                None
              </label>
            </div>
          </div>

          {/* Stomach Distension */}
          <div className="form__input__question">
            <label htmlFor="Stomach_distension">
              2. Stomach distension (stomach is strangely swollen)
            </label>

            <div
              className="options"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  Stomach_distension: e.target.value,
                });
              }}
            >
              <label>
                <input
                  type="radio"
                  value="High"
                  name="Stomach_distension"
                  required
                  defaultChecked={formData.Stomach_distension === "High"}
                />
                High
              </label>

              <label>
                <input
                  type="radio"
                  value="Medium"
                  name="Stomach_distension"
                  required
                  defaultChecked={formData.Stomach_distension === "Medium"}
                />
                Medium
              </label>

              <label>
                <input
                  type="radio"
                  value="None"
                  name="Stomach_distension"
                  required
                  defaultChecked={formData.Stomach_distension === "None"}
                />
                None
              </label>
            </div>
          </div>

          {/* Malaise */}
          <div className="form__input__question">
            <label htmlFor="Malaise">
              3. Malaise (general feeling of discomfort)
            </label>

            <div
              className="options"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  Malaise: e.target.value,
                });
              }}
            >
              <label>
                <input
                  type="radio"
                  value="High"
                  name="Malaise"
                  required
                  defaultChecked={formData.Malaise === "High"}
                />
                High
              </label>

              <label>
                <input
                  type="radio"
                  value="Medium"
                  name="Malaise"
                  required
                  defaultChecked={formData.Malaise === "Medium"}
                />
                Medium
              </label>

              <label>
                <input
                  type="radio"
                  value="None"
                  name="Malaise"
                  required
                  defaultChecked={formData.Malaise === "None"}
                />
                None
              </label>
            </div>
          </div>

          {/* Blood In Stool  */}
          <div className="form__input__question">
            <label htmlFor="Occult_blood_in_stool">4. Blood In Stool </label>

            <div
              className="options"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  Occult_blood_in_stool: e.target.value,
                });
              }}
            >
              <label>
                <input
                  type="radio"
                  value="High"
                  name="Occult_blood_in_stool"
                  required
                  defaultChecked={formData.Occult_blood_in_stool === "High"}
                />
                High
              </label>

              <label>
                <input
                  type="radio"
                  value="Medium"
                  name="Occult_blood_in_stool"
                  required
                  defaultChecked={formData.Occult_blood_in_stool === "Medium"}
                />
                Medium
              </label>

              <label>
                <input
                  type="radio"
                  value="None"
                  name="Occult_blood_in_stool"
                  required
                  defaultChecked={formData.Occult_blood_in_stool === "None"}
                />
                None
              </label>
            </div>
          </div>

          {/* Haemorrahages */}
          <div className="form__input__question">
            <label htmlFor="Haemorrahages">5. Haemorrahages </label>

            <div
              className="options"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  Haemorrahages: e.target.value,
                });
              }}
            >
              <label>
                <input
                  type="radio"
                  value="High"
                  name="Haemorrahages"
                  required
                  defaultChecked={formData.Haemorrahages === "High"}
                />
                High
              </label>

              <label>
                <input
                  type="radio"
                  value="Medium"
                  name="Haemorrahages"
                  required
                  defaultChecked={formData.Haemorrahages === "Medium"}
                />
                Medium
              </label>

              <label>
                <input
                  type="radio"
                  value="None"
                  name="Haemorrahages"
                  required
                  defaultChecked={formData.Haemorrahages === "None"}
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

export default StepFour;
