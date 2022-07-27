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
            I'm a developer currently living the otaku life in Tokyo! I like to
            think of myself as an art enthusiast, although I don't really do
            arts. I like UI designing, though. Nice to meet you!
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
