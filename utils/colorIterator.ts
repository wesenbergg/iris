import { luminance } from "./color";

/**
 * Generates colors with over 4.5 contrast on black and white. This may freeze your browser if the precision number is too low.
 * @param precision number 1-255. The higher the number, the fewer colors are generated.
 * @returns 
 */
export const generateA11yRgbColors = (precision: number) => {
  const colors = [];
  for (let r = 0; r <= 255; r += precision) {
    for (let g = 0; g <= 255; g += precision) {
      for (let b = 0; b <= 255; b += precision) {
        const lum = luminance([r, g, b]);
        if (lum < 0.18333 && lum > 0.17777) {
          colors.push([r, g, b]);
        }
      }
    }
  }
  return colors;
}