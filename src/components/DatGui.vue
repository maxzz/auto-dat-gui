<template>
    <div class="dat-gui">
        <div class="group--main group">
            <ul>
                <li class="control-row">
                        <label>
                            <span class="ctrl-label">{{ name }}</span>
                            <div class="ctrl-value">
                                <input type="text">
                            </div>
                        </label>
                </li>
                <li class="control-row color">
                        <label>
                            <span class="ctrl-label">color</span>
                            <div class="ctrl-value">
                                <input type="text">
                            </div>
                        </label>
                </li>

                <RowSelect label="Select" :items="[{name: 'First option', value: 'one' }, {name: 'Second option', value: 'two' }]" />

                <RowBoolean v-model:checked="testBoolean" label="Boolean" title="I can explain that" />
                <RowString v-model:value="testString" label="Text" title="... or not" />

                <RowNumber v-model:value="testNumber" label="Number slider slider" :min="-100" :max="100" :step="1" title="Here is how it works" />
                <RowNumber v-model:value="testNumber" label="Number" />

                <RowButton label="Button" title="This handler invoked with isTrusted = true" @clicked="buttonClicked" />

                <RowFolder label="Folder">
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
            </ul>
        </div>
        <div class="toggle-button">Show controls</div>
    </div>

    <pre class="color: black">
        Test results:
          Number : {{testNumber}}
          Boolean: {{testBoolean}}
          Text   : {{testString}}
    </pre>

</template>

<script lang="ts">
    import { defineComponent, ref, reactive, toRefs } from 'vue';
    import { name } from './controls/label/index';
    import RowNumber from "./RowNumber.vue";
    import RowBoolean from "./RowBoolean.vue";
    import RowString from "./RowString.vue";
    import RowButton from "./RowButton.vue";
    import RowFolder from "./RowFolder.vue";
    import RowSelect from "./RowSelect.vue";

    export default defineComponent({
        components: { RowNumber, RowBoolean, RowString, RowButton, RowFolder, RowSelect },
        setup() {
            const state = reactive({
                testNumber: 70,
                testBoolean: true,
                testString: 'ABC',
            });
            function buttonClicked(evt: MouseEvent) {
                console.log(`buttonClicked: What to do with trusted(${evt.isTrusted}) click event`, evt);
            }
            return {
                name,
                ...toRefs(state),
                buttonClicked,
            }
        }
    });
</script>

