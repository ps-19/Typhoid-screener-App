import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import { DatePicker, Button, Input, Select } from "antd";

//internal imports
import { listOfCountries, Symptoms } from "./components";

const Service = () => {
  const { Option } = Select;
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    touched,
    resetForm,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      age: "",
      dayvisited: new Date(),
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      lastName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      country: Yup.string().required("Required"),
      age: Yup.string().required("Required"),
      dayvisited: Yup.date().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      resetForm();
    },
  });
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div
      className="container"
      style={{
        marginTop: "50px",
        marginBottom: "50px",
      }}
    >
      <div
        className="row"
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          // to center the form
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <h1>Typhoid Data Form</h1>
                <h6>
                  Please help us to diagnose by filling in our Data form. Thank
                  you!
                </h6>
              </div>
              <label htmlFor="firstName">
                First Name
                <span
                  style={{
                    color: "red",
                  }}
                >
                  *
                </span>
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.firstName && touched.firstName && (
                <div className="text-danger">{errors.firstName}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="lastName">
                Last Name
                <span
                  style={{
                    color: "red",
                  }}
                >
                  *
                </span>
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.lastName && touched.lastName && (
                <div className="text-danger">{errors.lastName}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">
                Email
                <span
                  style={{
                    color: "red",
                  }}
                >
                  *
                </span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <div className="text-danger">{errors.email}</div>
              )}
            </div>
            <div>
              <label htmlFor="country">
                Country
                <span
                  style={{
                    color: "red",
                  }}
                >
                  *
                </span>
              </label>
              <Select
                className="form-control"
                id="country"
                name="country"
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <Option value="">Select Country</Option>
                {listOfCountries.map((country) => (
                  <Option key={country.code} value={country.code}>
                    {country.name}
                  </Option>
                ))}
              </Select>
              {errors.country && touched.country && (
                <div className="text-danger">{errors.country}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="age">
                Age
                <span
                  style={{
                    color: "red",
                  }}
                >
                  *
                </span>
              </label>
              <Select
                className="form-control"
                id="age"
                name="age"
                value={values.age}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <Option value="">Select Age</Option>
                <Option value="under 13">Under 13</Option>
                <Option value="13-17">13-17</Option>
                <Option value="18-24">18-24</Option>
                <Option value="26-34">26-34</Option>
                <Option value="36-44">36-44</Option>
                <Option value="46-54">46-54</Option>
                <Option value="55 or older">55 and Above</Option>
              </Select>
              {errors.age && touched.age && (
                <div className="text-danger">{errors.age}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="dayvisited">
                Today's Date
                <span
                  style={{
                    color: "red",
                  }}
                >
                  *
                </span>
              </label>
              <DatePicker
                defaultValue={moment()}
                onChange={(dayvisited) => setSelectedDate(dayvisited)}
                value={values.selectedDate}
                id="dayvisited"
                name="dayvisited"
                format="DD/MM/YYYY"
                style={{ width: "100%" }}
              />

              {errors.dayvisited && touched.dayvisited && (
                <div className="text-danger">{errors.dayvisited}</div>
              )}
            </div>
          </form>
        </div>
      </div>

      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            gap: "30px",
            marginTop: "60px",
          }}
        >
          <h5>Please tell us the symptoms you are experiencing!</h5>

          <div className="row">
            <Symptoms symptom={"Fever"} />
            <Symptoms symptom={"Cough"} />
            <Symptoms symptom={"Constipation"} />
            <Symptoms symptom={"Rose Spots"} />
            <Symptoms symptom={"Headache"} />
            <Symptoms symptom={"Muscle Weakness"} />
            <Symptoms symptom={"Anorexia"} />
            <Symptoms symptom={"Diarrhea"} />
            <Symptoms symptom={"Skin Rash"} />
            <Symptoms symptom={"Weight Loss"} />
            <Symptoms symptom={"Malaise"} />
            <Symptoms symptom={"Stomach Distention"} />
            <Symptoms symptom={"Occult Blood in Stool"} />
            <Symptoms symptom={"Hemorrhages"} />
            <Symptoms symptom={"Delirium"} />
            <Symptoms symptom={"Abdominal Rigidity"} />
            <Symptoms symptom={"Epistaxis"} />
            <Symptoms symptom={"Loss Of Appetite"} />
            <Symptoms symptom={"Temperature"} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h6>
              Any other symptoms you are experiencing? or questions? Please list
              them below.
            </h6>
            <Input.TextArea
              placeholder="Message"
              style={{ width: "100%", height: "100px" }}
            />
          </div>
          <div>
            <Button type="submit" className="btn ant-btn-primary">
              Check Online
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
