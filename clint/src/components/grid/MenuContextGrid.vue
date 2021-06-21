<template>
  <q-menu
    touch-position
    context-menu
    target=".vue-grid-layout"
    @before-show="getCellFromPixel($event, 'gridControl')"
  >
    <q-list dense style="min-width: 150px">
      <q-item
        clickable
        v-close-popup
        @click="
          addGridItem('video', {
            url: 'videos/coelhao.mp4',
            icon: 'mdi-video-outline',
            title: 'Coelhão',
            mute: true,
          })
        "
      >
        <q-item-section avatar>
          <q-icon name="mdi-video-outline" size="1.3rem" />
        </q-item-section>
        <q-item-section>Coelhão</q-item-section>
      </q-item>
    </q-list>
  </q-menu>
</template>

<script>
import LayoutServices from "@/mixins/LayoutServices";
export default {
  name: "MenuContextGrid",
  mixins: [LayoutServices],
};
</script>

<style>
</style>