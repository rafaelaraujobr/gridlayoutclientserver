<template>
  <q-card
    class="fit bg-grey-2"
    flat
    bordered
  >
    <q-resize-observer @resize="onResizeGridItem" />
    <component :is="item.type + '-app'" :item="item" :size="size" />
    <q-icon
      :name="!item.extras.mute ? 'mdi-volume-high' : 'mdi-volume-off'"
      class="absolute-right q-pa-xs"
      color="grey-3"
      size="sm"
    />
  </q-card>
</template>

<script>
import LayoutServices from "@/mixins/LayoutServices";

import VideoApp from "@/components/apps/video/VideoAppDisplay";
import WebViewApp from "@/components/apps/webview/WebViewAppDisplay";
import PdfApp from "@/components/apps/pdf/PdfAppDisplay";
import ImageApp from "@/components/apps/image/ImageAppDisplay";
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
    ImageApp
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
