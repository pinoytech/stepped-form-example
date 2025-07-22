import React, { useReducer, useState } from "react";
import { VisibilityContext } from "./VisibilityContext";

const initialState = {
  trainer: {
    name: "",
    birthdate: "",
  },
  pokemons: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SAVE_TRAINER":
      return { ...state, trainer: action.payload };
    case "SAVE_POKEMONS":
      return { ...state, pokemons: [...action.payload.pokemons] };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export const VisibilityContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [currentStep, setCurrentStep] = useState(1);

  const setStep = (step) => {
    setCurrentStep(step);
  };

  return (
    <VisibilityContext.Provider
      value={{ currentStep, setStep, state, dispatch }}
    >
      {children}
    </VisibilityContext.Provider>
  );
};

export default VisibilityContextProvider;
