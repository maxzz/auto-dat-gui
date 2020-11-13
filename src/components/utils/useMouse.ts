import { ref, Ref, watch } from "vue";

export function useMouse(target?: HTMLElement | Ref<HTMLElement | null>) {
    const targetRef = ref(target);
    const x = ref(0);
    const y = ref(0);

    let stop = () => {};

    stop = watch(targetRef, (el: HTMLElement, prevEl: HTMLElement, onCleanup) => {
        
        const moveHandler = (event: MouseEvent) => {
            x.value = event.pageX;
            y.value = event.pageY;
        };

        el && el.addEventListener("mousedown", moveHandler);

        onCleanup(() => prevEl && prevEl.removeEventListener("mousedown", moveHandler));
    }, { immediate: true });

    return {
        x,
        y,
        stop
    };
}
