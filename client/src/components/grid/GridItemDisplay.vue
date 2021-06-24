<template>
  <q-card class="fit bg-dark" flat bordered>
    <q-resize-observer @resize="onResizeGridItem" />
    <component :is="item.type + '-app'" :item="item" :size="size" />
  </q-card>
</template>

<script>
import LayoutServices from "@/mixins/LayoutServices";

import VideoApp from "@/components/apps/video/VideoAppDisplay";
import WebViewApp from "@/components/apps/webview/WebViewAppDisplay";
import PdfApp from "@/components/apps/pdf/PdfAppDisplay";
import ImageApp from "@/components/apps/image/ImageAppDisplay";
import ClockApp from "@/components/apps/clock/ClockAppDisplay";
export default {
  name: "GridItemDisplay",
  mixins: [LayoutServices],
  props: {
    item: Object,
  },
  components: {
    VideoApp,
    WebViewApp,
    PdfApp,
    ImageApp,
    ClockApp,
  },
  data() {
    return {
      time: null,
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
  },
};
</script>
