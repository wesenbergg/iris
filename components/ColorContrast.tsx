"use client";
import { contrast, hexToRgb, luminance } from "@/utils/color";
import { useCallback, useMemo, useState } from "react";

const ColorContrast = () => {
  const [color1, setColor1] = useState("#ff3434");

  // 82, 128, 97 // Luminance 0.1801
  return (
    <div className="mb-8 flex flex-col justify-start">
      <input
        type="color"
        value={color1}
        onChange={(e) => setColor1(e.target.value)}
        className="self-end"
      />
      <div className="mb-24 flex space-x-32">
        <div>
          <button
            className="my-4 block rounded px-8 py-2 font-bold text-white shadow"
            style={{ background: color1 }}
          >
            White Text Button
          </button>
          <span>contrast: {contrast(hexToRgb(color1), [255, 255, 255])}</span>
        </div>
        <div>
          <button
            className="my-4 block rounded px-8 py-2 font-bold text-black shadow"
            style={{ background: color1 }}
          >
            Black Text Button
          </button>
          <span>contrast: {contrast(hexToRgb(color1), [0, 0, 0])}</span>
        </div>
      </div>
      <span>luminance: {luminance(hexToRgb(color1))}</span>
      {/* <span>
        contrast: {(luminance([188, 188, 188]) + 0.05) / (0.05 + 0.05)}
      </span> */}
    </div>
  );
};

export default ColorContrast;