<style lang="scss">
    //#region variables

    $font-size: .8em;
    $row-height: 28px;
    $row-height-fix: 1px;
    $single-padding: .4em;

    $hover-lighten: 5%;
    $border-lighten: 5%;
    $active-lighten: 10%;

    $nest-margin: 10px;
    $folder-margin: 10px;

    $control-row-bkg: rgb(0, 54, 54);
    $control-row-separator: lighten(teal, 1%);

    $control-inp-clr: #ddd;
    $control-inp-bkg: lighten($control-row-bkg, 5%);
    $control-inp-bdr: $row-height-fix solid lighten($control-row-bkg, 1%);

    $toggle-button-clr: #1a1a1a;

    $folder-bkg: #000;
    $folder-buttom-bdr: #ffffff33;
    $folder-closed: $folder-bkg url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==) $folder-margin 48% no-repeat;
    $folder-open: $folder-bkg url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) $folder-margin 48% no-repeat;

    $scrollbar-bkg: $control-row-bkg;
    $scrollbar-thumb: lighten($scrollbar-bkg, 20%);

    //#endregion variables

    .dat-gui {
        position: fixed;
        top: 0;
        right: 1em;
        width: 245px;

        font-size: $font-size;
        font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;

        color: $control-inp-clr;

        & * {
            box-sizing: border-box;
        }
    }

    .group--main {
        background-color: olivedrab;

        & > ul {
            max-height: 50vh;
            overflow-y: auto;

            // Firefox, Chrome scrollbars

            scrollbar-color: $scrollbar-thumb $scrollbar-bkg;
            scrollbar-width: thin;                

            &::-webkit-scrollbar {
                width: 5px;
                background: $scrollbar-bkg;
            }
            &::-webkit-scrollbar-corner {
                height: 0;
                display: none;
            }
            &::-webkit-scrollbar-thumb {
                border-radius: 5px;
                background: $scrollbar-thumb;
            }
        }

        li {
            list-style-type: none;
        }
    }

    .group {
        overflow: hidden;

        ul {
            margin: 0;
            padding: 0;
        }

        li:not(.folder) {
            height: $row-height + $row-height-fix;
            line-height: $row-height;
            padding: 0 $single-padding;
            overflow: hidden;

            //background-color: $control-row-bkg;
            border-bottom: 1px solid $control-row-separator;
            cursor: auto;
        }
    }

    .folder {
        background-color: $control-row-bkg;

        .folder-text {
            padding: 5px 5px 5px $folder-margin * 2;
            text-align: left;

            background: $folder-open;
            border-bottom: 1px solid $folder-buttom-bdr;

            font-weight: bold;
            user-select: none;
            cursor: pointer;
        }

        ul {
            margin-left: $nest-margin;
            width: calc(100% - #{$nest-margin});
        }

        &.closed {
            .folder-text {
                background: $folder-closed;
            }
            ul {
                display: none;
            }
        }
    }

    .toggle-button {
        height: $row-height * .8;
        line-height: $row-height * .8;
        text-align: center;
        background-color: $toggle-button-clr;
        cursor: pointer;
        user-select: none;
    }

    .control-row {
        label {
            display: flex;
            padding: 0 0 0 $single-padding;

            .ctrl-label {
                width: 40%;
                overflow: hidden;
                text-overflow: ellipsis;
                text-align: left;
                white-space: nowrap;
                user-select: none;
            }
            .ctrl-value {
                width: 60%;
                display: inline-flex;

                input[type=text], input[type=number] {
                    width: 100%;
                    padding: $single-padding;
                    font-size: inherit;
                    border-radius: 0;
                    outline: none;
                    background-color: $control-inp-bkg;
                    border: $control-inp-bdr;

                    &:hover {
                        background: lighten($control-inp-bkg, $hover-lighten);
                    }
                    &:focus {
                        background: lighten($control-inp-bkg, $active-lighten);
                        color: #fff;
                    }
                }
            }
        }

        &.color {
            background-color: $control-row-bkg;
        }
        &.number {
            background-color: $control-row-bkg;

            $slider-clr: #2fa1d6;

            .slider {
                border: $control-inp-bdr;
                background-color: $control-inp-bkg;
                background-image: linear-gradient(90deg, $slider-clr, $slider-clr);
                background-repeat: no-repeat;
                flex: 3;
            }

            input[type="number"] {
                flex: 1;
                color: $slider-clr;

                min-width: .1em; // Firefox does not work without this.

                // remove number slider arrows
                -moz-appearance: textfield;
                &::-webkit-inner-spin-button,
                &::-webkit-outer-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }
            }
        }
        &.string {
            background-color: $control-row-bkg;

            input {
                color: $control-inp-clr;
            }
        }
        &.boolean {
            background-color: $control-row-bkg;

            .ctrl-value {
                display: flex;
                align-items: center;

                input[type=checkbox] {
                    margin-left: 0;
                }
            }
        }
        &.button {
            background-color: $control-row-bkg;
        }
        &.select {
            background-color: $control-row-bkg;

            select {
                width: 100%;
                background-color: $control-row-bkg;
                color: $control-inp-clr;
                border: $control-inp-bdr;
                outline: none;

                &:hover {
                    background: lighten($control-inp-bkg, $hover-lighten);
                }
                &:focus {
                    background: lighten($control-inp-bkg, $active-lighten);
                    color: #fff;
                }
            }
        }
    }

</style>
