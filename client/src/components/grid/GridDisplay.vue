<template>
  <q-card flat bordered>
    <grid-layout
      :layout.sync="layoutControll"
      :col-num="optionGrid.colNum"
      :max-rows="optionGrid.maxRows"
      :is-draggable="false"
      :is-resizable="false"
      :is-mirrored="false"
      :vertical-compact="false"
      :margin="[optionGrid.margin, optionGrid.margin]"
      :use-css-transforms="true"
      :prevent-collision="true"
      id="gridControl"
      :style="styleGrid"
    >
      <menu-context-grid />
      <grid-item
        v-for="item in layoutControll"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :key="item.i"
        @resized="resizedEvent"
        @moved="movedEvent"
        :style="item.maximize ? maximizeStyle : ''"
      >
        <grid-item-display :item="item" />
      </grid-item>
    </grid-layout>
  </q-card>
</template>

<style>
</style>

<script>
import { GridLayout, GridItem } from "vue-grid-layout";
import LayoutServices from "@/mixins/LayoutServices";
import MenuContextGrid from "./MenuContextGrid.vue";
import GridItemDisplay from "@/components/grid/GridItemDisplay.vue";
export default {
  name: "GridDisplay",
  mixins: [LayoutServices],
  props: {
    size: Object,
  },
  data() {
    return {
      positionSelect: {},
    };
  },
  components: {
    GridLayout,
    GridItem,
    MenuContextGrid,
    GridItemDisplay,
  },
  computed: {
    rowHeight() {
      return (
        (this.displaySize.height -
          this.optionGrid.margin * (this.optionGrid.maxRows + 1)) /
        this.optionGrid.maxRows
      );
    },
    styleGrid() {
      return {
        minHeight: `${this.displaySize.height}px`,
        maxHeight: `${this.displaySize.height}px`,
        backgroundSize: `calc(100% / ${this.optionGrid.colNum}) calc(100% / ${this.optionGrid.maxRows}`,
        backgroundImage: `
        linear-gradient(90deg,#e0e0e0, transparent 1px),
        linear-gradient(90deg, transparent calc(100% - 1px), #e0e0e0),
        linear-gradient( #e0e0e0, transparent 1px),
        linear-gradient(transparent calc(100% - 1px),#e0e0e0 100%)`,
      };
    },
  },
  methods: {},
  created() {
    this.onListenerInitGrid();
    this.onListenerUpdateGrid();
  },
};
</script>
