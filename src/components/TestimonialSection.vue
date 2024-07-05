<template>
  <!-- Testimonials Section -->
  <section id="testimonials" class="testimonials section">
    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>Testimonials</h2>
      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
    </div>
    <!-- End Section Title -->
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row gy-4 justify-content-center">
        <div v-for="(testimonials, index) in testimonials" :key="index" class="col-lg-3 col-md-6">
          <div class="testimonial-item">
            <img :src="testimonials.image" class="img-fluid testimonial-img" alt="">
            <div class="testimonial-content">
              <p>
                <i class="bi bi-quote quote-icon-left"></i>
                <span>{{ testimonials.message }}</span>
                <i class="bi bi-quote quote-icon-right"></i>
              </p>
              <h3>{{ testimonials.name }}</h3>
              <h4>{{ testimonials.title }}</h4>
              <div class="stars">
                <i v-for="star in testimonials.stars" :key="star" class="bi bi-star-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Testimonials Section -->
</template>

<script>
export default {
  name: "TestimonialSection",
  computed: {
    testimonials() {
      return this.$store.state.testimonials
    }
  }
}
</script>

<style>
.testimonial-item {
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 250px; /* added width */
  height: 350px; /* added height */
  display: flex; /* added display flex */
  flex-direction: column; /* added flex direction column */
}

.testimonial-content {
  padding: 20px;
  flex-grow: 1;
  font-size: 14px;
  text-align: center;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
}

.testimonial-img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}
</style>