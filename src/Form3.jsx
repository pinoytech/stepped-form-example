import React from "react";
import { useVisibility } from "./hooks/useVisibility";
import { FormStyles } from "./Styles";

const Component3 = () => {
  const { currentStep, setStep } = useVisibility();

  if (currentStep !== 3) {
    return null;
  }

  return (
    <div style={FormStyles.mainDiv}>
      <div style={FormStyles.divFirstChild}>This is Form 3</div>
      <div style={FormStyles.divSecondChild}>
        <button onClick={() => setStep(2)}>Previous</button>
        <button disabled>Next</button>
      </div>
    </div>
  );
};

export default Component3;
