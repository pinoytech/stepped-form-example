import React from "react";
import { useVisibility } from "./hooks/useVisibility";
import { FormStyles } from "./Styles";
import { agreeToTermsSchema } from "./utils/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const Component3 = () => {
  const { currentStep, setStep, dispatch } = useVisibility();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(agreeToTermsSchema),
    defaultValues: {
      agreeToTerms: false,
    },
  });

  const onSubmit = (data) => {
    dispatch({ type: "AGREE_TO_TERMS", payload: data });
    reset();
    setStep(4);
    console.log("Agreed to Terms:", data);
  };

  if (currentStep !== 3) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={FormStyles.mainDiv}>
        <div style={FormStyles.divFirstChild}>
          <label>
            <input type="checkbox" {...register("agreeToTerms")} />
            Agree to Terms
            {errors.agreeToTerms && (
              <p style={{ color: "red" }}>{errors.agreeToTerms.message}</p>
            )}
          </label>
        </div>
        <div style={FormStyles.divSecondChild}>
          <button onClick={() => setStep(2)}>Previous</button>
          <button type="submit">Next</button>
        </div>
      </div>
    </form>
  );
};

export default Component3;
