<template>
  <div
    class="fullscreen"
    style="
      background-image: linear-gradient(
        105.3deg,
        rgba(30, 39, 107, 1) 21.8%,
        rgba(77, 118, 221, 1) 100.2%
      ) !important;
    "
  >
    <grid-display />
    <particles-bg
      v-if="activeParticle"
      type="cobweb"
      color="#027BE3"
      :bg="true"
      :num="100"
      alpha=" [0.5,0.5]"
    />
  </div>
</template>

<script>
import LayoutServices from "@/mixins/LayoutServices";
import { ParticlesBg } from "particles-bg-vue";
import GridDisplay from "@/components/grid/GridDisplay.vue";

export default {
  name: "Display",
  mixins: [LayoutServices],
  components: {
    GridDisplay,
    ParticlesBg,
  },
  computed: {
    activeParticle() {
      if (this.layoutControll.length > 0) return false;
      else return true;
    },
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
