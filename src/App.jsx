import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import VisibilityContextProvider from "./contexts/VisibilityContextProvider";
import { FormStyles, MainStyles } from "./Styles";
import { useVisibility } from "./hooks/useVisibility";

const App = () => {
  return (
    <VisibilityContextProvider>
      <Main />
    </VisibilityContextProvider>
  );
};

function Main() {
  const { currentStep, setStep } = useVisibility();

  return (
    <div>
      <h1 style={MainStyles.h1}>Stepped Form</h1>
      <div style={FormStyles.navigation}>
        <button onClick={() => setStep(1)} disabled={currentStep === 1}>
          1
        </button>
        <button onClick={() => setStep(2)} disabled={currentStep === 2}>
          2
        </button>
        <button onClick={() => setStep(3)} disabled={currentStep === 3}>
          3
        </button>
      </div>
      <hr />

      <Form1 />
      <Form2 />
      <Form3 />
    </div>
  );
}

export default App;
