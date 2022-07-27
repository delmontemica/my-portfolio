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
        projectSnippet:
          'In-house identity verification utilizing eKYC libraries',
        projectDetails: {
          projectDescription:
            'A service that provides online identity verification for financial, real estate, and other type of transactions. This system utilizes the eKYC libraries provided by CyberTrust.',
          role: 'Frontend Developer, UI Designer',
          techStack: 'ReactJS, Laravel',
          keyResponsibilities: [
            'Designed user interface for the landing page of product',
            'Collaborated with a team of 5 in development of frontend',
            'Facilitated scrum events and maintained scrum artifacts as scrum master',
          ],
        },
      },
      {
        projectId: 'greatSign',
        projectThumbnail: require('@/assets/images/GreatSign-Preview.png'),
        projectName: 'Great Sign',
        projectSnippet: 'In-house e-contract system',
        projectDetails: {
          projectDescription:
            'An e-signature platform that allows users to create documents and transactions online.',
          role: 'Full Stack Developer',
          techStack: 'PHP, jQuery, JavaScript, AWS (S3, EC2)',
          keyResponsibilities: [
            'Maintained legacy code',
            'Integrated new features',
          ],
        },
      },
      {
        projectId: 'greatSignRedesign',
        projectThumbnail: require('@/assets/images/GreatSign-Redesign-Preview.png'),
        projectName: 'Great Sign Redesigned',
        projectSnippet: 'This is a short project description.',
        projectDetails: {
          projectDescription:
            'Redesigned UI of the current existing web system, Great Sign. This project is aimed to improve the quality of the user experience of the clients using the product, as well as to modernize the look and feel of the pages.',
          role: 'UI/UX Designer',
          techStack: 'Figma, Adobe Photoshop CC, Adobe Illustrator CC',
          keyResponsibilities: [
            'Redesigned of existing in-house product',
            'Collaborated with engineers and product managers for feedbacks and improvements',
          ],
        },
      },
      {
        projectId: 'chukidan',
        projectThumbnail: require('@/assets/images/DaidoChukidan-Preview.png'),
        projectName: 'Chukidan',
        projectSnippet: 'Client-based grants and working regulations provider',
        projectDetails: {
          projectDescription:
            'A system that provides information about public funds such as grants, subsidies, and loans for corporate managements.',
          role: 'Frontend Developer, UI Designer',
          techStack:
            'ReactJS, TypeScript, Laravel, AWS (S3, EC2, Lambda, Cloudfront, RDS)',
          keyResponsibilities: [
            'Created/designed mockup of system based on client requirements',
            'Collaborated with team and product owner for UI feedback and improvements',
            'Developed frontend based on established UI design',
          ],
        },
      },
      {
        projectId: 'nisshiren',
        projectThumbnail: require('@/assets/images/Nisshiren-Preview.png'),
        projectName: 'Identity Authentication',
        projectSnippet:
          'Identity verification utilizing Japanese MyNumber cards.',
        projectDetails: {
          projectDescription:
            'A client-based system that allows users to read and store data from MyNumber card and use them for identity verification.',
          role: 'Full Stack Developer',
          techStack:
            'Laravel, ReactJS, TypeScript, React Native, Swift, AWS (S3, EC2, RDS)',
          keyResponsibilities: ['test', 'test'],
        },
      },
      {
        projectId: 'babelMethod',
        projectThumbnail: require('@/assets/images/BabelMethod-Preview.png'),
        projectName: 'Babel Method',
        projectSnippet: 'E-learning system for Japanese language',
        projectDetails: {
          projectDescription:
            'A Japanese Language E-Learning System is a service designed and developed to cater to a company’s foreign employees.',
          role: 'Frontend Developer',
          techStack: 'VueJS, JavaScript, NodeJS, AWS (S3)',
          keyResponsibilities: [
            "Developed UI on client's provided mockup",
            'Integrated REST APIs to frontend',
            'Collaborated with a team of 7 people for pair programmings and code reviews',
          ],
        },
      },
      {
        projectId: 'okutara',
        projectThumbnail: require('@/assets/images/Okutara-Preview.png'),
        projectName: 'Okutara',
        projectSnippet: 'A blogging website tailored to foreigners in Japan.',
        projectDetails: {
          projectDescription:
            'An inbound tourism website that allows foreigners who traveled to Okutama to post their Okutama experiences through blogs and/or video blogs. ',
          role: 'Full Stack Developer',
          techStack: 'Laravel, JavaScript, jQuery, Bootstrap, AWS (EC2)',
          keyResponsibilities: ['Created and implemented frontend design'],
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
