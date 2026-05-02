import { Sun } from "lucide-react";
import React from "react";

const Spinner = ({ size }) => {
  return (
    <div className="text-zinc-500">
      <Sun size={size} className="animate-spin animation-duration-[1.5s]" />
    </div>
  );
};

export default Spinner;
