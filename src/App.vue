<template>
    <DatGui foldPosition="top">
        <RowTitle label="Title" background="olivedrab" :color="testBoolean ? '#f5dd05' : testColor " />

        <RowColor label="Color" v-model:color="testColor" @update:selectColor="selectColor" color="#f29305" />
        <RowColor label="Color" v-model:color="testColor" />

        <RowSelect label="Select" :items="testItems" v-model:value="testSelect" />

        <RowBoolean v-model:checked="testBoolean" label="Boolean" title="I can explain that" />
        <RowString v-model:value="testString" label="Text" title="... or not" />

        <RowNumber v-model:value="testNumber" label="Number slider slider" :min="-100" :max="100" :step="1" title="Here is how it works" />
        <RowNumber v-model:value="testNumber" label="Number" />

        <RowButton label="Button" title="This handler invoked with isTrusted = true" @clicked="buttonClicked" />

        <RowFolder label="Folder" closed>
            <!-- <RowColor label="Color" v-model:color="testColor" /> -->

            <RowNumber v-model:value="testNumber" label="Number slider" :min="-100" :max="100" :step="1" title="Here is how it works" />
            <RowNumber v-model:value="testNumber" label="Number slider" :min="-100" :max="100" :step="1" title="Here is how it works" />

            <RowFolder label="Nested Folder" closed>
                <RowNumber v-model:value="testNumber" label="Number slider" :min="-100" :max="100" :step="1" title="Here is how it works" />
                <RowNumber v-model:value="testNumber" label="Number slider" :min="-100" :max="100" :step="1" title="Here is how it works" />

                <RowFolder label="Nested Folder" closed>
                    <RowNumber v-model:value="testNumber" label="Number slider" :min="-100" :max="100" :step="1" title="Here is how it works" />
                    <RowNumber v-model:value="testNumber" label="Number slider" :min="-100" :max="100" :step="1" title="Here is how it works" />
                </RowFolder>
            </RowFolder>
        </RowFolder>
    </DatGui>

<div class="results">
<pre>
Test results:
    Number : {{testNumber}}
    Boolean: {{testBoolean}}
    Text   : {{testString}}
    Select : {{testSelect}} -> {{findSelectedValue()}}
    Color  : {{testColor}}
</pre>
    <span class="results-color" :style="{ color: color4Background(testColor), 'background-color': testColor }" >&nbsp;&nbsp;{{testColor}}&nbsp;&nbsp;</span>
</div>

</template>

<script lang="ts">
    import { defineComponent, reactive, ref, toRefs } from "vue";
    import DatGui from "./components/DatGui.vue";
    import RowTitle from "./components/RowTitle.vue";
    import RowFolder from "./components/RowFolder.vue";
    import RowNumber from "./components/RowNumber.vue";
    import RowString from "./components/RowString.vue";
    import RowBoolean from "./components/RowBoolean.vue";
    import RowButton from "./components/RowButton.vue";
    import RowSelect from "./components/RowSelect.vue";
    import RowColor from "./components/RowColor.vue";
    import { color4Background } from "./utils/colors";

    export default defineComponent({
        name: "App",
        components: { DatGui, RowTitle, RowFolder, RowNumber, RowString, RowBoolean, RowButton, RowSelect, RowColor },
        setup() {
            const state = reactive({
                testNumber: 70,
                testBoolean: true,
                testString: 'ABC',
                testSelect: 'one',
                testItems: [{name: 'First option', value: 'one' }, {name: 'Second option', value: 'two' }],
                testColor: '',
            });

            function buttonClicked(evt: MouseEvent) {
                console.log(`buttonClicked: What to do with trusted(${evt.isTrusted}) click event`, evt);
            }

            function findSelectedValue() {
                let item = state.testItems.find(_ => _.value === state.testSelect);
                return item?.name || 'none';
            }

            function selectColor(...args) {
                console.log('select', ...args);
            }

            return {
                ...toRefs(state),
                buttonClicked,
                findSelectedValue,
                color4Background,
                selectColor,
            };
        }
    });
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    .results {
        background-color: rgb(190, 231, 255);
    }
</style>
