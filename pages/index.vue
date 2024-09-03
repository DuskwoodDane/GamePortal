<template>
  <section>
    <div class="box1">box</div>
  </section>
</template>

<script lang="ts" setup>

import { useTest } from '../composables';
const test = useTest();

console.log('test=', test);
</script>
<style scoped lang="scss">
.box1 {
  background: red;
  width: 300px;
  height: 300px;
}
</style>
