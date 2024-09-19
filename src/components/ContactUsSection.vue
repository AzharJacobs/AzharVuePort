<template>
  <!-- Contact Section -->
  <section id="contact" class="contact section">

    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>Contact</h2>
      <p>Welcome to our contact page, where connections are made through collaboration and excellence. Whether you're reaching out with a question, an idea, or a partnership opportunity, we're here to engage with you. Let's explore how we can work together to achieve remarkable outcomes.</p>
    </div><!-- End Section Title -->

    <div class="container" data-aos="fade" data-aos-delay="100">

      <div class="row gy-4">

        <div class="col-lg-4">
          <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
            <i class="bi bi-geo-alt flex-shrink-0"></i>
            <div>
              <h3>Address</h3>
              <p>Parrow Cape Town, South</p>
            </div>
          </div><!-- End Info Item -->

          <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
            <i class="bi bi-telephone flex-shrink-0"></i>
            <div>
              <h3>Call Us</h3>
              <p>+27 66 317 5741</p>
            </div>
          </div><!-- End Info Item -->

          <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
            <i class="bi bi-envelope flex-shrink-0"></i>
            <div>
              <h3>Email Us</h3>
              <p>azharj2003@gmail.com</p>
            </div>
          </div><!-- End Info Item -->

        </div>

        <div class="col-lg-8">
          <form action="https://formcarry.com/s/qsLBaeTJIqM" method="POST" enctype="multipart/form-data" class="php-email-form" data-aos="fade-up" data-aos-delay="200">
            <div class="row gy-4">

              <div class="col-md-6">
                <input type="text" name="name" id="fc-generated-1-name" class="form-control" placeholder="Your Name" required="">
              </div>

              <div class="col-md-6 ">
                <input type="email" class="form-control" name="email" id="fc-generated-1-email" placeholder="Your Email" required="">
              </div>

              <div class="col-md-12">
                <input type="text" class="form-control" name="subject" placeholder="Subject" required="">
              </div>

              <div class="col-md-12">
                <textarea class="form-control" name="message" id="fc-generated-1-message" rows="6" placeholder="Message" required=""></textarea>
              </div>

              <div class="col-md-12 text-center">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>

                <button type="submit">Send Message</button>
              </div>

            </div>
          </form>
        </div><!-- End Contact Form -->

      </div>

    </div>

  </section><!-- /Contact Section -->
</template>

<script>
export default {
  name: 'ContactUsSection',
  props: {
    education: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
/* Styles from the second code block */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');

.formcarry-container {
  box-sizing: border-box;
  margin: 40px auto 0 auto;
  padding: 0;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.01em;
  width: 100%;
}

/* Adjust form elements and hover states */
.formcarry-container input,
.formcarry-container textarea,
.formcarry-container select {
  margin-top: 4px;
  width: 100%;
  height: 42px;
  border: 1px solid var(--fc-border-color);
  color: var(--fc-normal-text-color);
  border-radius: 6px;
  padding: 8px 12px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  transition: 125ms background, 125ms color, 125ms box-shadow;
}

.formcarry-container textarea {
  min-height: 188px;
  padding-top: 12px;
}

.formcarry-container button {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  height: 42px;
  line-height: 40px;
  width: 100%;
  border-radius: 6px;
  background-color: hsla(var(--fc-primary-hsl));
  color: #fff;
  cursor: pointer;
}

.formcarry-container button:hover {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), hsla(var(--fc-primary-hsl));
}

.formcarry-container button:focus {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), hsla(var(--fc-primary-hsl));
  box-shadow: 0px 0px 0px 3px rgba(var(--fc-primary-hsl), 12%);
}

</style>
