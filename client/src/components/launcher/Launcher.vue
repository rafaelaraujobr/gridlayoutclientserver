<template>
  <q-dialog v-model="launcher" :maximized="launcherMaximized">
    <q-card style="min-width: 700px">
      <q-toolbar class="q-pr-none" style="min-height: 0;">
        <q-icon size="sm" name="mdi-rocket-launch-outline" />
        <q-toolbar-title class="non-selectable">Launcher</q-toolbar-title>
        <q-btn-group flat>
          <q-btn
            flat
            round
            dense
            class="q-px-sm"
            icon="mdi-window-maximize"
            @click="launcherMaximized = !launcherMaximized"
          />
          <q-btn
            flat
            round
            dense
            class="q-px-sm"
            icon="mdi-window-close"
            @click="ActionSetLauncher(false)"
          />
        </q-btn-group>
      </q-toolbar>

      <q-separator />

      <q-card-section
        :style="launcherMaximized ? 'max-height: 90vh' : 'max-height: 60vh'"
        class="scroll"
      >
        <list-app />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import LauncherServices from "@/mixins/LauncherServices";
import ListApp from "./ListApp.vue";
export default {
  components: { ListApp },
  name: "Launcher",
  mixins: [LauncherServices],
  data() {
    return {
      launcherMaximized: false,
    };
  },
};
</script>

<style>
</style>