<template>
    <li class="control-row color" style="height: 300px">
        <label>
            <span class="ctrl-label" :title="title">{{ label }}</span>
            <div class="ctrl-value">
                <input type="text" v-model="currentValue" readonly> <!-- TODO: digestProp cannot handle validation of untrusted input -->
                <RowColorPicker :color="currentValue" @update:color="handleChange" />
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
            color: {
                type: String,
                default: '#00f' // TODO: handle color names like 'blue', 'red', and so on.
            },
            label: String,
            title: {
                type: String,
                default: null
            },
        },
        components: { RowColorPicker },
        setup(props, { emit }) {
            const currentValue = ref(props.color);

            watch(() => props.color, () => currentValue.value = props.color);

            const handleChange = (e) => {
                currentValue.value = e.hex;
                emit("update:color", currentValue.value);
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
