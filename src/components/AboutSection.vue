<template>
  <!-- About Section -->
  <section id="about" class="about section">
    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>About</h2>
    </div>
    <!-- End Section Title -->

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row gy-4 justify-content-center">
        <div class="col-lg-4">
          <img src="https://azharjacobs.github.io/AzharImages/Portfolio/profile.jpg" class="img-fluid" alt="">
        </div>
        <div class="col-lg-8 content">
          <h2>UI/UX Designer & Web Developer.</h2>
          <div class="row pt-5">
            <div class="col" v-for="info in about" :key="info.name">
              <div class="info">
                <h2 class="text">{{ info.name }}</h2>
                <p class="par">{{ info.text }}</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <ul>
                <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>30 March 2003</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>https://github.com/AzharJacobs</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+27 66 317 5741</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Cape Town, South Africa</span></li>
              </ul>
            </div>
            <div class="col-lg-6">
              <ul>
                <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>21</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Diploma</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>azharj2003@gmail.com</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /About Section -->

  <div class="container">
    <div class="hobbies pt-5">
      <Card
        v-for="(hobby, index) in hobbies"
        :key="index"
        styleType="about-style"
      >
        <!-- :gradientIndex="getGradientIndex(index)" -->
        <template #img>
          <img :src="hobby.image" alt="hobby" loading="lazy">
        </template>
        <template #content>
          <div class="container section-title" data-aos="fade-up">
            <h2>{{ hobby.name }}</h2>
            <p>{{ hobby.text }}</p>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: "AboutSection",
  components: {
    Card
  },
  computed: {
    about() {
      return this.$store.state.aboutMe
    },
    hobbies() {
      return this.$store.state.hobbies
    }
  },
  mounted() {
    this.$store.dispatch('getAboutMe')
    this.$store.dispatch('getHobbies')
  }
}
</script>
  
  <style>
 /* cards */

@import url('https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900');

.hobbies {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.imgBx {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    overflow: hidden;
}

.box .imgBx img {
    max-width: 100%;
    opacity: 0.5;
    transition: 0.5s;
    overflow: hidden;
}

.box:hover .imgBx img {
    opacity: 1;
}

.box {
  overflow: hidden;
}

.box .container.section-title {
  transition: margin-top 0.5s ease-in-out;
}

.box:hover .container.section-title {
  margin-top: -100px; /* adjust the margin as needed */
}
</style>