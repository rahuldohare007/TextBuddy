// export default function Alert(props) {
//   const capitalize = (word) => {
//     const lower = word.toLowerCase();
//     return lower.charAt(0).toUpperCase() + lower.slice(1);
//   };
//   return (
//     <div style={{ height: "50px" }}>
//       {props.alert && (
//         <div
//           className={`p-4 mt-16 text-sm text-green-800 bg-green-50 dark:bg-gray-800 dark:text-green-400 alert-${props.alert.type}`}
//           role="alert"
//         >
//           <span className="font-medium">{capitalize(props.alert.type)}</span>{" "}
//           {props.alert.msg}
//           {console.log(props.alert.type)}
//         </div>
//       )}
//     </div>
//   );
// }

export default function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  const getAlertStyles = (type) => {
    switch (type) {
      case "success":
        return "text-green-800 bg-green-70 dark:bg-green-800 dark:text-green-400";
      case "warning":
        return "text-yellow-800 bg-yellow-70 dark:bg-yellow-800 dark:text-yellow-400";
      case "error":
        return "text-red-800 bg-red-70 dark:bg-red-800 dark:text-red-400";
      default:
        return "text-gray-800 bg-gray-70 dark:bg-gray-800 dark:text-gray-400";
    }
  };

  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`p-4 mt-16 text-sm ${getAlertStyles(props.alert.type)}`}
          role="alert"
        >
          <span className="font-medium">{capitalize(props.alert.type)}</span>{" "}
          {props.alert.msg}
        </div>
      )}
    </div>
  );
}
