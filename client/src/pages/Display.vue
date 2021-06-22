<template>
  <grid-display />
</template>

<script>
import GridDisplay from "../components/grid/GridDisplay.vue";
import LayoutServices from "@/mixins/LayoutServices";
export default {
  name: "Display",
  mixins: [LayoutServices],
  components: {
    GridDisplay,
  },
  created() {
    this.ActionSetHeader(false);
    this.onListenerInitGrid();
    this.onListenerClickMouse();
    this.onListenerMoveMouse();
    this.onListenerUpdateGrid();
  },
};
</script>
