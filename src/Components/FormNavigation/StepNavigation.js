import React from "react";
import Step from "./Step";

export default function StepNavigation({ labelStep, currentStep }) {
  return (
    <>
      {labelStep.map((item, index) => (
        <Step
          key={index}
          index={index}
          label={item}
          selected={currentStep === index + 1}
        ></Step>
      ))}
    </>
  );
}
