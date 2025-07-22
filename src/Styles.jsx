export const MainStyles = {
  h1: {
    textAlign: "center",
    color: "#333",
    fontSize: "2rem",
  },
};

export const FormStyles = {
  navigation: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around ",
  },
  mainDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "20px",
    margin: "20px auto",
    width: "80%",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
  },
  divFirstChild: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "20px",
  },
  pokemonRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  divSecondChild: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    color: "#333",
    transition: "all 0.3s ease",
  },
  button: {
    padding: "10px 15px",
    borderRadius: "3px",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    border: "1px solid #ccc",
    width: "300px",
    margin: "10px auto",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
    cursor: "not-allowed",
  },
};
