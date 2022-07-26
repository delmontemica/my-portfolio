<template>
  <div class="container py-5">
    <div class="row">
      <div
        class="col-lg-4 mb-3"
        v-for="(project, index) in projectsList"
        :key="index"
        data-bs-toggle="modal"
        :data-bs-target="'#' + project.projectId"
      >
        <div class="hover hover-1 text-white rounded">
          <img :src="project.projectThumbnail" alt="" />
          <div class="hover-overlay"></div>
          <div class="hover-1-content px-5 py-4">
            <h3 class="hover-1-title text-uppercase font-weight-bold mb-0">
              <span class="font-weight-light">{{ project.projectName }}</span>
            </h3>
            <p class="hover-1-description font-weight-light mb-0">
              {{ project.projectSnippet }}
            </p>
          </div>
        </div>

        <ProjectDetailsModal
          :modalId="project.projectId"
          :projectName="project.projectName"
          :projectDetails="project.projectDetails"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectDetailsModal from '@/components/ProjectDetailsModal.vue';

export default {
  name: 'ProjectsView',
  data: () => ({
    showModal: false,
    projectsList: [
      {
        projectId: 'greatEkyc',
        projectThumbnail: require('@/assets/images/GreateKYC-Preview.png'),
        projectName: 'Great eKYC',
        projectSnippet: 'This is a short project description.',
        projectDetails: {
          projectDescription: 'test',
          role: 'Frontend Developer, UI Designer',
          techStack: 'ReactJS, Laravel',
          keyResponsibilities: ['test', 'test'],
        },
      },
      {
        projectId: 'greatSign',
        projectThumbnail: require('@/assets/images/GreatSign-Preview.png'),
        projectName: 'Great Sign',
        projectSnippet: 'This is a short project description.',
        projectDetails: {
          projectDescription: 'test',
          role: 'Full Stack Developer',
          techStack: 'test',
          keyResponsibilities: ['test', 'test'],
        },
      },
      {
        projectId: 'greatSignRedesign',
        projectThumbnail: require('@/assets/images/GreatSign-Preview.png'),
        projectName: 'Great Sign Redesigned',
        projectSnippet: 'This is a short project description.',
        projectDetails: {
          projectDescription: 'test',
          role: 'UI Designer',
          techStack: 'test',
          keyResponsibilities: ['test', 'test'],
        },
      },
      {
        projectId: 'chukidan',
        projectThumbnail: require('@/assets/images/DaidoChukidan-Preview.png'),
        projectName: 'Chukidan',
        projectSnippet: 'This is a short project description.',
        projectDetails: {
          projectDescription: 'test',
          role: 'Frontend Developer, UI Designer',
          techStack: 'test',
          keyResponsibilities: ['test', 'test'],
        },
      },
      {
        projectId: 'nisshiren',
        projectThumbnail: require('@/assets/images/Nisshiren-Preview.png'),
        projectName: 'Identity Authentication',
        projectSnippet: 'This is a short project description.',
        projectDetails: {
          projectDescription: 'test',
          role: 'Full Stack Developer',
          techStack: 'test',
          keyResponsibilities: ['test', 'test'],
        },
      },
      {
        projectId: 'babelMethod',
        projectThumbnail: require('@/assets/images/BabelMethod-Preview.png'),
        projectName: 'Babel Method',
        projectSnippet: 'This is a short project description.',
        projectDetails: {
          projectDescription: 'test',
          role: 'Frontend Developer',
          techStack: 'test',
          keyResponsibilities: ['test', 'test'],
        },
      },
      {
        projectId: 'okutara',
        projectThumbnail: require('@/assets/images/Okutara-Preview.png'),
        projectName: 'Okutara',
        projectSnippet: 'This is a short project description.',
        projectDetails: {
          projectDescription: 'test',
          role: 'Full Stack Developer',
          techStack: 'test',
          keyResponsibilities: ['test', 'test'],
        },
      },
      {
        projectId: 'dnus',
        projectThumbnail: require('@/assets/images/Dnus-Preview.png'),
        projectName: 'DNUS',
        projectSnippet: 'This is a short project description.',
        projectDetails: {
          projectDescription: 'test',
          role: 'Frontend Developer',
          techStack: 'test',
          keyResponsibilities: ['test', 'test'],
        },
      },
    ],
  }),
  methods: {},
  components: {
    ProjectDetailsModal,
  },
};
</script>

<style scoped></style>
