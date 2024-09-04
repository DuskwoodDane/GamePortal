<template>
  <section>
    <div class="box1 test-c">box</div>
  </section>
</template>

<script lang="ts" setup>
import { useTest } from '../composables';
const test = useTest();

const config = useRuntimeConfig();

console.log('test=', AuthEnum.ADMIN, test);
console.log('process==', config);
</script>
<style scoped lang="scss">
.box1 {
  // background: red;
  @include set-wh(200px, 200px);
  // width: 200px;
  // height: 200px;
}
</style>
