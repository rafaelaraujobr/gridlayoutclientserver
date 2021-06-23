<template>
  <q-card
    flat
    bordered
    @click="eventClick($event)"
    @mousemove="eventMouseMove($event, displaySizeControll)"
    class="full-width"
    :style="marginTop"
  >
    <grid-layout
      :layout.sync="layoutControll"
      :col-num="optionGrid.colNum"
      :max-rows="optionGrid.maxRows"
      :row-height="rowHeight"
      :is-draggable="true"
      :is-resizable="true"
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
        drag-allow-from=".header-app"
        drag-ignore-from=".no-drag"
        @resized="resizedEvent"
        @moved="movedEvent"
      >
        <grid-item-controll :item="item" />
      </grid-item>
    </grid-layout>
    <launcher />
  </q-card>
</template>

<style>
</style>

<script>
import { GridLayout, GridItem } from "vue-grid-layout";
import LayoutServices from "@/mixins/LayoutServices";
import MenuContextGrid from "./MenuContextGrid.vue";
import GridItemControll from "@/components/grid/GridItemControll.vue";
import Launcher from "../launcher/Launcher.vue";
import { uid } from "quasar";
export default {
  name: "GridControll",
  mixins: [LayoutServices],
  data() {
    return {
      positionSelect: {},
    };
  },
  components: {
    GridLayout,
    GridItem,
    MenuContextGrid,
    GridItemControll,
    Launcher,
  },
  computed: {
    displaySizeControll() {
      let ratioWidthToHeight =
        (this.displaySize.width - 51) / this.displaySize.height;
      return {
        height:
          ((this.$q.screen.width - ratioWidthToHeight) *
            this.displaySize.height) /
            this.displaySize.width || 600,
        width: this.$q.screen.width || 800,
      };
    },
    rowHeight() {
      return (
        (this.displaySizeControll.height -
          this.optionGrid.margin * (this.optionGrid.maxRows + 1)) /
        this.optionGrid.maxRows
      );
    },
    marginTop() {
      let top =
        (this.$q.screen.height + 51) / 2 - this.displaySizeControll.height / 2;

      return { top: top < 0 ? 51 : top + "px", position: "fixed" };
    },
    styleGrid() {
      return {
        minHeight: `${this.displaySizeControll.height}px`,
        maxHeight: `${this.displaySizeControll.height}px`,
        backgroundSize: `calc(100% / ${this.optionGrid.colNum}) calc(100% / ${this.optionGrid.maxRows}`,
        backgroundImage: `
        linear-gradient(90deg,#e0e0e0, transparent 1px),
        linear-gradient(90deg, transparent calc(100% - 1px), #e0e0e0),
        linear-gradient( #e0e0e0, transparent 1px),
        linear-gradient(transparent calc(100% - 1px),#e0e0e0 100%)`,
      };
    },
    layoutGuide() {
      let layout = [];
      for (let row = 0; row < this.optionGrid.maxRows; row++) {
        for (let col = 0; col <= this.optionGrid.colNum; col++) {
          layout.push({ x: col, y: row, h: 1, w: 1, i: uid() });
        }
      }
      return layout;
    },
  },
  methods: {},
  created() {
    this.onListenerInitGrid();
    this.onListenerDisplaySize();
    this.onListenerUpdateGrid();
  },
};
</script>
