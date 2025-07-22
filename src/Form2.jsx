import React from "react";
import { useVisibility } from "./hooks/useVisibility";
import { FormStyles } from "./Styles";
import { pokemonSchema } from "./utils/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, useFieldArray, useForm } from "react-hook-form";

const Component2 = () => {
  const { currentStep, setStep, dispatch } = useVisibility();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(pokemonSchema),
    mode: "onChange", // Enable validation on change
    defaultValues: {
      pokemons: [{ name: "" }], // Start with one empty pokemon
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "pokemons",
  });

  if (currentStep !== 2) {
    return null;
  }

  const onSubmit = (data) => {
    dispatch({ type: "SAVE_POKEMONS", payload: data });
    reset();
    setStep(3);
    console.log("Pokemon data saved:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={FormStyles.mainDiv}>
        <div style={FormStyles.divFirstChild}>
          {fields.map((item, index) => (
            <div key={item.id}>
              <label>
                Pokemon Name:
                <br />
                <div style={FormStyles.pokemonRow}>
                  <input {...register(`pokemons.${index}.name`)} />
                  <button type="button" onClick={() => remove(index)}>
                    Remove
                  </button>
                </div>
                {errors.pokemons?.[index]?.name && (
                  <p style={{ color: "red" }}>
                    {errors.pokemons[index].name.message}
                  </p>
                )}
              </label>
            </div>
          ))}
          {errors.pokemons &&
            !Array.isArray(errors.pokemons) &&
            errors.pokemons?.root?.message && (
              <p
                style={{
                  color: "red",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {errors.pokemons.root.message}
              </p>
            )}
        </div>
        <button type="button" onClick={() => append({ name: "" })}>
          Add Pokemon
        </button>
        <div style={FormStyles.divSecondChild}>
          <button onClick={() => setStep(1)}>Previous</button>
          <button type="submit">Next</button>
        </div>
      </div>
    </form>
  );
};

export default Component2;
