<template>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-4 offset-md-2">
        <img :src="require('@/assets/images/mica2.png')" class="main-image" />
      </div>
      <div class="col-md-4">
        <div class="h1">Hello!</div>
        <div class="h5">A Bit About Me</div>
        <div>
          I'm a frontend developer currently living the otaku life in Tokyo! I
          like to think of myself as an art enthusiast, although I don't really
          do arts. I like UI designing, though. Nice to meet you!
        </div>
        <div class="d-flex my-4">
          <button type="button" class="btn btn-home btn-coral-pink mx-2">
            Resume
          </button>
          <button type="button" class="btn btn-home btn-mustard-yellow mx-2">
            Projects
          </button>
          <button type="button" class="btn btn-home btn-sky-blue mx-2">
            Contact
          </button>
        </div>
      </div>
    </div>
    <div class="text-center">
      <div class="h6 mt-5">Find me in my networks!</div>
      <div>
        <button
          type="button"
          class="btn btn-link"
          v-for="(i, index) in networks"
          :key="index"
          :href="i.link"
        >
          <font-awesome-icon :icon="i.icon" class="home-socials" />
        </button>
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
      { name: 'LinkedIn', icon: 'fa-brands fa-linkedin', link: '' },
      { name: 'GitHub', icon: 'fa-brands fa-github', link: '' },
      { name: 'Behance', icon: 'fa-brands fa-behance-square', link: '' },
      { name: 'Instagram', icon: 'fa-brands fa-instagram', link: '' },
    ],
  }),
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
