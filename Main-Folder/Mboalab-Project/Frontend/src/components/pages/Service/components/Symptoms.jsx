// resuable component to pick the level of a users symptom
import { Radio, Row, Col } from "antd";
import React, { useEffect, useState } from "react";

const Symptoms = ({ symptom, setSymptom }) => {
  const [symptomLevel, setSymptomLevel] = useState(null);

  const onChange = (e) => {
    setSymptomLevel(e.target.value);
  };

  useEffect(() => {
    setSymptomLevel(symptomLevel);
  }, [setSymptomLevel, symptomLevel]);

  // function to turn space into underscore
  const spaceToUnderscore = (str) => {
    return str.replace(/\s/g, "_");
  };

  return (
    <div>
      <Row
        type="flex"
        justify="space-between"
        style={{
          marginBottom: "10px",
          marginTop: "20px",
        }}
      >
        <Col span={6}>
          <p
            style={{
              textAlign: "left",
              marginLeft: "30px",
            }}
          >
            {symptom}
            <span
              style={{
                color: "red",
              }}
            >
              *
            </span>
          </p>
        </Col>
        <Col
          span={16}
          style={{
            textAlign: "right",
          }}
        >
          <Radio.Group onChange={onChange} value={symptomLevel}>
            <Radio name={spaceToUnderscore(symptom)} value={"No"}>
              No symptom observed 😐{" "}
            </Radio>
            <Radio name={spaceToUnderscore(symptom)} value={"Low"}>
              I am observing{" "}
              <span
                style={{
                  color: "red",
                }}
              >
                low
              </span>{" "}
              symptom 😞
            </Radio>
            <Radio name={spaceToUnderscore(symptom)} value={"High"}>
              I am observing{" "}
              <span
                style={{
                  color: "red",
                }}
              >
                high
              </span>{" "}
              symptom 😢
            </Radio>
          </Radio.Group>
        </Col>
      </Row>
      {/* a straight line  */}
      <hr
        style={{
          color: "black",
        }}
      />
    </div>
  );
};

export default Symptoms;
