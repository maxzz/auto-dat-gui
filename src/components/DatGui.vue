<template>
  <div class="container">
      {{ name }}
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
    .container {
        background-color: red;
    }
</style>
