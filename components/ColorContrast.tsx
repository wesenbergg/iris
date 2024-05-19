import { contrast, luminance } from "@/utils/color";

const ColorContrast = () => {
  const color1: [number, number, number] = [234, 50, 50];
  const color2: [number, number, number] = [0, 0, 0];

  return (
    <div className="mb-8 flex flex-col justify-start">
      <div
        className="mx-4 my-4 h-16 w-16 rounded shadow"
        style={{ background: `rgb(${color1[0]}, ${color1[1]}, ${color1[2]})` }}
      >
        <span
          style={{ color: `rgb(${color2[0]}, ${color2[1]}, ${color2[2]})` }}
        >
          {contrast(color1, color2).toFixed(2)}
        </span>
      </div>
      <span>{(luminance([188, 188, 188]) + 0.05) / (0.05 + 0.05)}</span>
    </div>
  );
};

export default ColorContrast;
