import parse2rgb from "pure-color/parse";
import rgb2hsv from "pure-color/convert/rgb2hsv";
import rgb2hex from "pure-color/convert/rgb2hex";
import hsv2hsl from "pure-color/convert/hsv2hsl";
import hsv2rgb from "pure-color/convert/hsv2rgb";
import hsl2rgb from "pure-color/convert/hsl2rgb";

export type ArrayRgba = [number, number, number, number?]; // Vutue does not like that: [r: number, g: number, b: number, a?: number]
export type ArrayHsla = [number, number, number, number?];
export type ArrayHsva = [number, number, number, number?];
export type ArrayHsvaStr = [number, string, string, number?];

export type ArrayRgb = [number, number, number];
export type ArrayHsl = [number, number, number];
export type ArrayHsv = [number, number, number];

export type StringRgb = string; // like rgba(127, 0, 0, .5)
export type StringHsl = string; // like hsl(240, 50%, 50%, .5)
export type StringHex = string; // like #1f5f3f

export type TConvert = {
    parse2rgb: (color: string) => ArrayRgba;
    rgb2hsv: (val: ArrayRgb | ArrayRgba) => ArrayHsv,
    rgb2hex: (val: ArrayRgba) => StringHex,
    hsv2hsl: (val: ArrayHsv | ArrayRgba) => ArrayHsl,
    hsv2rgb: (val: ArrayHsv | ArrayRgba) => ArrayRgb,
    hsl2rgb: (val: ArrayHsl | ArrayRgba) => ArrayRgb,
}

export const convert: TConvert = { parse2rgb, rgb2hsv, rgb2hex, hsv2hsl, hsv2rgb, hsl2rgb };

export function toPercent(n: number, precision: number = 3): string {
    const num = (n * 100).toPrecision(precision | 0);
    return `${num}%`;
}

export type ColorMode = 'hex' | 'rgba' | 'hsla';

export function getColorType(color: string): ColorMode {
    if (color[0] === "#") {
        return "hex";
    }
    if (color.indexOf("rgb") === 0) {
        return "rgba";
    }
    if (color.indexOf("hsl") === 0) {
        return "hsla";
    }
    console.log(`${color} is not valid color value!`);
    return 'hex';
}

export function simplifyHex(val: string): string {
    return val.replace(/#([0-9a-f])\1([0-9a-f])\2([0-9a-f])\3([0-9a-f]?)\4$/, "#$1$2$3$4");
}
