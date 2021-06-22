<template>
  <q-page>
    <q-resize-observer @resize="onResize" debounce="5000" />
    <grid-display :size="size" />
  </q-page>
</template>

<script>
import GridDisplay from "../components/grid/GridDisplay.vue";
export default {
  name: "Display",
  data() {
    return {
      size: {
        height: 600,
        width: 800,
      },
    };
  },
  components: {
    GridDisplay,
  },
  methods: {
    onResize(size) {
      this.size = size;
    },
  },
};
</script>
