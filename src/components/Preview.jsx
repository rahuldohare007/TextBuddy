const Preview = ({ text, isTextEmpty }) => {
  return (
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
  );
};

export default Preview;