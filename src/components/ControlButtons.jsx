import { useState } from "react";
import FindandReplaceModal from "../modals/FindandReplaceModal";
import DownloadModal from "../modals/DownloadModal";

const ControlButtons = ({
  handleCopy,
  handlePaste,
  handleUppercase,
  handleLowercase,
  handleListen,
  handleSpeak,
  handleEncode64,
  handleDecode64,
  capitalizeFirstLetter,
  isTextEmpty,
  setText,
  text,
  isListening,
  handleExtractNumber,
  handleExtractLinks,
  handleExtractTexts,
  handleRemoveSpecialCharacters,
  handleFindAndReplace,
  handleUndo,
  handleRedo,
  handleDownload,
}) => {
  const [findText, setFindText] = useState("");
  const [replaceText, setReplaceText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openDownloadModal = () => {
    setIsDownloadModalOpen(true);
  };

  const closeDownloadModal = () => {
    setIsDownloadModalOpen(false);
  };
  return (
    <>
      {/* LOGO BUTTONS */}
      <div className="p-2">
        {/* Clear Text */}
        <button
          className="top-1/2 -translate-y-1/5 mr-1 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg inline-flex items-center justify-center"
          onClick={() => {
            setText("");
            props.showAlert("Text cleared!", "success");
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

        {/* Paste From Clipboard */}
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
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 20H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.429M7 8h3M8 8V4h4v2m4 0V5h-4m3 4v3a1 1 0 0 1-1 1h-3m9-3v9a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-6.397a1 1 0 0 1 .27-.683l2.434-2.603a1 1 0 0 1 .73-.317H19a1 1 0 0 1 1 1Z"
              />
            </svg>
          </abbr>
        </button>

        {/* Copy to clipboard! */}
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
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 5h6m-6 4h6M10 3v4h4V3h-4Z"
              />
            </svg>
          </abbr>
        </button>

        {/* Listen */}
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
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 16v-4a8 8 0 1 0-16 0v4m16 0v2a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 2ZM4 16v2a2 2 0 0 0 2 2h2v-6H6a2 2 0 0 0-2 2Z"
              />
            </svg>
          </abbr>
        </button>

        {/* Speak */}
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
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9v3a5.006 5.006 0 0 1-5 5h-4a5.006 5.006 0 0 1-5-5V9m7 9v3m-3 0h6M11 3h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z"
              />
            </svg>
          </abbr>
        </button>

        {/* Undo */}
        <button
          className="top-1/2 -translate-y-1/5 mr-1 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg inline-flex items-center justify-center"
          onClick={handleUndo}
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

        {/* Redo */}
        <button
          className="top-1/2 -translate-y-1/5 mr-1 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg inline-flex items-center justify-center"
          onClick={handleRedo}
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

        {/* Find */}
        <button
          className="top-1/2 -translate-y-1/5 mr-1 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg inline-flex items-center justify-center"
          onClick={openModal}
        >
          <abbr title="Find and Replace">
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
                strokeWidth="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
          </abbr>
        </button>

        {/* Download */}
        <button
          className="top-1/2 -translate-y-1/5 mr-1 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg inline-flex items-center justify-center"
          onClick={openDownloadModal}
        >
          <abbr title="Download">
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
                d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"
              />
            </svg>
          </abbr>
        </button>
      </div>

      {/* BUTTONS */}
      {/* Clear Text */}
      <button
        type="button"
        className={`mb-2 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800 ${
          isTextEmpty && "cursor-not-allowed opacity-50"
        }`}
        onClick={() => {
          setText("");
          props.showAlert("Text cleared!", "success");
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

      {/* Convert to Uppercase */}
      <button
        type="button"
        className={`mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
          ${isTextEmpty && "cursor-not-allowed opacity-50"}`}
        onClick={handleUppercase}
        disabled={isTextEmpty}
      >
        Convert to Uppercase
      </button>

      {/* Convert to Lowercase */}
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

      {/* Reverse Text */}
      <button
        type="button"
        className={`mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ${
          isTextEmpty && "cursor-not-allowed opacity-50"
        }`}
        onClick={() => {
          setText(text.split("").reverse().join(""));
          props.showAlert("Text Reversed!", "success");
        }}
        disabled={isTextEmpty}
      >
        Reverse Text
      </button>

      {/* Reverse Words */}
      <button
        type="button"
        className={`mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ${
          isTextEmpty && "cursor-not-allowed opacity-50"
        }`}
        onClick={() => {
          setText(
            text.split(" ").reverse().join(" ").split("").reverse().join("")
          );
          props.showAlert("Word Reversed!", "success");
        }}
        disabled={isTextEmpty}
      >
        Reverse Words
      </button>

      {/* Remove Extra Spaces */}
      <button
        type="button"
        className={`mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
          ${isTextEmpty && "cursor-not-allowed opacity-50"}`}
        onClick={() => {
          setText(text.split(/[ ]+/).join(" "));
          props.showAlert("Extra Spaces Removed!", "success");
        }}
        disabled={isTextEmpty}
      >
        Remove Extra Spaces
      </button>

      {/* Listen Input */}
      <button
        type="button"
        className={`mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
          ${isTextEmpty && "cursor-not-allowed opacity-50"}`}
        onClick={handleListen}
        disabled={isTextEmpty}
      >
        Listen Input
      </button>

      {/* Capitalize First Letter */}
      <button
        type="button"
        className={`mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
          ${isTextEmpty && "cursor-not-allowed opacity-50"}`}
        onClick={() => {
          setText(capitalizeFirstLetter(text));
          props.showAlert("First letter of each word capitalized!", "success");
        }}
        disabled={isTextEmpty}
      >
        Capitalize First Letter
      </button>

      {/* Decode64 */}
      <button
        type="button"
        className={`mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
          ${isTextEmpty && "cursor-not-allowed opacity-50"}`}
        onClick={handleDecode64}
        disabled={isTextEmpty}
      >
        Decode64
      </button>

      {/* Encode64 */}
      <button
        type="button"
        className={`mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
          ${isTextEmpty && "cursor-not-allowed opacity-50"}`}
        onClick={handleEncode64}
        disabled={isTextEmpty}
      >
        Encode64
      </button>

      {/* Start Listening */}
      <button
        type="button"
        className={
          "mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        }
        onClick={handleSpeak}
      >
        {isListening ? "Stop Listening" : "Start Listening"}
      </button>

      {/* Extract Numbers */}
      <button
        type="button"
        className={`mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
          ${isTextEmpty && "cursor-not-allowed opacity-50"}`}
        onClick={handleExtractNumber}
        disabled={isTextEmpty}
      >
        Extract Numbers
      </button>

      {/* Extract Links */}
      <button
        type="button"
        className={`mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
          ${isTextEmpty && "cursor-not-allowed opacity-50"}`}
        onClick={handleExtractLinks}
        disabled={isTextEmpty}
      >
        Extract Links
      </button>

      {/* Extract Texts */}
      <button
        type="button"
        className={`mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
          ${isTextEmpty && "cursor-not-allowed opacity-50"}`}
        onClick={handleExtractTexts}
        disabled={isTextEmpty}
      >
        Extract Texts
      </button>

      {/* Remove Special Characters */}
      <button
        type="button"
        className={`mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
          ${isTextEmpty && "cursor-not-allowed opacity-50"}`}
        onClick={handleRemoveSpecialCharacters}
        disabled={isTextEmpty}
      >
        Remove Special Characters
      </button>

      {/* Find and Replace */}
      <button
        className={`mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
          ${isTextEmpty && "cursor-not-allowed opacity-50"}`}
        onClick={openModal}
        disabled={isTextEmpty}
      >
        Find and Replace
      </button>

      {/* Modal for Find and Replace */}
      <FindandReplaceModal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-xl font-semibold mb-4 dark:text-white">
          Find and Replace
        </h2>
        <div className="mb-4">
          <label htmlFor="findInput" className="block mb-2 dark:text-white">
            Find:
          </label>
          <input
            type="text"
            id="findInput"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={findText}
            onChange={(e) => setFindText(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="replaceInput" className="block mb-2 dark:text-white">
            Replace with:
          </label>
          <input
            type="text"
            id="replaceInput"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={replaceText}
            onChange={(e) => setReplaceText(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded mr-2"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded"
            onClick={() => {
              handleFindAndReplace(findText, replaceText);
              closeModal();
            }}
          >
            Find and Replace
          </button>
        </div>
      </FindandReplaceModal>

      {/* Undo */}
      <button
        type="button"
        className={`mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
          ${isTextEmpty && "cursor-not-allowed opacity-50"}`}
        onClick={handleUndo}
        disabled={isTextEmpty}
      >
        Undo
      </button>

      {/* Redo */}
      <button
        type="button"
        className={`mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
          ${isTextEmpty && "cursor-not-allowed opacity-50"}`}
        onClick={handleRedo}
        disabled={isTextEmpty}
      >
        Redo
      </button>

      {/* Download */}
      <button
        className={`mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
          ${isTextEmpty && "cursor-not-allowed opacity-50"}`}
        // onClick={openDownloadModal}
        onClick={() => {
              handleDownload();
              openDownloadModal();
            }}
        disabled={isTextEmpty}
      >
        Download
      </button>

      {/* Modal for Find and Replace */}
      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={closeDownloadModal}
        text={text}
      />
    </>
  );
};

export default ControlButtons;
