import { ArrowDown, ArrowUp } from "lucide-react";
import React from "react";

const CustomLegend = () => {
  return (
    <div className="hidden md:flex flex-col mx-5 p-3 gap-3">
      <div className="flex gap-2">
        <div
          style={{
            backgroundColor: "#E66FD2",
            height: "12px",
            width: "12px",
            borderRadius: "9999px",
          }}
        />
        <p className="font-bold">Systolic</p>
      </div>
      <p className="font-bold text-xl mt-3">160</p>
      <div className="flex gap-2">
        <ArrowUp className="w-4 h-4" />
        <p>Higher than average</p>
      </div>

      <hr />

      <div className="flex gap-2">
        <div
          style={{
            backgroundColor: "#8C6FE6",
            height: "12px",
            width: "12px",
            borderRadius: "9999px",
          }}
        />
        <p className="font-bold">Diastolic</p>
      </div>
      <p className="font-bold text-xl mt-3">78</p>
      <div className="flex gap-2">
        <ArrowDown className="w-4 h-4" />
        <p>Lower than average</p>
      </div>
    </div>
  );
};

export default CustomLegend;
