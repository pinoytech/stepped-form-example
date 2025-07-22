import React from "react";
import { useVisibility } from "./hooks/useVisibility";
import { FormStyles } from "./Styles";

const Component2 = () => {
  const { currentStep, setStep } = useVisibility();

  if (currentStep !== 2) {
    return null;
  }

  return (
    <div style={FormStyles.mainDiv}>
      <div style={FormStyles.divFirstChild}>This is Form 2</div>
      <div style={FormStyles.divSecondChild}>
        <button onClick={() => setStep(1)}>Previous</button>
        <button onClick={() => setStep(3)}>Next</button>
      </div>
    </div>
  );
};

export default Component2;
