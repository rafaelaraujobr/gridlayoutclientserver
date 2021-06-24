<template>
  <q-intersection transition="jump-down" v-show="selectItem">
    <q-toolbar
      class="q-pr-none q-pl-xs bg-grey-3 non-selectable header-app"
      v-if="selectItem"
    >
      <q-icon :name="item.extras.icon" size="sm" class="q-px-none" />
      <q-toolbar-title class="text-body2 q-pl-xs text-weight-medium">
        {{ item.name }}
      </q-toolbar-title>
      <q-btn-group flat v-if="size.width >= 300">
        <q-btn
          flat
          v-if="mute"
          dense
          :icon="!item.extras.mute ? 'mdi-volume-high' : 'mdi-volume-off'"
          class="q-px-xs"
          size="0.8rem"
          @click="muteGridItem(item.i, !item.extras.mute)"
        />
        <q-btn
          flat
          dense
          size="0.8rem"
          :icon="!item.maximize ? 'mdi-window-maximize' : 'mdi-window-restore'"
          class="q-px-xs"
          @click="maximizeGridItem(item.i, !item.maximize)"
        />
        <q-btn
          flat
          dense
          icon="mdi-window-close"
          class="q-px-xs"
          size="0.8rem"
          @click="removeGridItem(item.i)"
        />
      </q-btn-group>

      <q-btn
        dense
        icon="mdi-dots-vertical"
        flat
        class="q-px-xs"
        size="0.8rem"
        v-if="size.width < 300"
      >
        <q-menu transition-show="jump-down" transition-hide="jump-up">
          <q-list style="min-width: 100px" dense>
            <q-item
              clickable
              v-close-popup v-if="mute"
              @click="muteGridItem(item.i, !item.extras.mute)"
            >
              <q-item-section avatar>
                <q-icon
                  :name="
                    !item.extras.mute ? 'mdi-volume-high' : 'mdi-volume-off'
                  "
                />
              </q-item-section>
              <q-item-section>{{
                !item.extras.mute ? "Mute" : "Unmute"
              }}</q-item-section>
            </q-item>
            <q-item
              clickable
              v-close-popup
              @click="maximizeGridItem(item.i, !item.maximize)"
            >
              <q-item-section avatar>
                <q-icon
                  :name="
                    !item.maximize
                      ? 'mdi-window-maximize'
                      : 'mdi-window-restore'
                  "
                />
              </q-item-section>
              <q-item-section>{{
                !item.maximize ? "Maximize" : "Minimize"
              }}</q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="removeGridItem(item.i)">
              <q-item-section avatar>
                <q-icon name="mdi-window-close" />
              </q-item-section>
              <q-item-section>Close</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </q-toolbar>
    <q-separator v-if="selectItem" />
  </q-intersection>
</template>

<script>
import LayoutServices from "@/mixins/LayoutServices";
export default {
  name: "GridItemHeader",
  mixins: [LayoutServices],
  props: {
    selectItem: Boolean,
    item: Object,
    size: Object,
  },
  computed: {
    mute() {
      switch (this.item.type) {
        case "video":
          return true;
        case "web-view":
          return true;
        default:
          return false;
      }
    },
  },
};
</script>

<style>
</style>