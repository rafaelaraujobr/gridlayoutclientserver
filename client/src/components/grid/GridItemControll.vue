<template>
  <q-card
    class="fit bg-grey-2"
    :flat="!item.maximize"
    bordered
    @mouseenter="header('show')"
    @mouseleave="header('hide')"
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
import VideoApp from "@/components/apps/video/VideoAppControll";
import WebViewApp from "@/components/apps/webview/WebViewAppControll";
import PdfApp from "@/components/apps/pdf/PdfAppControll";
import ImageApp from "@/components/apps/image/ImageAppControll";

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
    header(mode) {
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