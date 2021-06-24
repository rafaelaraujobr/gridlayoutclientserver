<template>
  <div class="fit rounded-borders">
    <webview
      v-if="$q.platform.is.electron"
      useragent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36 Edg/91.0.864.41"
      :src="item.extras.url"
      class="fit rounded-borders"
      ref="webview"
    ></webview>
    <div v-if="!$q.platform.is.electron" class="absolute-center text-center text-white">
      <q-icon name="mdi-electron-framework" :size="`${item.h * 4}rem`" />
      <div>Available by electron</div>
    </div>
    <q-icon   v-if="$q.platform.is.electron"
      :name="!item.extras.mute ? 'mdi-volume-high' : 'mdi-volume-off'"
      class="absolute-right q-pa-xs"
      color="grey-3"
      size="sm"
    />
  </div>
</template>

<script>
import LayoutServices from "@/mixins/LayoutServices";
export default {
  name: "WebViewApp",
  mixins: [LayoutServices],
  props: {
    item: Object,
    size: Object,
  },
  data() {
    return {
      time: null,
      fps: 1,
    };
  },
  computed: {
    webview() {
      return this.$refs.webview;
    },
  },
  watch: {
    "item.extras.mute"() {
      this.muteWebView(!this.item.extras.mute);
    },
  },
  methods: {
    initWebView() {
      this.webview.addEventListener("did-start-loading", this.loadStart);
      this.webview.addEventListener("did-stop-loading", this.loadStop);
    },
    loadStart() {
      console.log("init WebView");
    },
    loadStop() {
      this.muteWebView(!this.item.extras.mute);
    },
    muteWebView(value) {
      this.webview.setAudioMuted(value);
    },
    async screenShot(el) {
      let capturePage = await el.capturePage([
        0,
        0,
        this.size.width / 20,
        this.size.height / 20,
      ]);
      let base64Image = await capturePage.toDataURL("image/jpeg", 0.1);
      this.sendThumbGridItem({
        i: this.item.i,
        thumb: base64Image,
      });
    },
  },
  mounted() {
    this.time = setInterval(() => {
      if (this.$q.platform.is.electron) this.screenShot(this.$el);
    }, 5000);
  },

  beforeDestroy() {
    clearInterval(this.time);
  },
};
</script>

<style>
</style>