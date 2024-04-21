// // import MainTask from "./MainTask";
// // import Navbar from "./Navbar";

// // function App() {
// //   return (
// //     <>
// //       <Navbar />
// //       <MainTask/>
// //     </>
// //   );
// // }

// // export default App;

// import MainTask from "./components/MainTask";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer"
// import DarkMode from "./components/DarkMode";
// import { useState } from "react";

// function App() {
//   const [isDarkMode, setIsDarkMode] = useState(
//     localStorage.getItem("isDarkMode") === "true"
//   );

//   // Function to toggle dark mode
//   const toggleDarkMode = () => {
//     const newMode = !isDarkMode;
//     setIsDarkMode(newMode);
//     localStorage.setItem("isDarkMode", newMode);
//   };
//   return (
//     <>
//       <div className={isDarkMode ? "dark" : ""}>
//         <Navbar />
//         <DarkMode toggleDarkMode={toggleDarkMode}/>
//         <MainTask style={{height:"auto"}}/>
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default App;

import MainTask from "./components/MainTasks/MainTask";
// import MainTask from "./components/MainTask";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
import Alert from "./components/Alert";

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
      setAlert(null)
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
      <div className={isDarkMode ? "dark" : ""}>
        <Navbar toggleDarkMode={toggleDarkMode} alert={alert} />
        <Alert alert={alert} />
        <MainTask showAlert={showAlert} />
        <Footer />
      </div>
    </>
  );
}

export default App;
