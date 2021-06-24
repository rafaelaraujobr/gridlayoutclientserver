<template>
  <q-layout view="hHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-toolbar-title>
          <img
            :src="require('@/assets/images/logo_white.svg')"
            :height="16"
            class="non-selectable"
        /></q-toolbar-title>
        <div class="q-px-md text-weight-medium">{{ip}}</div>
        <q-separator vertical spaced dark />
        <q-btn
          flat
          dense
          no-caps
          @click="$q.fullscreen.toggle()"
          :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
          size="1rem"
        />
      </q-toolbar>
    </q-header>
    <q-page-container class="bg-grey-2">
      <q-page>
        <grid-display />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import LayoutServices from "@/mixins/LayoutServices";
import GridDisplay from "@/components/grid/GridDisplay.vue";

export default {
  name: "Display",
  mixins: [LayoutServices],
  components: {
    GridDisplay,
  },
  computed:{
    ip(){
      return window.location.protocol + "//" + window.location.host;
    }
  },
  created() {
    this.onListenerInitGrid();
    this.onListenerClickMouse();
    this.onListenerMoveMouse();
    this.onListenerUpdateGrid();
  },
};
</script>
