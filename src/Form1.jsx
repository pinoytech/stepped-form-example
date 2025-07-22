import React from "react";
import { useVisibility } from "./hooks/useVisibility";
import { FormStyles } from "./Styles";

const Component1 = () => {
  const { currentStep, setStep } = useVisibility();

  if (currentStep !== 1) {
    return null;
  }

  return (
    <div style={FormStyles.mainDiv}>
      <div style={FormStyles.divFirstChild}>This is Form 1</div>
      <div style={FormStyles.divSecondChild}>
        <button disabled>Previous</button>
        <button onClick={() => setStep(2)}>Next</button>
      </div>
    </div>
  );
};

export default Component1;
