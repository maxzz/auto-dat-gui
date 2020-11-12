<template>
    <li :class="['folder', {'closed': currentValue}]">
        <div class="group">
            <div class="folder-text" :title="title" @click="handleClick">{{ label }}</div>
            <ul>
                <slot></slot>
            </ul>
        </div>
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
                console.log(`bt ${currentValue.value}`);
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
