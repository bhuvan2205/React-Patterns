import PartialComponent from "./partial";

export const Button = ({ size = "md", text, ...props }) => {
  return (
    <button
      className={`text-white bg-blue-500 p-2 rounded-md ${
        size === "sm" ? "px-2 py-1 text-sm " : "px-4 py-2 text-base"
      }`}
      {...props}
    >
      {text}
    </button>
  );
};

export const BlueSmallButton = PartialComponent(Button, { size: "sm" });
export const BlueMediumButton = PartialComponent(Button, { size: "md" });
