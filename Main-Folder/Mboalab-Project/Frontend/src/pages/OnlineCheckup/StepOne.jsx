import React from "react";
import "./OnlineCheckup.scss";

const StepOne = ({ step, setStep, formData, setFormData }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <section className="form__container">
      <div className="form">
        <div className="form__description">
          <p className="form__step">Step one</p>
          <h2>Personal Details</h2>
        </div>

        <div className="form__input">
          {/* Name */}
          {/* <div className="form__input__field"> */}
          <label htmlFor="name">
            <p>Name</p>

            <div>
              <input
                type="text"
                name="firstname"
                placeholder=" First Name"
                value={formData.firstname}
                onChange={(e) =>
                  setFormData({ ...formData, firstname: e.target.value })
                }
              />
              <input
                type="text"
                name="lastname"
                placeholder=" Last Name"
                value={formData.lastname}
                onChange={(e) =>
                  setFormData({ ...formData, lastname: e.target.value })
                }
              />
            </div>
          </label>
          {/* </div> */}

          {/* Email */}
          <label>
            <p>Email Address</p>
            <input
              type="text"
              name="email"
              placeholder=" Email Address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </label>

          {/* Location */}
          <label>
            <p>Location</p>
            <select
              name="location"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
              required
            >
              <option defaultValue="" disabled hidden>
                Country of Residence
              </option>
              <option value="India">India</option>
              <option value="Nigeria">Nigeria</option>
              <option value="South Africa">South Africa</option>
              <option value="America">America</option>
              <option value="Russia">Russia</option>
              <option value="China">China</option>
              <option value="South_Korea">South Korea</option>
            </select>
          </label>

          {/* Age */}
          <label>
            <p>Age</p>
            <select
              name="age"
              value={formData.age}
              onChange={(e) =>
                setFormData({ ...formData, age: e.target.value })
              }
              required
            >
              <option value="" disabled defaultValue="" hidden>
                Age Group
              </option>
              <option value="under 13">Under 13</option>
              <option value="13-17">13-17</option>
              <option value="18-24">18-24</option>
              <option value="25-34">25-34</option>
              <option value="35-44">35-44</option>
              <option value="45-54">45-54</option>
              <option value="55 or older">55 or older</option>
            </select>
          </label>

          {/* Date */}
          <label>
            <p>Date</p>
            <div>
              <input
                type="date"
                name="dayvisited"
                value={formData.dayvisited}
                placeholder="Date of Visit"
                onChange={(e) =>
                  setFormData({ ...formData, dayvisited: e.target.value })
                }
              />
            </div>
          </label>
        </div>
      </div>

      <div className="form__button">
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

export default StepOne;
