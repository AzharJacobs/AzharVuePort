<template>

    <!-- Hero Section -->
    <section id="hero" class="hero section light-background">

      <img src="assets/img/hero-bg.jpg" alt="">

      <div class="container" data-aos="zoom-out">
        <div class="row justify-content-center">
          <div class="col-lg-9">
      <h1 class="text">Azhar Jacobs</h1>
      <h3 v-if="title" class="title">
        <span>{{ title }}</span>
      </h3>
      <Spinner v-else />
      <!-- <div class="home-image">
        <img src="https://github.com/caleb-okkers/coolCards/blob/master/images/IMG_2711onetooneratio.jpg?raw=true" alt="Caleb Okkers" loading="lazy">
      </div> -->
            <div class="social-links">
              <a href="#"><i class="bi bi-twitter-x"></i></a>
              <a href="#"><i class="bi bi-facebook"></i></a>
              <a href="#"><i class="bi bi-instagram"></i></a>
              <a href="#"><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>

    </section><!-- /Hero Section -->

    <!-- <video autoplay loop muted playsinline class="video-background" id="bgVideo">
      <source src="https://videos.pexels.com/video-files/3129977/3129977-uhd_2560_1440_30fps.mp4" type="video/mp4">
      Your browser does not support the video tag.
       remember to host video 
    </video>
    <div class="content">
      <h1 class="text">Azhar Jacobs</h1>
      <h3 v-if="title" class="title">
        <span>{{ title }}</span>
      </h3>
      <Spinner v-else />
      <div class="home-image">
        <img src="https://github.com/caleb-okkers/coolCards/blob/master/images/IMG_2711onetooneratio.jpg?raw=true" alt="Caleb Okkers" loading="lazy">
      </div>
    </div> -->
</template>

<script>
import Spinner from '@/components/Spinner.vue'
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'HomeSection',
  components: {
    Spinner
  },
  setup() {
    const store = useStore()
    const jobTitle = computed(() => store.state.jobTitle)
    const title = ref('')
    const cnt = ref(0)

    function repeat() {
      try {
        if (cnt.value == jobTitle.value?.length) cnt.value = 0
        title.value = jobTitle.value?.at(cnt.value)?.title
        setTimeout(repeat, 2000)
        cnt.value++
      } catch (e) {
        // Handle error
      }
    }

    onMounted(() => {
      store.dispatch('getJobTitle')
      repeat()
    })

    return {
      title
    }
  }
}

// const video = document.getElementById('bgVideo');
//         video.addEventListener('ended', () => {
//             video.currentTime = 0;
//             video.play();
//         });
</script>

<style scoped>
/* Scoped styles */
</style>

