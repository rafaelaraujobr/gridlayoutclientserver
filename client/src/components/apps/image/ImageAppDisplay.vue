<template>
  <video
    :width="size.width"
    :height="size.height"
    autoplay
    loop
    :muted="item.extras.mute"
    class="bg-dark rounded-borders"
  >
    <source :src="require('@/assets/' + item.extras.url)" type="video/mp4" />
  </video>
</template>

<script>
import LayoutServices from "@/mixins/LayoutServices";
export default {
  name: "VideoAppDisplay",
  mixins: [LayoutServices],
  props: {
    item: Object,
    size: Object,
  },
  data() {
    return {
      time: null,
      quality: 0.5,
      interval: 3000,
      proportion:2
    };
  },
  methods: {
    screenShot(el) {
      let canvas = document.createElement("canvas");
      let context = canvas.getContext("2d");
      canvas.width = this.size.width / this.proportion;
      canvas.height = this.size.height / this.proportion;
      context.drawImage(el, 0, 0, this.size.width / this.proportion, this.size.height / this.proportion);
      let base64Image = canvas.toDataURL("image/jpeg", this.quality);
      this.sendThumbGridItem({
        i: this.item.i,
        thumb: base64Image,
      });
    },
  },
  mounted() {
    this.time = setInterval(() => {
      this.screenShot(this.$el);
    }, this.interval);
  },

  beforeDestroy() {
    clearInterval(this.time);
  },
};
</script>

<style>
</style>