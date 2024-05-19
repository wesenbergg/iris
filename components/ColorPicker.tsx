"use client";

import { useState } from "react";
import Btn from "./essentials/Button";
import { contrast } from "@/utils/color";

type Props = {};

const ColorPicker = ({}: Props) => {
  const [color, setColor] = useState<Array<number>>([234, 50, 50]);
  const colorShades: Array<[number, number, number]> = Array(10)
    .fill(0)
    .map((_, i) => [color[0], (95 - i * 8) % 100, (95 - i * 9) % 100]);

  const generateColor = (c: any = null) => {
    if (c) {
      return `hsl(${c[0]}, ${c[1]}%, ${c[2]}%)`;
    }
    return `hsl(${color[0]}, ${color[1]}%, ${color[2]}%)`;
  };

  const drawColor = () => {
    const h = Math.round(Math.random() * 360);
    const s = Math.round(Math.random() * 100);
    const l = Math.round(Math.random() * 100);
    return setColor([h, s, l]);
  };

  return (
    <form>
      <div
        className="m-auto mb-8 h-16 w-16"
        style={{ background: generateColor() }}
      />
      <div className="flex justify-start">
        {colorShades.map((shade, i) => (
          <div
            key={i}
            className="mx-4 mb-8 h-16 w-16 rounded shadow"
            style={{
              background: generateColor(shade),
            }}
          />
        ))}
      </div>
      <div className="flex justify-start">
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="mx-4 mb-8 h-16 w-16 rounded shadow"
              style={{
                background: `hsl(${color[0]}, ${color[1]}%, ${
                  (95 - i * 9) % 100
                }%)`,
              }}
            />
          ))}
      </div>
      <fieldset>
        <div>
          <label htmlFor="color-h">Hue</label>
          <input
            min={0}
            max={360}
            type="range"
            id="color-h"
            name="color"
            value={color[0]}
            onChange={(e) =>
              setColor((prev) => [Number(e.target.value), prev[1], prev[2]])
            }
          />
        </div>
        <div>
          <label htmlFor="color-s">Saturation</label>
          <input
            min={0}
            max={100}
            type="range"
            id="color-s"
            name="color"
            value={color[1]}
            onChange={(e) =>
              setColor((prev) => [prev[0], Number(e.target.value), prev[2]])
            }
          />
        </div>
        <div>
          <label htmlFor="color-l">Light</label>
          <input
            min={0}
            max={100}
            type="range"
            id="color-l"
            name="color"
            value={color[2]}
            onChange={(e) =>
              setColor((prev) => [prev[0], prev[1], Number(e.target.value)])
            }
          />
        </div>
      </fieldset>
      <Btn onClick={drawColor}>Randomise</Btn>
    </form>
  );
};

export default ColorPicker;
