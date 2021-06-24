<template>
  <div class="bg-dark">
    <q-icon
      :name="item.extras.icon"
      v-if="!item.extras.thumb"
      :size="`${item.h * 4}rem`"
      class="absolute-center"
    />
    <q-img
      v-show="item.extras.thumb"
      class="rounded-borders"
      :src="item.extras.thumb"
      contain
      :style="`max-height:${
        selectItem ? size.height - 34 : size.height
      }px; height: ${selectItem ? size.height - 34 : size.height - 2}px;`"
    />
    <q-icon
      v-show="!selectItem"
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
  name: "VideoAppControll",
  mixins: [LayoutServices],
  props: {
    item: Object,
    size: Object,
    selectItem: Boolean,
  },
  methods: {},
  computed: {},
};
</script>

<style>
</style>