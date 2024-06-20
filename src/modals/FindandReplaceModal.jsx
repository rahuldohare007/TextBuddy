function FindandReplaceModal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 flex items-center justify-center ">
        <div className="bg-white p-6 rounded-lg max-w-md w-full dark:bg-gray-600 ">
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
          <div className="mt-4">{children}</div>
        </div>
      </div>
    );
  }
  
  export default FindandReplaceModal;