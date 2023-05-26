<template>
  <div class="home">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-4 offset-md-2">
          <img
            :src="require('@/assets/images/mica2.png')"
            class="main-image"
            alt="main-image"
          />
        </div>
        <div class="col-md-4">
          <div class="h1">Hi! I'm Mica.</div>
          <div class="h5">Full Stack Developer</div>
          <div>
            A full stack developer with 4 years of experience specializing in frontend development.
            Adept in all stages of web development, and can effectively self-manage during independent
            projects, as well as collaborate with a team. Proficient in development through Agile
            methodology’s scrum framework.
          </div>
        </div>
      </div>
      <div class="text-center">
        <div class="h6 mt-5">Find me in my networks!</div>
        <div>
          <a
            type="button"
            class="btn btn-link"
            target="_blank"
            v-for="(i, index) in networks"
            :key="index"
            :href="i.link"
          >
            <font-awesome-icon :icon="i.icon" class="home-socials" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import mainImage from '@/assets/images/mica.png';

export default defineComponent({
  name: 'HeaderComponent',
  data: () => ({
    image: mainImage,
    networks: [
      {
        name: 'LinkedIn',
        icon: 'fa-brands fa-linkedin',
        link: 'https://www.linkedin.com/in/delmontemica',
      },
      {
        name: 'GitHub',
        icon: 'fa-brands fa-github',
        link: 'https://github.com/delmontemica',
      },
      {
        name: 'Behance',
        icon: 'fa-brands fa-behance-square',
        link: 'https://www.behance.net/micaela2',
      },
      {
        name: 'Instagram',
        icon: 'fa-brands fa-instagram',
        link: 'https://www.instagram.com/delmontemica/',
      },
    ],
  }),
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
