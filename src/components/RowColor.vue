<template>
    <li class="control-row color">
        <label>
            <span class="ctrl-label" :title="title">{{ label }}</span>
            <div class="ctrl-value">
                <RowColorPicker />
            </div>
        </label>
    </li>
</template>

<script lang="ts">
    import { defineComponent, ref, watch } from "vue";
    import RowColorPicker from "./RowColorPicker.vue";

    export default defineComponent({
        name: "RowColor",
        props: {
            checked: Boolean,
            label: String,
            title: {
                type: String,
                default: null
            },
        },
        components: { RowColorPicker },
        setup(props, { emit }) {
            const currentValue = ref(props.checked);

            watch(() => props.checked, () => currentValue.value = props.checked);

            const handleChange = () => {
                currentValue.value = !currentValue.value;
                emit("update:checked", currentValue.value);
            };

            return {
                currentValue,
                handleChange,
            };
        },
    });
</script>

<style lang="scss">
</style>
