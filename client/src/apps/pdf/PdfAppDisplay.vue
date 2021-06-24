<template>
  <div class="fit">
    <vue-pdf-app :pdf="require('@/assets/' + item.extras.url)"></vue-pdf-app>
  </div>
</template>

<script>
import VuePdfApp from "vue-pdf-app";
import "vue-pdf-app/dist/icons/main.css";
export default {
  components: {
    VuePdfApp,
  },
  props: {
    item: Object,
    size: Object,
  },
  data() {
    return {
      currentPage: 0,
      pageCount: 0,
    };
  },
};
</script>