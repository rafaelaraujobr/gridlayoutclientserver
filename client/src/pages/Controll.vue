<template>
  <q-page>
    <grid-controller  />
  </q-page>
</template>

<script>
import GridController from "@/components/grid/GridControll.vue";
import LayoutServices from "@/mixins/LayoutServices";
export default {
  name: "Controll",
  mixins: [LayoutServices],
  components: {
    GridController,
  },
  created() {
    this.ActionSetHeader(true);
  },
};
</script>
