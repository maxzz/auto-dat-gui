<template> </template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

// import parse2rgb from "pure-color/parse";
// import rgb2hsv from "pure-color/convert/rgb2hsv";
// import rgb2hex from "pure-color/convert/rgb2hex";
// import hsv2hsl from "pure-color/convert/hsv2hsl";
// import hsv2rgb from "pure-color/convert/hsv2rgb";
// import hsl2rgb from "pure-color/convert/hsl2rgb";

import clamp from "lodash/clamp";
import debounce from "lodash/debounce";

import "./RowColorPicker.scss";
import VCtrl from "./utils/v-ctrl.js";
import { toPercent, getColorType, simplifyHex, convert, ArrayHsl, ArrayRgba, ArrayHsva, ArrayHsla, ArrayHsvaStr, ColorMode } from "./utils/v-color-utils";

const COLOR_MODES = {
    rgba: ["r", "g", "b", "a"],
    hsla: ["h", "s", "l", "a"],
    hex: ["hex"]
};

type TSaturation = {
    x: number;
    y: number;
}

type TColorData = {
    alpha: number;
    hue: number;
    saturation: TSaturation;
}

function digestProp(val: string): TColorData {
    const rgba = convert.parse2rgb(val);
    const alpha = rgba[3] == null ? 1 : rgba[3];
    const [hue, saturation, value] = convert.rgb2hsv(rgba);
    // format of alpha: `.2f`
    // according to Chrome DevTool
    const _alpha = parseFloat(alpha.toFixed(2));
    return {
        alpha: _alpha,
        hue: hue / 360,
        saturation: {
            x: saturation / 100,
            y: 1 - value / 100
        }
    };
}

type ColorModel = {
    r: number;   // maxLength: 3
    g: number;   // maxLength: 3
    b: number;   // maxLength: 3
    h: number;   // maxLength: 3
    s: string;   // maxLength: 4
    l: string;   // maxLength: 4
    a: number;   // maxlength: 4
    hex: string; // maxlength: 9
}

type Data = TColorData | {
    currentMode: ColorMode;
    colorModel: ColorModel;
}

