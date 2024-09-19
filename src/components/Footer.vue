<template>
  <footer id="footer" class="footer position-relative light-background">
    <div class="container">
      <h3 class="sitename">Mogamat Azhar Jacobs</h3>
      <p>This space is a reflection of my creative journey, where passion meets purpose. Each project here represents my dedication to craftsmanship and innovation.<br> I invite you to explore my work, immerse yourself in the stories behind each creation, and envision new possibilities together. Let's connect, collaborate, and create something extraordinary</p>
      <div class="social-links d-flex justify-content-center">
        <a href=""><i class="bi bi-instagram"></i></a>
        <a href=""><i class="bi bi-linkedin"></i></a>
        <a href="https://github.com/AzharJacobs"><i class="bi bi-github"></i></a>
      </div>
      <div class="container">
        <div class="copyright">
          <p class="lead">Azhar Jacobs &copy; <span class="shadow">{{ cYear }}</span></p>
        </div>
      </div>
    </div>
  </footer>

</template>
<script>
export default {
    name: "FooterComp",
    data() {
        return {
            cYear: new Date().getUTCFullYear()
        }
    }
}
</script>
<style scoped>
    
</style>