import { createStore } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2'
const portfolioURL = 'https://azharjacobs.github.io/JSON-vue/data/'

export default createStore({
  state: {
    education: null,
    aboutMe: null,
    work: null,
    projects: null,
    testimonials: null,
    skills: null,
    hobbies: null
  },
  getters: {
  },
  mutations: {
    setJobTitle(state, payload) {
      state.jobTitle = payload
    },
    setAboutMe(state, payload) {
      state.aboutMe = payload
    },
    setHobbies(state, payload) {
      state.hobbies = payload
    },
    setEducation(state,payload) {
      state.education = payload
    },
    setWork(state,payload) {
      state.work = payload
    },
    setProjects(state,payload) {
      state.projects = payload
    },
    setTestimonials(state,payload) {
      state.testimonials = payload
    },
    setSkills(state,payload) {
      state.skills = payload
    },
    setSoftSkills(state, payload) {
      state.SoftSkills = payload;
    }
  },
  actions: {
    async getJobTitle(context){
      try {
        let {jobTitle} = (await axios.get(portfolioURL)).data
        context.commit('setJobTitle', jobTitle)
      }catch(e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async getAboutMe(context){
      try {
        let {aboutMe} =  (await axios.get(portfolioURL)).data
        console.log(aboutMe);
        context.commit('setAboutMe', aboutMe)
      }catch(e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
      // let converted = await fetchedInfo.json()
      // console.log(converted.aboutMe);
      // context.commit('setAboutMe', converted.aboutMe)
    },
    async getHobbies(context){
      try {
        let {hobbies} = (await axios.get(portfolioURL)).data
        context.commit('setHobbies', hobbies)
        console.log(hobbies);
      }catch(e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async getEducation(context){
      try {
        let {education} = (await axios.get(portfolioURL)).data
        context.commit('setEducation', education)
      }catch(e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async getWork(context){
      try {
        let {work} = (await axios.get(portfolioURL)).data
        context.commit('setWork', work)
        console.log(work);
      }catch(e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async getSkills(context){
      try {
        const { data } = await axios.get(portfolioURL);
        const { skills, SoftSkills } = data;
        context.commit('setSkills', skills);
        context.commit('setSoftSkills', SoftSkills);
      } catch (e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async getProjects(context){
      try {
        let {projects} = (await axios.get(portfolioURL)).data
        context.commit('setProjects', projects)
      }catch(e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async getTestimonials(context){
      try {
        let {testimonials} = (await axios.get(portfolioURL)).data
        context.commit('setTestimonials', testimonials)
      }catch(e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    }
    









    // async getEducation(context){
    //   let fetchedInfo = await fetch('https://caleb-okkers.github.io/first_api/data/')
    //   let converted = await fetchedInfo.json()
    //   // console.log(converted.education);
    //   context.commit('setEducation', converted.education)
    // },
    // async getWork(context){
    //   let fetchedInfo = await fetch('https://caleb-okkers.github.io/first_api/data/')
    //   let converted = await fetchedInfo.json()
    //   // console.log(converted.work);
    //   context.commit('setWork', converted.work)
    // },
    // async getSkills(context){
    //   let fetchedInfo = await fetch('https://caleb-okkers.github.io/first_api/data/')
    //   let converted = await fetchedInfo.json()
    //   // console.log(converted.skills);
    //   context.commit('setSkills', converted.skills)
    // },
    // async getProjects(context){
    //   let fetchedInfo = await fetch('https://caleb-okkers.github.io/first_api/data/')
    //   let converted = await fetchedInfo.json()
    //   // console.log(converted.projects);
    //   context.commit('setProjects', converted.projects)
    // },
    // async getTestimonials(context){
    //   let fetchedInfo = await fetch('https://caleb-okkers.github.io/first_api/data/')
    //   let converted = await fetchedInfo.json()
    //   // console.log(converted.testimonials);
    //   context.commit('setTestimonials', converted.testimonials)
    // }
  },
  modules: {
  }
})
