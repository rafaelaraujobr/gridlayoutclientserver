<template>
  <q-card
    class="fit bg-grey-2"
    flat
    bordered
    @mouseenter="header('show')"
    @mouseleave="header('hide')"
  >
    <q-resize-observer @resize="onResizeGridItem" />
    <q-toolbar
      class="q-pr-none bg-transparent non-selectable header-app"
      v-show="selectItem"
    >
      <q-icon :name="item.extras.icon" size="sm" />
      <q-toolbar-title class="text-body2">
        {{ item.extras.title }}
      </q-toolbar-title>
      <q-btn-group flat>
        <q-btn
          flat
          dense
          icon="mdi-window-close"
          class="q-px-xs"
          :class="close ? 'bg-negative text-white' : ''"
          @mouseenter="close = true"
          @mouseleave="close = false"
          @click="removeGridItem(item.i)"
        />
      </q-btn-group>
    </q-toolbar>
    <q-separator v-show="selectItem" />
  </q-card>
</template>

<script>
import LayoutServices from "@/mixins/LayoutServices";
export default {
  name: "GridItemControl",
  mixins: [LayoutServices],
  props: {
    item: Object,
  },
  components: {},
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