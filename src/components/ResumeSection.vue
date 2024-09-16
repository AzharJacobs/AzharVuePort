<template>
    <!-- Resume Section -->
    <section id="resume" class="resume section">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div><!-- End Section Title -->

      <div class="container">

        <div class="row">

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 class="resume-title">Sumary</h3>

            <div class="resume-item pb-0">
              <h4>Mogamat Azhar Jacobs</h4>
              <p><em>I am a balanced, lighthearted individual with a strong sense of responsibility, guided by respect, integrity, and mindfulness. Passionate about personal growth, I enjoy staying active, web development, sketching, and spending time with loved ones.Ambitious and dedicated to holistic success, I pursue constant self-improvement with a goal to build generational wealth and make a positive impact on society.</em></p>
              <ul>
                <li>Parow, Cape Town</li>
                <li>066 317 5741</li>
                <li>azharj2003@gmail.com</li>
              </ul>
            </div><!-- Edn Resume Item -->

            <h3 class="resume-title">Education</h3>
            <div class="resume-item" v-for="(item, index) in education" :key="index">
              <h2>{{ item.institution }}</h2>
              <small>{{ item.year }}</small>
              <p>{{ item.qualification }}</p>
            </div><!-- Edn Resume Item -->

            <!-- <div class="resume-item">
              <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
              <h5>2010 - 2014</h5>
              <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
              <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
            </div>Edn Resume Item -->

          </div>

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 class="resume-title">Professional Experience</h3>
            <div class="resume-item">
              <h4>Oppo Inc</h4>
              <h5>january 2022 - Febuary 2023</h5>
              <p><em>Canal Walk</em></p>
              <ul>
                <li>Demonstrating the features and benefits of Oppo devices, ensuring customers had a clear understanding of the product offerings.</li>
                <li>Achieving sales targets by providing excellent customer service, addressing queries, and offering tailored solutions.</li>
                <li>Assisting in maintaining product displays and ensuring a professional, welcoming store environment.</li>
                <li>Providing after-sales support, helping customers with product setup and troubleshooting when needed.</li>
              </ul>
            </div><!-- Edn Resume Item -->

            <div class="resume-item">
              <h4>Aspiring Software developer</h4>
              <h5>April 2024 -</h5>
              <p><em>Imam Haron road, Landsdown</em></p>
              <ul>
                <li>Collaborating with peers on group coding projects, simulating real-world development workflows.</li>
                <li>Participating in both front-end and back-end development tasks using technologies like HTML, CSS, JavaScript, Node.js, and databases.</li>
                <li>Problem-solving through coding challenges, debugging, and optimizing code for efficiency.</li>
                <li>Learning and applying new programming languages, frameworks, and best practices under the guidance of mentors and instructors.</li>
              </ul>
            </div><!-- Edn Resume Item -->

          </div>

        </div>

      </div>

    </section><!-- /Resume Section -->

  <!-- <div class="container">
    <div class="row pt-5">
      <h2 class="text">Education</h2>
    </div>
    <div class="row pt-5">
      <div class="col d-flex justify-content-center">
        <div class="timeline">
          <div v-for="(item, index) in education" :key="index" :class="['timeline-container', index % 2 === 0 ? 'left-container' : 'right-container']">
            <img src="https://i.pinimg.com/originals/cd/65/15/cd6515604230d57b71983853c4156752.png" alt="">
            <div class="text-box">
              <h2>{{ item.institution }}</h2>
              <small>{{ item.year }}</small>
              <p>{{ item.qualification }}</p>
              <span :class="[index % 2 === 0 ? 'left-container-arrow' : 'right-container-arrow']"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  name: 'ResumeSection',
  props: {
    education: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

.timeline {
  position: relative;
  max-width: 1200px;
  margin: 100px auto;
  /* animation: movedown 1s linear forwards; */
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(235deg, #130564, #010615, #130564);
  left: 50%;
  margin-left: -1px;
}

.timeline-container {
  padding: 10px 40px;
  position: relative;
  width: 50%;
  box-sizing: border-box;
  opacity: 0;
  animation: movedown 1s linear forwards;
  
}

@keyframes movedown {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

.timeline-container.left-container {
  left: -50%;
}

.timeline-container.right-container {
  left: 50%;
}

.timeline-container img {
    position: absolute;
    width: 40px;
    border-radius: 50%;
    right: -20px;
    top: 32px;
    z-index: 10;
  }

  .right-container img {
    left: -20px;
  }

  .left-container img {
    left: 460px;
  }

.text-box {
  padding: 20px 30px;
  background: #000;
  position: relative;
  border-radius: 6px;
  font-size: 15px;
  color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-family: 'Poppins', sans-serif;
  border: 3px solid;
  border-image-slice: 1;
  border-width: 3px;
  border-image-source:  linear-gradient(235deg, #B8860B, #010615, #B8860B);
  width: 400px;
}

.text-box h2 {
  font-weight: 600;
  font-size: 22px;
}

.text-box small {
  display: block;
  margin-bottom: 15px;
}

.left-container-arrow {
  height: 0;
  width: 0;
  position: absolute;
  top: 28px;
  z-index: 1;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 15px solid #B8860B;
  right: -15px;
}

.right-container-arrow {
  height: 0;
  width: 0;
  position: absolute;
  top: 28px;
  z-index: 1;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-right: 15px solid #B8860B;
  left: -15px;
}

@media screen and (max-width: 600px) {
  .timeline::before {
    left: 31px;
  }

  .timeline-container {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

  .text-box {
    font-size: 13px;
  }

  .right-container {
    left: 0%;
  }

  .timeline-container img {
    left: 10px;
  }

  .left-container-arrow,
  .right-container-arrow {
    border-right: 15px solid #000;
    border-left: 0;
    left: -15px;
  }
}
</style>