export default defineComponent({
    name: "RowColorPicker",
    props: {
        color: {
            type: String,
            default: "#000000"
        }
    },
    components: { VCtrl },
    // setup(props, { emit }) {
    //     return {};
    // },
    data(): Data {
        const { color } = this;

        return {
            ...digestProp(color),
            currentMode: getColorType(color),
            colorModel: {
                hex: '',
                r: 0,
                g: 0,
                b: 0,
                h: 0,
                s: '',
                l: '',
                a: 0
            },
        };
    },
    watch: {
        color: {
            immediate: true,
            handler(newVal, oldVal) {
                if (newVal !== oldVal) {
                    Object.assign(this, digestProp(newVal));
                }
            }
        },
        rgba: {
            immediate: true,
            handler(newVal, oldVal) {
                if (`${newVal}` !== `${oldVal}`) {
                    this.emitChange();
                }
            }
        }
    },
    computed: {
        hsva(): ArrayHsva {
            const { hue, alpha, saturation: { x, y } } = this;
            return [ hue * 360, x * 100, (1 - y) * 100, alpha ];
        },
        rgba(): ArrayRgba {
            const { alpha, hsva } = this;
            const [r, g, b] = convert.hsv2rgb(hsva);
            return [ Math.round(r), Math.round(g), Math.round(b), alpha ];
        },
        hsla(): ArrayHsvaStr {
            const { alpha, hsva } = this;
            const [h, s, l] = convert.hsv2hsl(hsva);
            return [ Math.round(h), `${Math.round(s)}%`, `${Math.round(l)}%`, alpha ];
        },
        hex(): string {
            return convert.rgb2hex(this.rgba);
        },
        previewBorderColor(): string {
            const [r, g, b] = this.rgba;
            if ((r + g + b) / 3 > 235) {
                return `rgba(160,160,160,0.8)`;
            }
            return "transparent";
        },
        styles() {
            const { rgba, alpha, hue, saturation } = this;
            const strRGB = rgba.slice(0, 3).join(", ");
            const strHueRGB = convert.hsl2rgb([hue * 360, 100, 50] as any as ArrayHsl).map(v => Math.round(v)).join(", ");
            return {
                preview: {
                    backgroundColor: `rgba(${rgba.join(", ")})`,
                    borderColor: this.previewBorderColor
                },
                saturationPane: {
                    backgroundColor: `rgb(${strHueRGB})`
                },
                saturationThumb: {
                    left: toPercent(saturation.x),
                    top: toPercent(saturation.y)
                },
                alphaTrack: {
                    backgroundImage:
                        `linear-gradient(to right, ` +
                        `rgba(${strRGB}, 0) 0%, rgb(${strRGB}) 100%)`
                },
                alphaThumb: {
                    left: toPercent(alpha)
                },
                hueThumb: {
                    left: toPercent(1 - hue)
                }
            };
        }
    },
    methods: {
        onSaturationChange([x, y]) {
            this.saturation = { x, y };
        },
        onHueChange(e) {
            this.hue = 1 - e;
        },
        onAlphaChange(e) {
            // format of alpha: `.2f` according to Chrome DevTool
            this.alpha = parseFloat(e.toFixed(2));
        },

        emitChange() {
            const { alpha, hex, rgba, hsla } = this;
            const hexVal = simplifyHex(alpha === 1 ? hex.slice(0, 7) : hex);

            this.$emit("change", { rgba, hsla, hex: hexVal });

            // this ensures that every component in our model is up to date
            const [h, s, l] = hsla;
            const [r, g, b] = rgba;
            Object.assign(this.colorModel, {
                r,
                g,
                b,
                h,
                s,
                l,
                a: alpha,
                hex: hexVal
            });
        },

        changecurrentMode() {
            const modes = Object.keys(COLOR_MODES);
            const index = modes.indexOf(this.currentMode);
            this.currentMode = modes[(index + 1) % modes.length];
        },

        handleInput(type, event) {
            const { currentMode, colorModel } = this;
            const {
                target: { value }
            } = event;
            let num = Number(value);
            let changed = false;

            switch (type) {
                case "a":
                    if (colorModel[type] !== num && !isNaN(num)) {
                        colorModel[type] = clamp(num, 0, 1);
                        changed = true;
                    }
                    break;
                case "r":
                case "g":
                case "b":
                    if (colorModel[type] !== num && !isNaN(num)) {
                        colorModel[type] = clamp(num, 0, 255) | 0;
                        changed = true;
                    }
                    break;
                case "h":
                    if (colorModel[type] !== num && !isNaN(num)) {
                        colorModel[type] = clamp(num, 0, 360) | 0;
                        changed = true;
                    }
                    break;
                case "s":
                case "l":
                    if (value.slice(-1) === "%" && colorModel[type] !== value) {
                        num = parseFloat(value);
                        colorModel[type] = `${clamp(num, 0, 360) | 0}%`;
                        changed = true;
                    }
                    break;
                case "hex":
                    if (value[0] === "#") {
                        if (colorModel[type] !== value && convert.parse2rgb(value).every(i => !isNaN(i))) {
                            colorModel[type] = simplifyHex(value);
                            changed = true;
                        }
                    }
                    break;
            }

            if (changed) {
                const { h, s, l, r, g, b, a, hex } = colorModel;

                let literal = hex;
                if (currentMode === "rgba") {
                    literal = `rgba(${[r, g, b, a]})`;
                } else if (currentMode === "hsla") {
                    literal = `hsla(${[h, s, l, a]})`;
                }

                Object.assign(this, digestProp(literal));
            }
        }
    },
    created() {
        this.handleInput = debounce(this.handleInput.bind(this), 50);
    }
});
</script>

<style lang="scss">
</style>
