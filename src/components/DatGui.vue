<template>
  <div class="dat-gui">
      <div class="group--main group">
          <ul>
              <li class="control-row">{{ name }}</li>
              <li class="control-row color">color</li>
              <li class="control-row number">number</li>
              <li class="control-row string">string</li>
              <li class="control-row boolean">boolean</li>
              <li class="control-row button">button</li>
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
    $row-height: 1.6em;

    .dat-gui {
        position: fixed;
        top: 0;
        right: 0;
        width: 245px;

        font-size: $font-size;
        font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;

        color: #eee;
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

            //background-color: #333;
        }
    }
    .folder {
        background-color: brown;
    }

    .control-row {
        &.color {
            background-color: darken(teal, 20%);
        }
        &.number {
            background-color: darken(teal, 18%);
        }
        &.string {
            background-color: darken(teal, 16%);
        }
        &.boolean {
            background-color: darken(teal, 14%);
        }
        &.button {
            background-color: darken(teal, 12%);
        }
    }

    .toggle-button {
        height: $row-height;
        line-height: $row-height;
        text-align: center;
        background-color: #1a1a1a;
        cursor: pointer;
    }
</style>
