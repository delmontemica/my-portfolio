<template>
  <div class="home">
    <div class="container">
      <div class="h1">Works</div>
      <div class="row">
        <div
          class="col-lg-4 mb-3"
          v-for="(project, index) in projectsList"
          :key="index"
        >
          <div
            class="hover hover-1 text-white"
            data-bs-toggle="modal"
            :data-bs-target="'#' + project.projectId"
          >
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

          <project-details-modal
            :modalId="project.projectId"
            :projectName="project.projectName"
            :projectDetails="project.projectDetails"
            :projectImages="project.projectImages"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectDetailsModal from '@/components/ProjectDetailsModal';

export default {
  name: 'ProjectsComponent',
  components: { ProjectDetailsModal },
  data: () => ({
    projectsList: [
      {
        projectId: 'greatEkyc',
        projectThumbnail: require('@/assets/images/greatekyc/preview.png'),
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
        projectImages: [
          require('@/assets/images/GreateKYC-Preview.png'),
          require('@/assets/images/greatekyc/preview.png'),
          require('@/assets/images/greatekyc/full-design.png'),
          require('@/assets/images/greatekyc/mobile-design.png'),
        ],
      },
      {
        projectId: 'greatSign',
        projectThumbnail: require('@/assets/images/greatsign/preview.png'),
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
        projectImages: [
          require('@/assets/images/GreatSign-Preview.png'),
          require('@/assets/images/greatsign/preview.png'),
        ],
      },
      {
        projectId: 'greatSignRedesign',
        projectThumbnail: require('@/assets/images/greatsign/redesigned-preview.png'),
        projectName: 'Great Sign Redesigned',
        projectSnippet: 'Revamped UI for Great Sign',
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
        projectImages: [
          require('@/assets/images/GreatSign-Redesign-Preview.png'),
          require('@/assets/images/greatsign/redesigned-preview.png'),
          require('@/assets/images/greatsign/redesigned-web.png'),
          require('@/assets/images/greatsign/redesigned-mobile.png'),
        ],
      },
      {
        projectId: 'chukidan',
        projectThumbnail: require('@/assets/images/chukidan/preview.png'),
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
        projectImages: [
          require('@/assets/images/DaidoChukidan-Preview.png'),
          require('@/assets/images/chukidan/preview.png'),
          require('@/assets/images/chukidan/chukidan1-full.png'),
          require('@/assets/images/chukidan/chukidan2-full.png'),
          require('@/assets/images/chukidan/chukidan3-full.png'),
        ],
      },
      {
        projectId: 'nisshiren',
        projectThumbnail: require('@/assets/images/nisshiren/preview-app.png'),
        projectName: 'Identity Authentication',
        projectSnippet:
          'Identity verification utilizing Japanese MyNumber cards.',
        projectDetails: {
          projectDescription:
            'A client-based system that allows users to read and store data from MyNumber card and use them for identity verification.',
          role: 'Full Stack Developer',
          techStack:
            'Laravel, ReactJS, TypeScript, React Native, Swift, AWS (S3, EC2, RDS)',
          keyResponsibilities: [
            'Developed frontend for service user dashboard',
            'Collaborated with a team of 3 people in the development of android and iOS apps through pair programming',
            'Assisted in testing, bug fixing and overall maintenance of system',
            'Built and maintained admin management dashboard',
          ],
        },
        projectImages: [
          require('@/assets/images/Nisshiren-Preview.png'),
          require('@/assets/images/nisshiren/preview-app.png'),
        ],
      },
    ],
  }),
};
</script>

<style scoped></style>
