import { useContext } from "react";
import { VisibilityContext } from "../contexts/VisibilityContext";

export const useVisibility = () => {
  return useContext(VisibilityContext);
};
