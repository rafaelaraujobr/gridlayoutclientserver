<template>
  <q-layout view="hHh Lpr lFf">
    <q-header
      v-if="!$q.platform.is.electron"
      bordered
      class="bg-white text-dark"
    >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
          size="1rem"
        />
        <q-separator vertical spaced />
        <q-toolbar-title> Controll</q-toolbar-title>
        <q-separator vertical spaced />
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
          size="1rem"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered content-class="bg-grey-2">
      <q-list>
        <q-item clickable to="/display">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Display</q-item-label>
            <q-item-label caption>quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "LayoutDefault",

  data() {
    return {
      leftDrawerOpen: false,
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
