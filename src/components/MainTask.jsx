import { useState, useRef } from "react";
import TextInput from "./TextInput";
import ControlButtons from "./ControlButtons";
import Summary from "./Summary";
import Preview from "./Preview";

function MainTask(props) {
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const isTextEmpty = text.trim() === "";
  const textareaRef = useRef(null);

  let wordCount = text
    .trim()
    .split(" ")
    .filter((event) => event !== "").length;

  let charCount = text.trim().length;

  let mic;

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (SpeechRecognition) {
    mic = new SpeechRecognition();
    mic.continuous = true;
    mic.interimResults = true;
    mic.lang = "en-US";
  }

  const handleSpeak = () => {
    if (!mic) {
      return;
    }
    if (!isListening) {
      mic.start();
      console.log("Mic started");
      props.showAlert("Mic started!", "success");

      mic.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join("");
        setText(text + transcript);
        mic.onerror = (event) => {
          console.log(event.error);
        };
      };
    } else {
      mic.stop();
      console.log("Mic stopped");
      props.showAlert("Mic stopped!", "success");
    }

    setIsListening((prevState) => !prevState);
  };

  const handlePaste = () => {
    (navigator.clipboard || navigator.clipboard.readText)
      .readText()
      .then((text) => {
        setText(text);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  const updateText = (newText) => {
    setText(newText);
    setHistory([...history.slice(0, historyIndex + 1), newText]);
    setHistoryIndex(historyIndex + 1);
  };

  const handleOnChange = (event) => {
    const newText = event.target.value;
    updateText(newText);
  };

  const handleUppercase = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLowercase = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("message");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success");
  };

  const handleListen = () => {
    var msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
  };

  const handleEncode64 = () => {
    let newText = btoa(text);
    setText(newText);
    props.showAlert("Encoded to base64!", "success");
  };

  const handleDecode64 = () => {
    try {
      let newText = atob(text);
      setText(newText);
      props.showAlert("Base64 decoded!", "success");
    } catch (error) {
      props.showAlert("Invalid String Entered!", "warning");
    }
  };

  const handleExtractNumber = () => {
    const numbers = text.match(/\d+/g);
    if (numbers) {
      const extractedNumbers = numbers.join(", ");
      setText(extractedNumbers);
      props.showAlert("Numbers Extracted", "success");
    } else {
      props.showAlert("No numbers found in the input!", "warning");
    }
  };

  const handleExtractLinks = () => {
    const urls = text.match(/\bhttps?:\/\/\S+/gi);
    if (urls) {
      const extractedLinks = urls.join("\n");
      setText(extractedLinks);
      props.showAlert("Links Extracted", "success");
    } else {
      props.showAlert("No links found in the input!", "warning");
    }
  };

  const handleExtractTexts = () => {
    const extracText = text.replace(/https?:\/\/\S+|[^\w\s]|[\d]/g, "");
    if (extracText) {
      setText(extracText);
      props.showAlert("Texts Extracted", "success");
    } else {
      props.showAlert("No text found in the input!", "warning");
    }
  };

  const handleRemoveSpecialCharacters = () => {
    const removeSepecialCharacter = text.replace(/[^\w\s]/g, "");
    if (removeSepecialCharacter) {
      setText(removeSepecialCharacter);
      props.showAlert("Special characters removed", "success");
    }else {
      props.showAlert("No special character found in the input!", "warning");
    }
  };

  // FIND AND REPLACE
  const handleFindAndReplace = (findText, replaceText) => {
    if (!findText || !replaceText) {
      props.showAlert("Please enter both Find and Replace texts", "error");
      return;
    }

    const regex = new RegExp(findText, "gi");
    if (!text.match(regex)) {
      props.showAlert("Find text is not present", "error");
      return;
    }

    const newText = text.replace(regex, replaceText);

    const updatedHistory = [...history.slice(0, historyIndex + 1), newText];
    setHistory(updatedHistory);

    setHistoryIndex(historyIndex + 1);

    setText(newText);
    props.showAlert("Text updated with replacements", "success");
  };

  // Undo
  const handleUndo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setText(history[historyIndex - 1]);
    }
  };

  // Redo
  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setText(history[historyIndex + 1]);
    }
  };

  // Download

  function capitalizeFirstLetter(string) {
    let words = string.split(" ");
    let capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(" ");
  }

  return (
    <>
      <div className="px-20 pt-16 dark:bg-gray-700">
        <label
          htmlFor="message"
          className="block mb-2 text-3xl font-medium text-gray-900 dark:text-white"
        >
          Enter the text to analyze below
        </label>
        <TextInput
          text={text}
          handleOnChange={handleOnChange}
          textareaRef={textareaRef}
        />
        <ControlButtons
          handleCopy={handleCopy}
          handlePaste={handlePaste}
          handleUppercase={handleUppercase}
          handleLowercase={handleLowercase}
          handleListen={handleListen}
          handleSpeak={handleSpeak}
          handleEncode64={handleEncode64}
          handleDecode64={handleDecode64}
          capitalizeFirstLetter={capitalizeFirstLetter}
          isTextEmpty={isTextEmpty}
          setText={setText}
          text={text}
          isListening={isListening}
          handleExtractNumber={handleExtractNumber}
          handleExtractLinks={handleExtractLinks}
          handleExtractTexts={handleExtractTexts}
          handleRemoveSpecialCharacters={handleRemoveSpecialCharacters}
          handleFindAndReplace={handleFindAndReplace}
          handleUndo={handleUndo}
          handleRedo={handleRedo}
        />
        <Summary wordCount={wordCount} charCount={charCount} text={text} />
        <Preview text={text} isTextEmpty={isTextEmpty} />
      </div>
    </>
  );
}

export default MainTask;
