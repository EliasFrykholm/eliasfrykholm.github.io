import { baseColorHue, baseColorLight, baseColorSat } from "./Constants";

export const generateColor = (index: number) => {
    return `hsl(${baseColorHue + index * 10}, ${baseColorSat+10}%, ${baseColorLight- index * 2}%)`;
}

export const generateColorWithOpacity = (index: number) => {
    return `hsla(${baseColorHue + index * 10}, ${baseColorSat+10}%, ${baseColorLight- index * 2}%, 0.7)`;
}