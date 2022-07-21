export type HslColor = {
    hue: number;
    saturation: number;
    light: number;
}

const baseColorHue = 121;
const baseColorSat = 26;
const baseColorLight = 56;
const baseColorOpacity = 0.7;

export const generateColor = (index: number): HslColor => {
    return {
        hue: baseColorHue + index * 10,
        saturation: baseColorSat,
        light: baseColorLight
    }
}

export const generateHslString = (color: HslColor) => {
    return `hsl(${color.hue}, ${color.saturation}%, ${color.light}%)`;
}

export const generateHslaString = (color: HslColor, opacity?: number) => {
    return `hsla(${color.hue}, ${color.saturation}%, ${color.light}%, ${opacity || baseColorOpacity})`;
}

export const generateGradient = (baseColor: HslColor, angle: number, colorOffset: HslColor, transparent?: boolean) => {
    const fromColor: HslColor = {
        hue: (baseColor.hue - colorOffset.hue/2) % 360,
        saturation: baseColor.saturation - colorOffset.saturation/2,
        light: baseColor.light - colorOffset.light/2
    }
    const toColor: HslColor = {
        hue: (baseColor.hue + colorOffset.hue/2) % 360,
        saturation: baseColor.saturation + colorOffset.saturation/2,
        light: baseColor.light + colorOffset.light/2
    }

    return `linear-gradient(${angle}deg, ${transparent ? generateHslaString(fromColor) : generateHslString(fromColor)} 0%, ${transparent ? generateHslaString(toColor) : generateHslString(toColor)} 100%)`
}