<template>

    <!-- Hero Section -->
    <section id="hero" class="hero section light-background">

      <img src="https://azharjacobs.github.io/AzharImages/Portfolio/port.jpg" alt="">

      <div class="container" data-aos="zoom-out">
        <div class="row justify-content-center">
          <div class="col-lg-9">
      <h1 class="text">Azhar Jacobs</h1>
      <h3 v-if="title" class="title">
        <span>{{ title }}</span>
      </h3>
      <Spinner v-else />
            <div class="social-links">
              <a href="#"><i class="bi bi-instagram"></i></a>
              <a href="#"><i class="bi bi-linkedin"></i></a>
              <a href="https://github.com/AzharJacobs"><i class="bi bi-github"></i></a>
            </div>
          </div>
        </div>
      </div>

    </section><!-- /Hero Section -->
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

