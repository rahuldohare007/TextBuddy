import { useState } from "react";
import { jsPDF } from "jspdf";

function DownloadModal({ isOpen, onClose, text }) {
  const [format, setFormat] = useState("text");
  const [fileName, setFileName] = useState("document");

  if (!isOpen) return null;

  const handleDownload = () => {
    let blob;
    if (!text) {
      window.alert("Please write something in the textarea before downloading.");
      return;
    }

    if (!fileName.trim()) {
      window.alert("File name cannot be empty.");
      return;
    }

    if (format === "pdf") {
      const doc = new jsPDF();
      doc.text(text, 10, 10);
      blob = doc.output("blob");
    } else {
      blob = new Blob([text], { type: "text/plain" });
    }

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${fileName}.${format === "pdf" ? "pdf" : "txt"}`;
    document.body.appendChild(a);
    a.click();

    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-md w-full dark:bg-gray-600">
        <div className="flex justify-end">
          <button
            className="text-gray-800 dark:text-white hover:text-gray-800 focus:outline-none"
            onClick={onClose}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <h2 className="text-xl font-semibold mb-4 dark:text-white">
          Download File
        </h2>
        <div className="mt-4">
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-white">
              Format:
            </label>
            <select
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              value={format}
              onChange={(e) => setFormat(e.target.value)}
            >
              <option value="pdf">PDF</option>
              <option value="text">Text</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-white">
              File Name:
            </label>
            <input
              type="text"
              className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
            />
          </div>
          <div className="mt-6 flex justify-end">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded"
              onClick={handleDownload}
            >
              Download
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded ml-2"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadModal;
