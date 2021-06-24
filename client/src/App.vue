<template>
  <router-view />
</template>

<script>
export default {
  name: "LayoutDefault",
  created() {
    if (this.$q.platform.is.electron) this.$router.push({ name: "Display" });
  },
};
</script>

<style>
</style>
