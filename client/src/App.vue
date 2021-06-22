<template>
  <q-layout view="hHh Lpr lFf">
    <q-header v-if="header" bordered class="bg-white text-dark">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          v-if="header"
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
          size="1rem"
        />
        <q-separator vertical spaced />
        <q-toolbar-title>Controll - POC</q-toolbar-title>
        <q-separator vertical spaced />
        <q-btn
          flat
          dense
          round
          @click="rightDrawerOpen = !rightDrawerOpen"
          icon="mdi-tune"
          size="1rem"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      v-if="header"
      bordered
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
      v-if="header"
      side="right"
      v-model="rightDrawerOpen"
      bordered
      overlay
      content-class="bg-white"
    >
    </q-drawer>

    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import LayoutServices from "@/mixins/LayoutServices";
import LauncherServices from "@/mixins/LauncherServices";
export default {
  name: "LayoutDefault",
  mixins: [LayoutServices, LauncherServices],
  data() {
    return {
      leftDrawerOpen: false,
      rightDrawerOpen: false,
    };
  },
  created() {
    if (this.$q.platform.is.electron) {
      this.$router.push({ name: "Display" });
    }
  },
};
</script>

<style>
</style>
