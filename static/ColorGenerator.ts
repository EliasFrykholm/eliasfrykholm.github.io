import { baseColorHue, baseColorLight, baseColorSat } from "./Constants";

export const generateColor = (index: number) => {
    return `hsl(${baseColorHue + index * 10}, ${baseColorSat}%, ${baseColorLight- index * 2}%)`;
}