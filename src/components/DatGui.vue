<template>
    <div :class="['dat-gui', { closed: folded }]">
        <div class="group--main group">
            <ul>
                <slot></slot>
            </ul>
        </div>
        <div class="toggle-button" @click="folded=!folded">{{closeButtonText}}</div>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, ref } from 'vue';
    import "../assets/scss/datgui-default.scss";

    export default defineComponent({
        setup() {
            const folded = ref(false);
            const closeButtonText = computed(() => folded.value ? 'Show controls' : 'Hide controls');
            return {
                folded,
                closeButtonText,
            };
        }
    });
</script>
