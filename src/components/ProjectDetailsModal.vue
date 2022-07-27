<template>
  <div
    class="modal fade"
    :id="modalId"
    tabindex="-1"
    :aria-labelledby="modalId + 'Label'"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ projectName }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div
          :id="'carousel' + modalId"
          class="carousel slide"
          data-bs-ride="carousel"
          data-interval="false"
        >
          <div class="carousel-inner">
            <div v-for="(image, index) in projectImages" :key="index">
              <div class="carousel-item" v-bind:class="{ active: index === 0 }">
                <img :src="image" class="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            :data-bs-target="'#carousel' + modalId"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            :data-bs-target="'#carousel' + modalId"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div class="modal-body project-modal-details">
          <div class="mb-3">
            {{ projectDetails.projectDescription }}
          </div>
          <div class="mb-2">
            <span class="label">Role:</span> {{ projectDetails.role }}
          </div>
          <div class="mb-2">
            <span class="label">Tools:</span> {{ projectDetails.techStack }}
          </div>
          <div class="mb-2">
            <span class="label">Key Responsibilities:</span>
            <ul>
              <li
                v-for="(item, index) in projectDetails.keyResponsibilities"
                v-bind:key="index"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectDetailsModal',
  components: {},
  props: {
    modalId: String,
    projectName: String,
    projectDetails: {
      projectDescription: String,
      role: String,
      techStack: String,
      keyResponsibilities: Array,
    },
    projectImages: Array,
  },
};
</script>

<style scoped></style>
