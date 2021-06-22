<template>
  <q-menu
    touch-position
    context-menu
    target=".vue-grid-layout"
    @before-show="getCellFromPixel($event, 'gridControl')"
  >
    <q-list dense style="min-width: 180px">
      <q-item clickable v-close-popup @click="ActionSetLauncher(true)">
        <q-item-section avatar>
          <q-icon name="mdi-launch" size="1.3rem" />
        </q-item-section>
        <q-item-section>Launcher</q-item-section>
      </q-item>
      <q-separator />
      <q-item
        clickable
        v-close-popup
        @click="
          addFastGridItem({
            name: 'Coelhão',
            type: 'video',
            extras: {
              url: 'videos/coelhao.mp4',
              icon: 'mdi-video-outline',
              mute: true,
            },
          })
        "
      >
        <q-item-section avatar>
          <q-icon name="mdi-video-outline" size="1.3rem" />
        </q-item-section>
        <q-item-section>Coelhão</q-item-section>
      </q-item>
      <q-item
        clickable
        v-close-popup
        @click="
          addFastGridItem({
            name: 'Google',
            type: 'web-view',
            extras: {
              url: 'https://google.com.br',
              icon: 'mdi-google',
              mute: true,
            },
          })
        "
      >
        <q-item-section avatar>
          <q-icon name="mdi-google" size="1.3rem" />
        </q-item-section>
        <q-item-section>Google</q-item-section>
      </q-item>
    </q-list>
  </q-menu>
</template>

<script>
import LayoutServices from "@/mixins/LayoutServices";
import LauncherServices from "@/mixins/LauncherServices";
export default {
  name: "MenuContextGrid",
  mixins: [LayoutServices, LauncherServices],
  data() {
    return {};
  },
};
</script>

<style>
</style>