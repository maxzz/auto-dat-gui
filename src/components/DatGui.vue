<template>
    <div :class="['dat-gui', { closed: folded }]">
        <div v-if="foldPosition === 'top'" class="fold-ui" @click="folded=!folded">{{closeButtonText}}</div>
        <div class="group--main group">
            <ul>
                <slot :callColorPicker="makeColor"></slot>
            </ul>
        </div>
        <div v-if="foldPosition === 'bottom'" class="fold-ui" @click="folded=!folded">{{closeButtonText}}</div>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, ref } from 'vue';
    import "../assets/scss/datgui-default.scss";

    export default defineComponent({
        name: 'DatGui',
        props: {
            foldPosition: {
                type: String, // 'top' | buttom TODO: add 'right', 'left'
                default: 'bottom'
            }
        },
        setup() {
            const folded = ref(false);
            const closeButtonText = computed(() => folded.value ? 'Show controls' : 'Hide controls');

            function makeColor() {
                console.log('makeColor');
            }

            return {
                folded,
                closeButtonText,
                makeColor,
            };
        }
    });
</script>
