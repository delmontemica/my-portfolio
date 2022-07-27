<template>
  <div
    data-bs-spy="scroll"
    data-bs-target="#navbar-scroll"
    data-bs-root-margin="0px 0px -40%"
    data-bs-smooth-scroll="true"
    class="scrollspy-example bg-light p-3 rounded-2"
    tabindex="0"
  >
    <header-component id="home" />
    <projects-component id="projects" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import ProjectsComponent from '@/components/ProjectsComponent.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    ProjectsComponent,
    HeaderComponent,
  },
});
</script>
