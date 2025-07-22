import React from "react";
import { useVisibility } from "./hooks/useVisibility";
import { FormStyles } from "./Styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { trainerSchema } from "./utils/validationSchema";
import { useForm } from "react-hook-form";

const Component1 = () => {
  const { currentStep, setStep, dispatch } = useVisibility();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(trainerSchema),
    defaultValues: {
      name: "",
      birthdate: "",
    },
  });

  const onSubmit = (data) => {
    dispatch({ type: "SAVE_TRAINER", payload: data });
    reset();
    setStep(2);
    console.log("Pokemon trainer data:", data);
  };

  if (currentStep !== 1) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={FormStyles.mainDiv}>
        <div style={FormStyles.divFirstChild}>
          <label>
            Name:
            <br />
            <input {...register("name")} />
            {errors.name && (
              <p style={{ color: "red" }}>{errors.name.message}</p>
            )}
          </label>
          <label>
            Birthdate: <br />
            <input type="date" {...register("birthdate")} />
            {errors.birthdate && (
              <p style={{ color: "red" }}>{errors.birthdate.message}</p>
            )}
          </label>
        </div>
        <div style={FormStyles.divSecondChild}>
          <button disabled>Previous</button>
          <button type="submit">Next</button>
        </div>
      </div>
    </form>
  );
};

export default Component1;
