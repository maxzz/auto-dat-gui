import { ref, Ref, watch, WatchStopHandle } from "vue";
import throttle from "./throttle";
import clamp from "lodash/clamp";

const toPrecision = function (num: number, precision: number = 2): number {
    const p = precision | 0;
    return p > 0 ? parseFloat(num.toFixed(p)) : num;
}

export function useMouse(target: HTMLElement | Ref<HTMLElement | null>, throttleMs: number = 80) {
    const targetRef = ref(target);
    const x = ref(0); // in range [0, 1]
    const y = ref(0); // in range [0, 1]
    let stop: WatchStopHandle = () => {};

    stop = watch(targetRef, (el: HTMLElement, prevEl: HTMLElement, onCleanup) => {

        const precision: number = 2;
        const msmove = throttle(onMove, throttleMs);
        
        function onDown(event: MouseEvent): void {
            event.preventDefault();
            document.addEventListener("mousemove", msmove);
            document.addEventListener("mouseup", onUp);
            next(event);
        };

        function onUp(event: MouseEvent): void {
            next(event);
            document.removeEventListener("mousemove", msmove);
            document.removeEventListener("mouseup", onUp);
        };

        function onMove(event: MouseEvent): void {
            event.preventDefault();
            next(event);
        };

        function next(event: MouseEvent) {
            const rect = el.getBoundingClientRect();
            x.value = adjust((event.clientX - rect.left) / rect.width);
            y.value = adjust((event.clientY - rect.top) / rect.height);
        }

        function adjust(num: number): number {
            return toPrecision(clamp(num, 0, 1), precision);
        }

        el && el.addEventListener("mousedown", onDown);
        onCleanup(() => el && el.removeEventListener("mousedown", onDown));
    });

    return {
        pos: {x, y},
        stop
    };
}
