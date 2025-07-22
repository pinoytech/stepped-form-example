import React, { useState } from "react";
import { VisibilityContext } from "./VisibilityContext";

export const VisibilityContextProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const setStep = (step) => {
    setCurrentStep(step);
  };

  return (
    <VisibilityContext.Provider value={{ currentStep, setStep }}>
      {children}
    </VisibilityContext.Provider>
  );
};

export default VisibilityContextProvider;
