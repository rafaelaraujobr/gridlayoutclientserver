<template>
  <q-layout view="hHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
          size="1rem"
        />
        <q-separator vertical spaced dark />
        <q-toolbar-title>
          <img
            :src="require('@/assets/images/logo_white.svg')"
            :height="16"
            class="non-selectable"
        /></q-toolbar-title>
        <q-btn
          flat
          dense
          no-caps
          @click="$q.fullscreen.toggle()"
          :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
          size="1rem"
        />
        <q-separator vertical spaced dark />
        <q-btn
          flat
          dense
          @click="rightDrawerOpen = !rightDrawerOpen"
          icon="mdi-tune"
          size="1rem"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      overlay
      content-class="bg-white"
    >
      <q-list>
        <q-item clickable to="/">
          <q-item-section avatar>
            <q-icon name="mdi-gamepad" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Controll</q-item-label>
            <q-item-label caption>Display control</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/display">
          <q-item-section avatar>
            <q-icon name="mdi-presentation" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Display</q-item-label>
            <q-item-label caption>Presentation panel </q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable @click="ActionSetLauncher(true)">
          <q-item-section avatar>
            <q-icon name="mdi-rocket-launch-outline" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Launcher</q-item-label>
            <q-item-label caption>App launcher</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable @click="ActionSetPointer(!pointer)">
          <q-item-section avatar>
            <q-icon :name="!pointer ? 'mdi-mouse' : 'mdi-mouse-off'" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Pointer</q-item-label>
            <q-item-label caption>Mouse on display</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-drawer
      side="right"
      v-model="rightDrawerOpen"
      bordered
      overlay
      content-class="bg-white"
    >
    </q-drawer>
    <q-page-container class="bg-grey-2">
      <q-page padding>
        <grid-controller />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import GridController from "@/components/grid/GridControll.vue";
import LayoutServices from "@/mixins/LayoutServices";
export default {
  name: "Controll",
  mixins: [LayoutServices],
  data() {
    return {
      leftDrawerOpen: false,
      rightDrawerOpen: false,
    };
  },
  components: {
    GridController,
  },
  created() {
    this.ActionSetHeader(true);
  },
};
</script>
