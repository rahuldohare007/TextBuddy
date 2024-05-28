export default function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ height: "50px"}}>
      {props.alert && (
        <div
          className={`p-4 mt-16 text-sm text-green-800 bg-green-50 dark:bg-gray-800 dark:text-green-400 alert-${props.alert.type}`}
          role="alert"
        >
          <span className="font-medium">{capitalize(props.alert.type)}</span>{" "}
          {props.alert.msg}
        </div>
      )}
    </div>
  );
}
