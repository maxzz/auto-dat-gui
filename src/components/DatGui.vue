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
              <li class="control-row number">
                    <label>
                        <span class="ctrl-label">number</span>
                        <div class="ctrl-value">
                            <span class="slider" style="background-size: 40% 100%"></span>
                            <input type="number" value="100" min="Infinity" max="Infinity" step="Infinity">
                        </div>
                    </label>
              </li>
              <li class="control-row string">
                    <label>
                        <span class="ctrl-label">string</span>
                        <div class="ctrl-value">
                            <input type="text">
                        </div>
                    </label>
              </li>
              <li class="control-row boolean">
                    <label>
                        <span class="ctrl-label">boolean</span>
                        <div class="ctrl-value">
                            <input type="text">
                        </div>
                    </label>
              </li>
              <li class="control-row button">
                    <label>
                        <span class="ctrl-label">button</span>
                        <div class="ctrl-value">
                            <input type="text">
                        </div>
                    </label>
              </li>
          </ul>
      </div>
      <div class="toggle-button">Show controls</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { name } from './controls/label/index';

export default defineComponent({
    setup() {
        return {
            name
        }
    }
});
</script>

<style lang="scss">
    //#region variables

    $font-size: .8em;
    $row-height: 28px;
    $single-padding: .4em;

    $control-row-bkg: rgb(0, 54, 54);
    $control-row-separator: lighten(teal, 1%);

    $control-inp-bkg: lighten($control-row-bkg, 5%);
    $control-inp-bdr: 1px solid lighten($control-row-bkg, 1%);

    //#endregion variables

    .dat-gui {
        position: fixed;
        top: 0;
        right: 1em;
        width: 245px;

        font-size: $font-size;
        font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;

        color: #eee;

        & * {
            box-sizing: border-box;
        }
    }

    .group--main {
        background-color: red;

        & > ul {
            max-height: 50vh;
            overflow-y: auto;
        }
    }
    .group {
        overflow: hidden;

        ul {
            margin: 0;
            padding: 0;
        }

        li:not(.folder) {
            height: $row-height;
            line-height: $row-height;

            padding: 0 $single-padding;
            overflow: hidden;

            //background-color: $control-row-bkg;
            border-bottom: 1px solid $control-row-separator;
        }
    }
    .folder {
        background-color: brown;
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
                }
            }
        }

        $temp-fradient: 1;

        &.color {
            background-color: darken($control-row-bkg, 5% * $temp-fradient);
        }
        &.number {
            background-color: darken($control-row-bkg, 4% * $temp-fradient);

            $slider-clr: #2fa1d6;

            .slider {
                background-color: $control-inp-bkg;
                background-image: linear-gradient(90deg, $slider-clr, $slider-clr);
                background-repeat: no-repeat;
                flex: 3;
            }

            input[type="number"] {
                flex: 1;
                color: $slider-clr;

                -moz-appearance: textfield;

                &::-webkit-inner-spin-button,
                &::-webkit-outer-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }            
            }
        }
        &.string {
            background-color: darken($control-row-bkg, 3% * $temp-fradient);
        }
        &.boolean {
            background-color: darken($control-row-bkg, 2% * $temp-fradient);
        }
        &.button {
            background-color: darken($control-row-bkg, 1% * $temp-fradient);
        }
    }

    .toggle-button {
        height: $row-height * .8;
        line-height: $row-height * .8;
        text-align: center;
        background-color: #1a1a1a;
        cursor: pointer;
    }
</style>
