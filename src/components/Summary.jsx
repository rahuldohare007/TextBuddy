const Summary = ({ wordCount, charCount, text }) => {
  return (
    <>
      <div className="pt-4">
        <h1 className="block mb-2 text-3xl font-medium text-gray-900 dark:text-white">
          Your Text Summary
        </h1>
        <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">
          <strong>{wordCount}</strong> Words, <strong>{charCount}</strong>{" "}
          Characters,
        </p>
        <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">
          <strong>{!text ? 0 : (0.008 * wordCount).toFixed(3)}</strong> Minutes
          read
        </p>
      </div>
    </>
  );
};

export default Summary;
