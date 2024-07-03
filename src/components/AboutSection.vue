<template>

    <!-- About Section -->
    <section id="about" class="about section">
    <div class="container">
      <div class="row" v-for="info in about" :key="info.name">
        <div class="col">
          <div class="info">
            <h2 class="text">{{ info.name }}</h2>
            <p>{{ info.text }}</p>
          </div>
        </div>
      </div>
      <div class="hobbies">
        <Card v-for="hobby in hobbies" :key="hobby.name">
        <template #img>
           <img :src= hobby.image alt="">
        </template>
        <template #content>
          <h5>{{ hobby.name }}</h5>
          <p>{{ hobby.text }}</p>
        </template>
      </Card>
  
      </div>
    </div>

    </section><!-- /About Section -->
    
    <!-- <div class="container">
      <div class="row" v-for="info in about" :key="info.name">
        <div class="col">
          <div class="info">
            <h2 class="text">{{ info.name }}</h2>
            <p>{{ info.text }}</p>
          </div>
        </div>
      </div>
      <div class="hobbies">
        <Card v-for="hobby in hobbies" :key="hobby.name">
        <template #img>
           <img :src= hobby.image alt="">
        </template>
        <template #content>
          <h5>{{ hobby.name }}</h5>
          <p>{{ hobby.text }}</p>
        </template>
      </Card>
  
      </div>
    </div> -->
  </template>
  
  <script>
  import Card from '@/components/Card.vue'
  
  export default {
    name: "AboutSection",
    components: {
      Card
    },
    props: {
      about: {
        type: Array,
        required: true
      },
      hobbies: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  
  <style>
  </style>