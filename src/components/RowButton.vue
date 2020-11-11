<template>
    <li class="control-row button">
        <label>
            <span class="ctrl-label" :title="title" @click="handleClick">{{ label }}</span>
        </label>
    </li>
</template>

<script lang="ts">
    import { defineComponent, ref, watch } from "vue";

    export default defineComponent({
        name: "RowBytton",
        props: {
            label: String,
            title: {
                type: String,
                default: null
            },
        },
        setup(props, { emit }) {
            const handleClick = (evt) => {
                emit("clicked", evt);
            };

            return {
                handleClick,
            };
        },
    });
</script>

<style lang="scss">
</style>
