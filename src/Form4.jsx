import React from "react";
import { useVisibility } from "./hooks/useVisibility";
import { FormStyles } from "./Styles";

const Component3 = () => {
  const { currentStep, setStep, dispatch } = useVisibility();

  const reset = () => {
    dispatch({ type: "RESET" });
    setStep(1);
  };

  if (currentStep !== 4) {
    return null;
  }

  return (
    <div style={FormStyles.mainDiv}>
      <div style={FormStyles.divFirstChild}>
        <h3>Congratulations!</h3>
      </div>
      <div style={FormStyles.divSecondChild}>
        <button onClick={reset}>Restart</button>
      </div>
    </div>
  );
};

export default Component3;
