import React, { useState } from "react";
import { Button } from "react-bootstrap";
import StepNavigation from "./StepNavigation";

export default function ProgressNavigation({ labelStep, currentStep }) {
  return (
    <div className="d-flex justify-content-between">
      <StepNavigation labelStep={labelStep} currentStep={currentStep} />
      {/* <p>Selected Step: {currentStep}</p> */}
    </div>
  );
}
