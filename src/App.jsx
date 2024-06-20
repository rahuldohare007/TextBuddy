import MainTask from "./components/MainTask";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Alert from "./components/Alert";
import About from "./pages/About";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "true"
  );

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  // Function to toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("isDarkMode", newMode);

    // !isDarkMode
    //   ? showAlert("Dark mode has been enabled", "success!")
    //   : showAlert("Light mode has been enabled", "success!");
  };

  return (
    <>
      {/* <div className={isDarkMode ? "dark" : ""}>
        <Navbar toggleDarkMode={toggleDarkMode} alert={alert} />
        <Alert alert={alert} />
        <MainTask showAlert={showAlert} />
        <Footer />
      </div> */}

      <Router>
        <div className={isDarkMode ? "dark" : ""}>
          <Navbar toggleDarkMode={toggleDarkMode} alert={alert} />
          <Alert alert={alert} />
          <Routes>
            <Route path="/" element={<MainTask showAlert={showAlert} />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
