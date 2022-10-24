import React from "react";

const StepFive = ({ step, setStep, formData, setFormData }) => {
  // Fetching the data from the backend
  async function postData(url, data) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <section className="form__container">
      <div className="form">
        <div className="form__description">
          <p className="form__step">Step five</p>
          <h2>Symptoms</h2>
          <p>
            Rate the severity of the symptoms observed. <br /> None indicates
            that the symptom is not observed, medium indicates that the symptom
            is observed but not frequently and high indicates that the symptom
            occurs frequently.
          </p>
        </div>

        <div className="form__input">
          {/* Delirium */}
          {/* Dont forget to correct typo */}
          <div className="form__input__question">
            <label htmlFor="Delirium">
              1. Delirium (sudden change and confusion in mental status)
            </label>

            <div
              className="options"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  Delirium: e.target.value,
                });
              }}
            >
              <label>
                <input
                  type="radio"
                  value="High"
                  name="Delirium"
                  required
                  defaultChecked={formData.Delirium === "High"}
                />
                High
              </label>

              <label>
                <input
                  type="radio"
                  value="Medium"
                  name="Delirium"
                  required
                  defaultChecked={formData.Delirium === "Medium"}
                />
                Medium
              </label>

              <label>
                <input
                  type="radio"
                  value="None"
                  name="Delirium"
                  required
                  defaultChecked={formData.Delirium === "None"}
                />
                None
              </label>
            </div>
          </div>

          {/* Abdominal Rigidity */}
          <div className="form__input__question">
            <label htmlFor="Abdominal_rigidity">
              2. Abdominal Rigidity (stiffness in the belly area when touched)
            </label>

            <div
              className="options"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  Abdominal_rigidity: e.target.value,
                });
              }}
            >
              <label>
                <input
                  type="radio"
                  value="High"
                  name="Abdominal_rigidity"
                  required
                  defaultChecked={formData.Abdominal_rigidity === "High"}
                />
                High
              </label>

              <label>
                <input
                  type="radio"
                  value="Medium"
                  name="Abdominal_rigidity"
                  required
                  defaultChecked={formData.Abdominal_rigidity === "Medium"}
                />
                Medium
              </label>

              <label>
                <input
                  type="radio"
                  value="None"
                  name="Abdominal_rigidity"
                  required
                  defaultChecked={formData.Abdominal_rigidity === "None"}
                />
                None
              </label>
            </div>
          </div>

          {/* Epistaxis */}
          <div className="form__input__question">
            <label htmlFor="Epistaxis">
              3. Epistaxis (bleeding from the nose)
            </label>

            <div
              className="options"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  Epistaxis: e.target.value,
                });
              }}
            >
              <label>
                <input
                  type="radio"
                  value="High"
                  name="Epistaxis"
                  required
                  defaultChecked={formData.Epistaxis === "High"}
                />
                High
              </label>

              <label>
                <input
                  type="radio"
                  value="Medium"
                  name="Epistaxis"
                  required
                  defaultChecked={formData.Epistaxis === "Medium"}
                />
                Medium
              </label>

              <label>
                <input
                  type="radio"
                  value="None"
                  name="Epistaxis"
                  required
                  defaultChecked={formData.Epistaxis === "None"}
                />
                None
              </label>
            </div>
          </div>

          {/* Loss Of Appetite  */}
          <div className="form__input__question">
            <label htmlFor="Loss_of_appetite">4. Loss Of Appetite </label>

            <div
              className="options"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  Loss_of_appetite: e.target.value,
                });
              }}
            >
              <label>
                <input
                  type="radio"
                  value="High"
                  name="Loss_of_appetite"
                  required
                  defaultChecked={formData.Loss_of_appetite === "High"}
                />
                High
              </label>

              <label>
                <input
                  type="radio"
                  value="Medium"
                  name="Loss_of_appetite"
                  required
                  defaultChecked={formData.Loss_of_appetite === "Medium"}
                />
                Medium
              </label>

              <label>
                <input
                  type="radio"
                  value="None"
                  name="Loss_of_appetite"
                  required
                  defaultChecked={formData.Loss_of_appetite === "None"}
                />
                None
              </label>
            </div>
          </div>

          {/* Temperature */}
          <div className="form__input__question">
            <label htmlFor="Temperature">5. Temperature </label>

            <div
              className="options"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  Temperature: e.target.value,
                });
              }}
            >
              <label>
                <input
                  type="radio"
                  value="High"
                  name="Temperature"
                  required
                  defaultChecked={formData.Temperature === "High"}
                />
                High
              </label>

              <label>
                <input
                  type="radio"
                  value="Medium"
                  name="Temperature"
                  required
                  defaultChecked={formData.Temperature === "Medium"}
                />
                Medium
              </label>

              <label>
                <input
                  type="radio"
                  value="None"
                  name="Temperature"
                  required
                  defaultChecked={formData.Temperature === "None"}
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
          type="submit"
          className="form__button__next"
          onClick={() => {
            postData("http://localhost:5000/service", formData);
            // console.log(formData);
          }}
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default StepFive;
