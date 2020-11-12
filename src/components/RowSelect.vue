<template>
    <li class="control-row select">
        <label>
            <span class="ctrl-label" :title="title">{{ label }}</span>
            <div class="ctrl-value">
                <select :value="currentValue" @change="handleChange">
                    <option v-for="item in items" :key="item.value" :value="item.value">
                        {{item.name}}
                    </option>
                </select>
            </div>
        </label>
    </li>
</template>

<script lang="ts">
    import { defineComponent, ref, watch } from "vue";

    export type SelectItem = {
        name: string,
        value: string | number
    }

    export default defineComponent({
        name: "RowSelect",
        props: {
            value: [String, Number],
            items: {
                type: () => [] as SelectItem[]
            },
            label: String,
            title: {
                type: String,
                default: null
            },
        },
        setup(props, { emit }) {
            const currentValue = ref(props.value);

            watch(() => props.value, () => currentValue.value = props.value || '');

            const handleChange = (evt) => {
                currentValue.value = evt.target.value;
                emit("update:value", currentValue.value);
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
