<!-- <template>
  <div class="wrapper">
    <main class="container-fluid">
      
      

      
    </main>
  </div>
  
</template> -->

<template>
  <div class="wrapper">
    <NavBar/>
    <main>
      <section id="home">
        <HomeSection/>
      </section>
      <section id="about">
        <div class="container pt-5">
          <AboutSection :about="about" :hobbies="hobbies"/>
        </div>
      </section>
      <section id="resume">
        <resume-section :education="education"/>
      </section>
      <section id="Skills">
        <SkillsSection :skills="skills"/>
      </section>
      <section id="projects">
        <project-section :projects="projects"/>
      </section>
      <section id="testimonials"></section>
      <section id="contact"></section>
    </main>
    <Footer/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import HomeSection from '@/components/HomeSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ResumeSection from '@/components/ResumeSection.vue'
import ProjectSection from '@/components/ProjectSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'


export default {
  computed: { 
    about() {
      return this.$store.state.aboutMe
    },
    hobbies() {
      return this.$store.state.hobbies
    },
    education () {
      return this.$store.state.education
    },
    projects () {
      return this.$store.state.projects
    },
    skills () {
      return this.$store.state.skills
    }

  },
  components: {
    NavBar,
    Footer,
    HomeSection,
    AboutSection,
    ResumeSection,
    ProjectSection,
    SkillsSection
  },
  mounted() {
    this.$store.dispatch('getAboutMe'),
    this.$store.dispatch('getHobbies'),
    this.$store.dispatch('getEducation'),
    this.$store.dispatch('getprojects'),
    this.$store.dispatch('getSkills')
  }
}
</script>

<style src="./assets/css/styles.css">
</style>
