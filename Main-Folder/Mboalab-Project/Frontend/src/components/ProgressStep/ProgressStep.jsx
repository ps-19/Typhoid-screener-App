import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";

const ProgressStep = ({ step, setStep }) => {
  return (
    <div className="progress__card">
      <div className="mobile__progress-bar">
        <div
          style={{
            width:
              step === 0
                ? "20%"
                : step === 1
                ? "40%"
                : step === 2
                ? "60%"
                : step === 3
                ? "80%"
                : step === 4
                ? "100%"
                : "0%",
          }}
        ></div>
      </div>
      <span
        className={step === 0 ? "current-step" : "completed-step"}
        onClick={() => {
          setStep(0);
        }}
      >
        {step >= 1 ? (
          <AiOutlineCheckCircle />
        ) : (
          <MdOutlineRadioButtonUnchecked />
        )}
        Step One
      </span>

      <span
        className={
          step === 1 ? "current-step" : step > 1 ? "completed-step" : "step"
        }
        onClick={() => {
          setStep(1);
        }}
      >
        {step >= 2 ? (
          <AiOutlineCheckCircle />
        ) : (
          <MdOutlineRadioButtonUnchecked />
        )}
        Step Two
      </span>
      <span
        className={
          step === 2 ? "current-step" : step > 2 ? "completed-step" : "step"
        }
        onClick={() => {
          setStep(2);
        }}
      >
        {step >= 3 ? (
          <AiOutlineCheckCircle />
        ) : (
          <MdOutlineRadioButtonUnchecked />
        )}
        Step Three
      </span>
      <span
        className={
          step === 3 ? "current-step" : step > 3 ? "completed-step" : "step"
        }
        onClick={() => {
          setStep(3);
        }}
      >
        {step >= 4 ? (
          <AiOutlineCheckCircle />
        ) : (
          <MdOutlineRadioButtonUnchecked />
        )}
        Step Four
      </span>
      <span
        className={
          step === 4 ? "current-step" : step > 4 ? "completed-step" : "step"
        }
        onClick={() => {
          setStep(4);
        }}
      >
        {step >= 5 ? (
          <AiOutlineCheckCircle />
        ) : (
          <MdOutlineRadioButtonUnchecked />
        )}
        Step Five
      </span>
    </div>
  );
};

export default ProgressStep;
