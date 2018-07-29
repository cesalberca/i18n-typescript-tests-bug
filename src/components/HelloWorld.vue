<template>
  <div>
    <h1>{{ $t('test') }}</h1>
    <SubComponent/>
    <SubSubComponent/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SubComponent from "./SubComponent.vue";
import SubSubComponent from "./SubSubComponent.vue";

export default Vue.extend({
  name: "HelloWorld",
  components: {
    SubComponent,
    SubSubComponent
  }
});
</script>
