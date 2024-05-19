"use client";

import { contrast, hslToRgb } from "@/utils/color";
import H from "./essentials/Heading";
import Text from "./essentials/Text";

const ColorContrast = () => {
  const color = [234, 50, 50];
  const colorShades: Array<[number, number, number]> = Array(10)
    .fill(0)
    .map((_, i) => [color[0], (95 - i * 8) % 100, (95 - i * 9) % 100]);
  const colorShadesRgb = colorShades.map((color) => hslToRgb(...color));

  return (
    <div>
      <H tag="h2">Color Contrast</H>
      <div>
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <tr
              key={i}
              className="mb-8 flex flex-row justify-start"
              style={{
                background: `hsl(${color[0]}, ${(95 - i * 8) % 100}%, ${
                  (95 - i * 9) % 100
                }%)`,
              }}
            >
              {Array(10)
                .fill(0)
                .map((_, j) => (
                  <>
                    <div
                      key={i}
                      className="mx-4 my-4 h-16 w-16 rounded shadow"
                      style={{
                        background: `hsl(${color[0]}, ${(95 - j * 8) % 100}%, ${
                          (95 - j * 9) % 100
                        }%)`,
                      }}
                    >
                      <span>
                        {contrast(colorShadesRgb[i], colorShadesRgb[j]).toFixed(
                          2,
                        )}
                      </span>
                    </div>
                  </>
                ))}
            </tr>
          ))}
      </div>
    </div>
  );
};

export default ColorContrast;
