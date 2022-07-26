<template>
  <NavbarComponent />
  <router-view />
</template>

<style lang="scss">
@import './assets/style/style.scss';
</style>
<script>
import NavbarComponent from '@/components/layout/NavbarComponent';
export default {
  components: { NavbarComponent },
};
</script>
