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
      :src="item.extras.thumb"
      contain
      class="rounded-borders"
      :style="`max-height:${
        selectItem ? size.height - 34 : size.height - 2
      }px; height: ${selectItem ? size.height - 34 : size.height - 2}px;`"
    />
    <q-icon
      v-if="$q.platform.is.electron && !selectItem"
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
  name: "WebViewAppControl",
  mixins: [LayoutServices],
  props: {
    item: Object,
    size: Object,
    selectItem: Boolean,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
</style>