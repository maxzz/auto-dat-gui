import { ref, Ref, watch, WatchStopHandle } from "vue";
import throttle from "lodash/throttle";
import clamp from "lodash/clamp";

const toPrecision = function (num: number, precision: number): number {
    const p = precision | 0;
    return p > 0 ? parseFloat(num.toFixed(p)) : num;
}

export function useMouse(target?: HTMLElement | Ref<HTMLElement | null>) {
    const targetRef = ref(target);
    const x = ref(0); // in range [0, 1]
    const y = ref(0); // in range [0, 1]
    let stop: WatchStopHandle = () => {};

    stop = watch(targetRef, (el: HTMLElement, prevEl: HTMLElement, onCleanup) => {

        const precision: number = 2;
        
        const onDown = (event: MouseEvent): void => {
            event.preventDefault();
            document.addEventListener("mousemove", onMove);
            document.addEventListener("mouseup", onUp);
            next(event);
        };

        const onUp = (event: MouseEvent): void => {
            next(event);
            document.removeEventListener("mousemove", onMove);
            document.removeEventListener("mouseup", onUp);
        };

        const onMove = (event: MouseEvent): void => {
            event.preventDefault();
            next(event);
        };

        function next({ clientX = 0, clientY = 0 } = {}) {
            const rect = el.getBoundingClientRect();
            x.value = adjust((clientX - rect.left) / rect.width);
            y.value = adjust((clientY - rect.top) / rect.height);
        }

        function adjust(num: number): number {
            return toPrecision(clamp(num, 0, 1), precision);
        }

        //console.log('use useMouse', {el, prevEl, targetRef: targetRef.value});

        el && el.addEventListener("mousedown", onDown);

        onCleanup(() => {
            //debugger
            //console.log('cleanup useMouse', {el, prevEl, targetRef: targetRef.value});

            el && el.removeEventListener("mousedown", onDown);
        });
    }, { immediate: true });

    return {
        pos: {x, y},
        stop
    };
}
