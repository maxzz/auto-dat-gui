<template>
    <!-- <li class="control-row color">
        <label>
            <span class="ctrl-label" :title="title">{{ label }}</span>
            <div class="ctrl-value">
                <RowColorPicker />
            </div>
        </label>
    </li> -->
    <div class="test-picker" ref="picker" ></div>
    <RowColorPicker />
</template>

<script lang="ts">
    import { defineComponent, ref, watch } from "vue";
    import RowColorPicker from "./RowColorPicker.vue";
    import { useMouse } from "./utils/useMouse";

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

            const picker = ref(null);

            const pos = useMouse(picker);
            //watch(() => pos, (val) => console.log('cp-all', val.x.value, val.y.value), {deep: true});

            const handleChange = () => {
                currentValue.value = !currentValue.value;
                emit("update:checked", currentValue.value);
            };

            return {
                currentValue,
                handleChange,
                picker,
                pos: pos.pos,
            };
        },
        watch: {
            pos: {
                immediate: true,
                handler(val) {
                    console.log('---------- x,y val', val.x.value, val.y.value);
                },
                deep: true,
            },
        }
    });
</script>

<style lang="scss">
    .test-picker {
        position: absolute;
        top: 0;
        left: 0;
        width: 200px;
        height: 150px;
        background-color: red;
    }
</style>
