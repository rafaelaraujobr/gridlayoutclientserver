<template>
  <q-card flat class="bg-transparent">
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
      <img
        class="absolute-center"
        :src="require('@/assets/images/logo_color.svg')"
        style="opacity: 0.2; width: 40vw"
      />
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
      class="q-pa-none q-ma-none"
      :style="`top:${mousePosition.y}px;left:${mousePosition.x}px; position:fixed`"
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
        linear-gradient(90deg,#027BE3, transparent 1px),
        linear-gradient( #027BE3, transparent 1px)`,
      };
    },
  },
  watch: {
    "$q.screen.width"() {
      this.ActionSetDisplaySize({
        width: this.$q.screen.width,
        height: this.$q.screen.height - 51,
      });
      this.sendDisplaySize(this.displaySize);
      console.log(this.displaySize);
    },
    "$q.screen.height"() {
      this.ActionSetDisplaySize({
        width: this.$q.screen.width,
        height: this.$q.screen.height - 51,
      });
      this.sendDisplaySize(this.displaySize);
      console.log(this.displaySize);
    },
  },
  methods: {},
};
</script>
