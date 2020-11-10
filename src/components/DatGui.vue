<template>
  <div class="dat-gui">
      <div class="group--main group">
          <ul>
              <li class="control-row">
                    <label>
                        <span class="ctl-label">{{ name }}</span>
                        <div class="ctr-value">
                            <input type="text">
                        </div>
                    </label>
              </li>
              <li class="control-row color">
                    <label>
                        <span class="ctl-label">color</span>
                        <div class="ctr-value">
                            <input type="text">
                        </div>
                    </label>
              </li>
              <li class="control-row number">
                    <label>
                        <span class="ctl-label">number</span>
                        <div class="ctr-value">
                            <input type="text">
                        </div>
                    </label>
              </li>
              <li class="control-row string">
                    <label>
                        <span class="ctl-label">string</span>
                        <div class="ctr-value">
                            <input type="text">
                        </div>
                    </label>
              </li>
              <li class="control-row boolean">
                    <label>
                        <span class="ctl-label">boolean</span>
                        <div class="ctr-value">
                            <input type="text">
                        </div>
                    </label>
              </li>
              <li class="control-row button">
                    <label>
                        <span class="ctl-label">button</span>
                        <div class="ctr-value">
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
    $font-size: .8em;
    $row-height: 28px;
    $single-padding: .4em;

    $control-row-bkg: teal;
    $control-row-separator: lighten(teal, 1%);

    .dat-gui {
        position: fixed;
        top: 0;
        right: 0;
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
        &.color {
            background-color: darken($control-row-bkg, 20%);
        }
        &.number {
            background-color: darken($control-row-bkg, 18%);
        }
        &.string {
            background-color: darken($control-row-bkg, 16%);
        }
        &.boolean {
            background-color: darken($control-row-bkg, 14%);
        }
        &.button {
            background-color: darken($control-row-bkg, 12%);
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
