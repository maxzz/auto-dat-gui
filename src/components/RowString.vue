<template>
    <li class="control-row string">
        <label>
            <span class="ctrl-label" :title="title">{{ label }}</span>
            <div class="ctrl-value">
                <input type="text" :value="currentValue" @input="handleChange" />
            </div>
        </label>
    </li>
</template>

<script lang="ts">
    import { defineComponent, ref, watch } from 'vue'

    export default defineComponent({
        name: "RowString",
        props: {
            value: String,
            label: String,
            title: {
                type: String,
                default: null
            },
        },
        setup(props, { emit }) {
            const currentValue = ref(props.value || '');

            watch(() => props.value, () => currentValue.value = props.value);

            const handleChange = (evt: InputEvent) => {
                currentValue.value = (evt.target as HTMLInputElement).value;
                emit("update:value", currentValue.value);
            }

            return {
                currentValue,
                handleChange,
            };
        }
    })
</script>
