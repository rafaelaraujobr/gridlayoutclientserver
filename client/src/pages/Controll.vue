<template>
  <q-page>
    <q-resize-observer @resize="onResize" debounce="5000" />
    <grid-controller :size="size" />
  </q-page>
</template>

<script>
import GridController from "@/components/grid/GridControll.vue";
export default {
  name: "Controll",
  data() {
    return {
      size: {
        height: 600,
        width: 800,
      },
    };
  },
  components: {
    GridController,
  },
  methods: {
    onResize(size) {
      this.size = size;
    },
  },
};
</script>
