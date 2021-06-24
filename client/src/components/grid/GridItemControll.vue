<template>
  <q-card
    class="fit bg-grey-2"
    :flat="!item.maximize"
    bordered
    @mouseenter="headerApp('show')"
    @mouseleave="headerApp('hide')"
  >
    <q-resize-observer @resize="onResizeGridItem" />
    <grid-item-header :item="item" :selectItem="selectItem" :size="size" />
    <component
      class="no-drag"
      :is="item.type + '-app'"
      :item="item"
      :size="size"
      :selectItem="selectItem"
    />
  </q-card>
</template>

<script>
import LayoutServices from "@/mixins/LayoutServices";
import GridItemHeader from "./GridItemHeader.vue";

//apps
import VideoApp from "@/apps/video/VideoAppControll";
import WebViewApp from "@/apps/webview/WebViewAppControll";
import PdfApp from "@/apps/pdf/PdfAppControll";
import ImageApp from "@/apps/image/ImageAppControll";
import ClockApp from "@/apps/clock/ClockAppControll";

export default {
  name: "GridItemControll",
  mixins: [LayoutServices],
  props: {
    item: Object,
  },
  components: {
    GridItemHeader,
    VideoApp,
    WebViewApp,
    PdfApp,
    ImageApp,
    ClockApp,
  },
  data() {
    return {
      selectItem: false,
      heightHeader: 32,
      time: null,
      close: false,
      size: {
        height: 200,
        width: 200,
      },
    };
  },
  methods: {
    onResizeGridItem(size) {
      this.size = size;
    },
    headerApp(mode) {
      if (!this.item.maximize) {
        clearTimeout(this.time);
        if (mode === "show") this.selectItem = true;
        else
          this.time = setTimeout(() => {
            this.selectItem = false;
          }, 500);
      } else this.selectItem = true;
    },
  },
};
</script>

<style>
</style>