<template>
  <div>
    <div class="fit text-center">
      <clock
        class="absolute"
        :style="{ top: `${selectItem ? 15 : 30}px` }"
        :size="size.height - 60 + 'px'"
        color="#FFFFFF"
        bg="#31CCEC"
      ></clock>
    </div>
  </div>
</template>

<script>
import LayoutServices from "@/mixins/LayoutServices";
import Clock from "vue-clock2";
export default {
  name: "ClockAppControll",
  mixins: [LayoutServices],
  props: {
    item: Object,
    size: Object,
    selectItem: Boolean,
  },
  components: { Clock },
  data() {
    return {
      time: "10:40",
    };
  },
};
</script>

<style>
</style>