<template>

    <!-- Services Section -->
    <section id="services" class="services section">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
<p>
  Proficient in full-stack web development, with expertise in HTML, CSS, JavaScript, and frameworks like Vue.js and Node.js. Skilled in database management using MySQL and adept at creating responsive, user-friendly interfaces. Strong problem-solving abilities and a collaborative mindset in project development.
</p>

      </div><!-- End Section Title -->

      <div class="container">

        <div class="row gy-4">

          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100" v-for="skill in skills" :key="skill.icon">
  <div class="service-item item-cyan position-relative">
    <div class="icon">
      <img :src="skill.icon" alt="skill icon" loading="lazy">
    </div>
    <a href="#" class="stretched-link">
      <h3>{{ skill.name }}</h3>
    </a>
  </div>
</div><!-- End Service Item -->
        </div>
      </div>

    </section><!-- /Services Section -->

</template>

<script>
export default {
    name: "SkillsSection",
    computed: {
        skills() {
            return this.$store.state.skills
        },
        designSkills() {
            return this.$store.state.designSkills
        },
        softSkills() {
            return this.$store.state.softSkills
        }
    },
    mounted() {
        this.$store.dispatch('getSkills'),
        this.$store.dispatch('getDesignSkills')
        this.$store.dispatch('getSoftSkills')
    }
}
</script>
<style scoped>

    .row {
        width: 70%;
        margin: 0 auto;
    }
    
    img {
      width: 40px;
      border-radius: 50%;
      border: 2px solid #fff;
    }

     i {
  margin-right: 10px;
  font-size: 40px;
}

    p, h4 {
        text-align: left;
    }

    h4 {
    color: #fff;
    font-family: "JetBrains Mono", monospace;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
    font-size: 1.5rem;
    /* text-shadow: 2px 2px 5px #DAA520, 5px 5px 70px rgba(255, 255, 255, 0.3); */
    }
</style>