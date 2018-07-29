<template>
    <h2>{{ $t('test') }}</h2>
</template>

<script lang="ts">
import SubComponent from "./SubComponent.vue";

export default SubComponent.extend({
  name: "SubSubComponent",
  mixins: [SubComponent]
});
</script>
