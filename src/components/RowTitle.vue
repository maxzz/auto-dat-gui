<template>
    <li class="control-row title" :style="{backgroundColor: currentValue, color: currentColor}">
        <label>
            <span class="ctrl-label" :title="title">{{ label }}</span>
        </label>
    </li>
</template>

<script lang="ts">
    import { defineComponent, ref, watch } from 'vue';

    export default defineComponent({
        name: "RowTitle",
        props: {
            color: String,
            background: String,
            label: String,
            title: String,
        },
        setup(props, { emit }) {
            const currentValue = ref(props.background || '');
            const currentColor = ref(props.color || '');

            watch(() => props.background, () => currentValue.value = props.background || '');
            watch(() => props.color, () => currentColor.value = props.color || '');

            return {
                currentValue,
                currentColor,
            };
        }
    })
</script>
