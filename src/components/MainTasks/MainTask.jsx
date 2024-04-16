import { useState } from "react";

function MainTask(props) {
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const isTextEmpty = text.trim() === "";

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

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUppercase = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase!", "success!");
  };

  const handleLowercase = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase!", "success!");
  };

  const handleCopy = () => {
    var text = document.getElementById("message");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success!");
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

  function capitalizeFirstLetter(string) {
    let words = string.split(" ");
    let capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(" ");
  }

  return (
    <>
      <div className="px-20 pt-24 z-0 dark:bg-gray-700">
        <label
          htmlFor="message"
          className="block mb-2 text-3xl font-medium text-gray-900 dark:text-white"
        >
          Enter the text to analyze below
        </label>
        <textarea
          id="message"
          rows="10"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <div className="p-2">
          <button
            className="top-1/2 -translate-y-1/5 mr-1 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg inline-flex items-center justify-center"
            onClick={() => {
              setText("");
              props.showAlert("Text cleared!", "success!");
            }}
          >
            <abbr title="Clear Text">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
            </abbr>
          </button>
          <button
            className="top-1/2 -translate-y-1/5 mr-1 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg inline-flex items-center justify-center"
            onClick={handlePaste}
          >
            <abbr title="Paste from clipboard!">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M6.5 3.85c0-.47.392-.85.875-.85h5.25c.483 0 .875.38.875.85h1.75c.966 0 1.75.761 1.75 1.7V6h-1c-.728 0-1.732-.06-2.434.095a4.01 4.01 0 0 0-.88.307.91.91 0 0 0-.061-.002h-.875V4.7h-3.5v1.7h-.875a.863.863 0 0 0-.875.85c0 .47.392.85.875.85h3.36L9.077 9.871a4 4 0 0 0-.892 1.526C7.97 12.083 8 13.268 8 14v5c0 .729.195 1.412.535 2H4.75C3.784 21 3 20.239 3 19.3V5.55c0-.939.784-1.7 1.75-1.7H6.5Z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M14 8.048V12h-3.907a2 2 0 0 1 .446-.763l2.434-2.603A2 2 0 0 1 14 8.048ZM16 8v4a2 2 0 0 1-2 2h-4v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-3Z"
                  clipRule="evenodd"
                />
              </svg>
            </abbr>
          </button>
          <button
            className="top-1/2 -translate-y-1/5 mr-1 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg inline-flex items-center justify-center"
            onClick={handleCopy}
          >
            <abbr title="Copy to clipboard!">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2Zm6 1h-4v2H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-1V4Zm-6 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z"
                  clipRule="evenodd"
                />
              </svg>
            </abbr>
          </button>
          <button
            className="top-1/2 -translate-y-1/5 mr-1 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg inline-flex items-center justify-center"
            onClick={handleListen}
          >
            <abbr title="Listen">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 5a7 7 0 0 0-7 7v1.17c.313-.11.65-.17 1-.17h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3v-6a9 9 0 0 1 18 0v6a3 3 0 0 1-3 3h-2a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h2c.35 0 .687.06 1 .17V12a7 7 0 0 0-7-7Z"
                  clipRule="evenodd"
                />
              </svg>
            </abbr>
          </button>
          <button
            className="top-1/2 -translate-y-1/5 mr-1 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg inline-flex items-center justify-center"
            onClick={handleSpeak}
          >
            <abbr title="Speak">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M5 8a1 1 0 0 1 1 1v3a4.006 4.006 0 0 0 4 4h4a4.006 4.006 0 0 0 4-4V9a1 1 0 1 1 2 0v3.001A6.006 6.006 0 0 1 14.001 18H13v2h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-2H9.999A6.006 6.006 0 0 1 4 12.001V9a1 1 0 0 1 1-1Z"
                  clipRule="evenodd"
                />
                <path d="M7 6a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4V6Z" />
              </svg>
            </abbr>
          </button>
          <button
            className="top-1/2 -translate-y-1/5 mr-1 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg inline-flex items-center justify-center"
            onClick={handleSpeak}
          >
            <abbr title="Undo">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 9h13a5 5 0 0 1 0 10H7M3 9l4-4M3 9l4 4"
                />
              </svg>
            </abbr>
          </button>
          <button
            className="top-1/2 -translate-y-1/5 mr-1 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg inline-flex items-center justify-center"
            onClick={handleSpeak}
          >
            <abbr title="Redo">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 9H8a5 5 0 0 0 0 10h9m4-10-4-4m4 4-4 4"
                />
              </svg>
            </abbr>
          </button>
          <button
            className="top-1/2 -translate-y-1/5 mr-1 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg inline-flex items-center justify-center"
            onClick={handleSpeak}
          >
            <abbr title="Find">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z" />
                <path
                  fillRule="evenodd"
                  d="M21.707 21.707a1 1 0 0 1-1.414 0l-3.5-3.5a1 1 0 0 1 1.414-1.414l3.5 3.5a1 1 0 0 1 0 1.414Z"
                  clipRule="evenodd"
                />
              </svg>
            </abbr>
          </button>
          <button
            className="top-1/2 -translate-y-1/5 mr-1 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg inline-flex items-center justify-center"
            onClick={handleSpeak}
          >
            <abbr title="Download">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M13 11.15V4a1 1 0 1 0-2 0v7.15L8.78 8.374a1 1 0 1 0-1.56 1.25l4 5a1 1 0 0 0 1.56 0l4-5a1 1 0 1 0-1.56-1.25L13 11.15Z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M9.657 15.874 7.358 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.358l-2.3 2.874a3 3 0 0 1-4.685 0ZM17 16a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z"
                  clipRule="evenodd"
                />
              </svg>
            </abbr>
          </button>
        </div>
        <button
          type="button"
          className={`mb-2 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800 ${
            isTextEmpty && "cursor-not-allowed opacity-50"
          }`}
          onClick={() => {
            setText("");
            props.showAlert("Text cleared!", "success!");
          }}
          disabled={isTextEmpty}
        >
          Clear Text
        </button>

        {/* Copy Button */}
        <button
          type="button"
          className={`focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 ${
            isTextEmpty && "cursor-not-allowed opacity-50"
          }`}
          onClick={handleCopy}
          disabled={isTextEmpty}
        >
          Copy Text
        </button>

        {/* Paste from clipboard */}
        <button
          type="button"
          className={
            "mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          }
          onClick={handlePaste}
        >
          Paste from clipboard
        </button>

        <button
          type="button"
          className={`mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
          ${isTextEmpty && "cursor-not-allowed opacity-50"}`}
          onClick={handleUppercase}
          disabled={isTextEmpty}
        >
          Convert to Uppercase
        </button>
        <button
          type="button"
          className={`mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ${
            isTextEmpty && "cursor-not-allowed opacity-50"
          }`}
          onClick={handleLowercase}
          disabled={isTextEmpty}
        >
          Convert to Lowercase
        </button>

        <button
          type="button"
          className={`mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ${
            isTextEmpty && "cursor-not-allowed opacity-50"
          }`}
          onClick={() => {
            setText(text.split("").reverse().join(""));
            props.showAlert("Text Reversed!", "success!");
          }}
          disabled={isTextEmpty}
        >
          Reverse Text
        </button>
        <button
          type="button"
          className={`mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ${
            isTextEmpty && "cursor-not-allowed opacity-50"
          }`}
          onClick={() => {
            setText(
              text.split(" ").reverse().join(" ").split("").reverse().join("")
            );
            props.showAlert("Word Reversed!", "success!");
          }}
          disabled={isTextEmpty}
        >
          Reverse Words
        </button>
        <button
          type="button"
          className={`mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
          ${isTextEmpty && "cursor-not-allowed opacity-50"}`}
          onClick={() => {
            setText(text.split(/[ ]+/).join(" "));
            props.showAlert("Extra Spaces Removed!", "success!");
          }}
          disabled={isTextEmpty}
        >
          Remove Extra Spaces
        </button>
        <button
          type="button"
          className={`mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
          ${isTextEmpty && "cursor-not-allowed opacity-50"}`}
          onClick={handleListen}
          disabled={isTextEmpty}
        >
          Listen Input
        </button>
        <button
          type="button"
          className={`mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
          ${isTextEmpty && "cursor-not-allowed opacity-50"}`}
          onClick={() => {
            setText(capitalizeFirstLetter(text));
            props.showAlert(
              "First letter of each word capitalized!",
              "success!"
            );
          }}
          disabled={isTextEmpty}
        >
          Capitalize First Letter
        </button>
        <button
          type="button"
          className={`mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
          ${isTextEmpty && "cursor-not-allowed opacity-50"}`}
          onClick={handleDecode64}
          disabled={isTextEmpty}
        >
          Decode64
        </button>
        <button
          type="button"
          className={`mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
          ${isTextEmpty && "cursor-not-allowed opacity-50"}`}
          onClick={handleEncode64}
          disabled={isTextEmpty}
        >
          Encode64
        </button>

        <button
          type="button"
          className={
            "mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          }
          onClick={handleSpeak}
        >
          {isListening ? "Stop Listening" : "Start Listening"}
        </button>

        <div className="pt-4">
          <h1 className="block mb-2 text-3xl font-medium text-gray-900 dark:text-white">
            Your Text Summary
          </h1>
          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">
            <strong>{wordCount}</strong> Words, <strong>{charCount}</strong>{" "}
            Characters,
          </p>
          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">
            <strong>{!text ? 0 : (0.008 * wordCount).toFixed(3)}</strong>{" "}
            Minutes read
          </p>
        </div>
        <div className="pt-4">
          <h1 className="block mb-2 text-3xl font-medium text-gray-900 dark:text-white">
            Preview
          </h1>
          <p
            className="block pb-3 text-sm font-medium text-gray-600 dark:text-gray-400"
            style={{ minHeight: "77px" }}
          >
            {isTextEmpty ? "Enter something to preview it here" : text}
          </p>
        </div>
      </div>
    </>
  );
}

export default MainTask;
