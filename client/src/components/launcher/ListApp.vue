<template>
  <div>
    <div class="row q-px-xs">
      <div class="q-pb-sm text-h6">
        <q-icon name="mdi-apps" color="primary" size="1.6rem" /> Apps
      </div>
      <q-space />
      <q-input
        outlined
        dense
        class="bg-white"
        debounce="300"
        v-model="filter"
        placeholder="Search"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>
    <q-table
      class="q-mt-sm scroll"
      flat
      bordered
      :grid="grid"
      :data="data"
      :columns="columns"
      row-key="name"
      :filter="filter"
      :hide-header="grid"
      :pagination.sync="pagination"
      :rows-per-page-options="rowsPerPageOptions"
    >
      <!-- <template v-slot:top-right> </template> -->
      <template v-slot:item="props">
        <div class="q-pa-xs" :class="ministate ? 'col-2' : 'col-3'">
          <q-card flat bordered class="fit" @dblclick="addGridItem(props.row)">
            <q-btn
              flat
              round
              dense
              color="warning"
              icon="star"
              class="absolute"
              style="top: 20px; right: 10px; transform: translateY(-50%)"
            />
            <q-card-section class="text-center q-pb-none">
              <q-icon
                size="3rem"
                color="primary"
                :name="props.row.extras.icon"
                class="q-pa-none"
              />
            </q-card-section>
            <q-card-section class="flex flex-center">
              <div class="position absolute">{{ props.row.name }}</div>
            </q-card-section>
            <q-menu touch-position context-menu>
              <q-list dense style="min-width: 150px">
                <q-item clickable v-close-popup @click="addGridItem(props.row)">
                  <q-item-section avatar>
                    <q-icon name="mdi-open-in-app" size="1.3rem" />
                  </q-item-section>
                  <q-item-section>Open</q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section avatar>
                    <q-icon name="mdi-information-outline" size="1.3rem" />
                  </q-item-section>
                  <q-item-section>Information</q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section avatar>
                    <q-icon name="mdi-pencil-outline" size="1.3rem" />
                  </q-item-section>
                  <q-item-section>Edit</q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section avatar>
                    <q-icon name="mdi-star" size="1.3rem" />
                  </q-item-section>
                  <q-item-section>Add to favorite</q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section avatar>
                    <q-icon name="mdi-trash-can-outline" size="1.3rem" />
                  </q-item-section>
                  <q-item-section>Delete</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-card>
        </div>
      </template>
    </q-table>
  </div>
</template>

<script>
import LauncherServices from "@/mixins/LauncherServices";
export default {
  name: "ListApp",
  mixins: [LauncherServices],
  props: {
    ministate: Boolean,
  },
  data() {
    return {
      grid: true,
      filter: "",
      pagination: {
        page: 1,
        rowsPerPage: this.getItemsPerPage(),
      },
      columns: [
        {
          name: "name",
          required: true,
          label: "Name",
          align: "left",
          field: "name",
          sortable: true,
        },
      ],
      data: [
        {
          name: "Coelhão",
          author: "Rafael Araujo",
          type: "video",
          extras: {
            url: "videos/coelhao.mp4",
            icon: "mdi-video-outline",
            mute: true,
          },
        },
        {
          name: "Clock",
          author: "Rafael Araujo",
          type: "clock",
          extras: {
            icon: "mdi-clock-time-four-outline",
          },
        },
        {
          name: "Google",
          author: "Rafael Araujo",
          type: "web-view",
          extras: {
            url: "https://google.com.br",
            icon: "mdi-google",
            mute: true,
          },
        },
        {
          name: "WhatsApp",
          author: "Rafael Araujo",
          type: "web-view",
          extras: {
            url: "https://web.whatsapp.com/",
            icon: "mdi-whatsapp",
            mute: true,
          },
        },
        {
          name: "Youtube",
          author: "Rafael Araujo",
          type: "web-view",
          extras: {
            url: "https://www.youtube.com/",
            icon: "mdi-youtube",
            mute: true,
          },
        },
        {
          name: "Github",
          author: "Rafael Araujo",
          type: "web-view",
          extras: {
            url: "https://github.com/rafaelaraujobr/",
            icon: "mdi-github",
            mute: true,
          },
        },
        {
          name: "Drive",
          author: "Rafael Araujo",
          type: "web-view",
          extras: {
            url: "https://google.com.br",
            icon: "mdi-google-drive",
            mute: true,
          },
        },
        {
          name: "Gmail",
          author: "Rafael Araujo",
          type: "web-view",
          extras: {
            url: "https://mail.google.com/",
            icon: "mdi-gmail",
            mute: true,
          },
        },
        {
          name: "PDF",
          author: "Rafael Araujo",
          type: "pdf",
          extras: {
            url: "pdfs/cockpit.pdf",
            icon: "mdi-file-pdf-box-outline",
          },
        },
      ],
    };
  },
  computed: {
    rowsPerPageOptions() {
      if (this.$q.screen.gt.xs) {
        return this.$q.screen.gt.sm ? [3, 6, 20] : [3, 6];
      }

      return [3];
    },
  },
  watch: {
    ministate() {
      this.pagination.rowsPerPage = this.getItemsPerPage();
    },
  },
  methods: {
    getItemsPerPage() {
      if (this.ministate) return 15;
      return 12;
    },
  },
};
</script>

