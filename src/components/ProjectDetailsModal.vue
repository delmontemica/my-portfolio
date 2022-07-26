<template>
  <div
    class="modal fade"
    :id="modalId"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
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
        <div class="modal-body">
          <div class="mb-2">
            Project Description: {{ projectDetails.projectDescription }}
          </div>
          <div class="mb-2">Role: {{ projectDetails.role }}</div>
          <div class="mb-2">Tools: {{ projectDetails.techStack }}</div>
          <div class="mb-2">
            Key Responsibilities:
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
  props: {
    modalId: String,
    showModal: Boolean,
    projectName: String,
    projectDetails: {
      projectDescription: String,
      role: String,
      techStack: String,
      keyResponsibilities: Array,
    },
  },
};
</script>

<style scoped></style>
