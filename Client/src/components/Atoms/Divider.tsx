import React from "react";

interface DividerProps {
  // Add any props you need here
}

const Divider: React.FC<DividerProps> = () => {
  return (
    <div
      className="w-full h-px my-3"
      style={{
        backgroundColor: "#B4B4B4",
      }}
    ></div>
  );
};

export default Divider;
