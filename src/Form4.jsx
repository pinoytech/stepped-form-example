import React from "react";
import { useVisibility } from "./hooks/useVisibility";
import { FormStyles } from "./Styles";

const Component4 = () => {
  const { currentStep, setStep, state, dispatch } = useVisibility();

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
        <div>
          <p>
            <strong>Trainer:</strong> {state.trainer?.name}
          </p>
          <p>
            <strong>Birthdate:</strong> {state.trainer?.birthdate}
          </p>
          <p>
            <strong>Pokemons: {state.pokemons.length}</strong>
          </p>
          <ul>
            {state.pokemons.map((pokemon, index) => (
              <li key={index}>{pokemon.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div style={FormStyles.divSecondChild}>
        <button onClick={reset}>Restart</button>
      </div>
    </div>
  );
};

export default Component4;
