<template>
  <nav class="navbar navbar-expand-lg" id="navbar-scroll">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Micaela</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#home">Home</a>
          </li>
          <!--          <li class="nav-item">-->
          <!--            <a class="nav-link" href="#resume">Resume</a>-->
          <!--          </li>-->
          <li class="nav-item">
            <a class="nav-link" href="#projects">Projects</a>
          </li>
          <!--          <li class="nav-item">-->
          <!--            <a class="nav-link" href="#contact">Contact</a>-->
          <!--          </li>-->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
};
</script>

<style scoped></style>
