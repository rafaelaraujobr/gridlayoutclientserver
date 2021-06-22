<template>
  <q-card flat>
    <grid-layout
      :layout.sync="layoutControll"
      :col-num="optionGrid.colNum"
      :max-rows="optionGrid.maxRows"
      :row-height="rowHeight"
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
        class="no-scroll hide-scrollbar non-selectable"
        :style="item.maximize ? maximizeStyle : ''"
      >
        <grid-item-display :item="item" />
      </grid-item>
    </grid-layout>
    <q-icon
      name="mdi-cursor-pointer"
      size="md"
      color="primary"
      :style="`top:${mousePosition.y}px;left:${mousePosition.x}px; position:absolute`"
    />
  </q-card>
</template>

<style>
</style>

<script>
import { GridLayout, GridItem } from "vue-grid-layout";
import LayoutServices from "@/mixins/LayoutServices";
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
  watch: {
    "$q.screen.width"() {
      this.ActionSetDisplaySize({
        width: this.$q.screen.width,
        height: this.$q.screen.height - 3,
      });
      this.sendDisplaySize(this.displaySize);
      console.log(this.displaySize);
    },
    "$q.screen.height"() {
      this.ActionSetDisplaySize({
        width: this.$q.screen.width,
        height: this.$q.screen.height - 3,
      });
      this.sendDisplaySize(this.displaySize);
      console.log(this.displaySize);
    },
  },
  methods: {},
};
</script>
