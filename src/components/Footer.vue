<template>
  <footer id="footer" class="footer position-relative light-background">
    <div class="container">
      <h3 class="sitename">Mogamat Azhar Jacobs</h3>
      <p>This space is a reflection of my creative journey, where passion meets purpose. Each project here represents my dedication to craftsmanship and innovation.<br> I invite you to explore my work, immerse yourself in the stories behind each creation, and envision new possibilities together. Let's connect, collaborate, and create something extraordinary</p>
      <div class="social-links d-flex justify-content-center">
        <a href=""><i class="bi bi-twitter-x"></i></a>
        <a href=""><i class="bi bi-facebook"></i></a>
        <a href=""><i class="bi bi-instagram"></i></a>
        <a href=""><i class="bi bi-skype"></i></a>
        <a href=""><i class="bi bi-linkedin"></i></a>
      </div>
      <div class="container">
        <div class="copyright">
          <p class="lead">Azhar Jacobs &copy; <span class="shadow">{{ cYear }}</span></p>
        </div>
        <div class="credits">
          <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you've purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] -->
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </div>
  </footer>

    <footer class="container-fluid">
        <div class="row">
            <p class="lead">Azhar Jacobs &copy; <span class="shadow">{{ cYear }}</span></p>
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