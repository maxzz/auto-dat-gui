<template>
    <li class="control-row folder" :class="['folder', {'closed': currentValue}]">
        <label class="group">
            <span class="folder-text" :title="title" @clcik="handleClick">{{ label }}</span>
            <ul>
                <slot></slot>
            </ul>
        </label>
    </li>
</template>

<script lang="ts">
    import { defineComponent, ref, watch } from "vue";

    export default defineComponent({
        name: "RowFolder",
        props: {
            closed: Boolean,
            label: String,
            title: {
                type: String,
                default: null
            },
        },
        setup(props, { emit }) {
            const currentValue = ref(props.closed);

            watch(() => props.closed, () => currentValue.value = props.closed);

            const handleClick = () => {
                currentValue.value = !currentValue.value;
                emit("update:folded", currentValue.value);
            };

            return {
                currentValue,
                handleClick,
            };
        },
    });
</script>

<style lang="scss">
</style>
