import { useState } from "react";
import "./styles.css";
import Message from "./components/Message";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  const passCode = "1001";
  
  const [userInput, setUserInput] = useState({
    charOne: "",
    charTwo: "",
    charThree: "",
    charFour: ""
  });
  
  const [verified, setVerified] = useState(undefined);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value.length <= 1) {
      setUserInput((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputCode = userInput.charOne + userInput.charTwo + userInput.charThree + userInput.charFour;
    setVerified(inputCode === passCode);
  };

  return (
    <div className="wrapper">
      <Header />
      <form onSubmit={handleSubmit}>
        <Message status={verified} />
        <div>
          <input required type="password" name="charOne" maxLength="1" onChange={handleChange} />
          <input required type="password" name="charTwo" maxLength="1" onChange={handleChange} />
          <input required type="password" name="charThree" maxLength="1" onChange={handleChange} />
          <input required type="password" name="charFour" maxLength="1" onChange={handleChange} />
        </div>
        <button disabled={verified === true}>Gönder</button>
      </form>
      <Footer />
    </div>
  );
}
