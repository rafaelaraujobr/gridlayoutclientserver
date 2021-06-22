<template>
  <div>
    <q-icon
      :name="item.extras.icon"
      v-if="!item.extras.thumb"
      :size="`${item.h * 4}rem`"
      class="absolute-center"
    />
    <q-img
      v-if="item.extras.thumb"
      class="rounded-borders"
      :src="item.extras.thumb"
      contain
      :style="`max-height:${
        selectItem ? size.height - 34 : size.height - 2
      }px; height: ${selectItem ? size.height - 34 : size.height - 2}px;`"
    />
  </div>
</template>

<script>
import LayoutServices from "@/mixins/LayoutServices";
export default {
  name: "VideoAppControll",
  mixins: [LayoutServices],
  props: {
    item: Object,
    size: Object,
    selectItem: Boolean,
  },
};
</script>

<style>
</style>