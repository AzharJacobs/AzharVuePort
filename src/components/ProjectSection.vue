<template>
  <!-- Portfolio Section -->
  <section id="portfolio" class="portfolio section">
    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>Portfolio</h2>
      <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
    </div><!-- End Section Title -->
    <div class="container">
      <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
        <ul class="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
          <li data-filter="*" class="filter-active">All</li>
          <li data-filter=".filter-app">App</li>
          <li data-filter=".filter-product">Card</li>
          <li data-filter=".filter-branding">Web</li>
        </ul><!-- End Portfolio Filters -->
        <div class="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
          <div v-for="item in portfolio" :key="item.id" :class="`col-lg-4 col-md-6 portfolio-item isotope-item filter-${item.type}`">
            <img :src="item.image" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>{{ item.github }}</h4>
              <p>{{ item.vercel }}</p>
              <a :href="item.image" title="App 1" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
              <a :href="item.details" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
            </div>
          </div><!-- End Portfolio Item -->
        </div><!-- End Portfolio Container -->
      </div>
    </div>
  </section><!-- /Portfolio Section -->
</template>

<script>
export default {
  name: "ProjectSection",
  props: {
    education: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

</style>

