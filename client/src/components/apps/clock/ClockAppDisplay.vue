<template>
  <div class="fit text-center q-pt-lg">
    <clock :size="size.height - 60 + 'px'"  color="#FFFFFF"
        bg="#31CCEC"></clock>
  </div>
</template>

<script>
import LayoutServices from "@/mixins/LayoutServices";
import Clock from "vue-clock2";
export default {
  name: "ClockAppDisplay",
  components: { Clock },
  mixins: [LayoutServices],
  props: {
    item: Object,
    size: Object,
  },
  data() {
    return {
      time: "10:40",
    };
  },
  methods: {},
  mounted() {},

  beforeDestroy() {},
};
</script>

<style>
</style>