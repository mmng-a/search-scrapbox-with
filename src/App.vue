<template>
  <div id="app">
    <div v-if="projects != null">
      <ul v-for="project in projects" :key="project.name">
        <Project :name="project.name" :pages="project.pages"/>
      </ul>
    </div>
    <div v-else>
      loading...
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import Project from './Project'

export default {
  name: "App",
  components: [
    Project
  ],
  data() {
    return {
      projects: [
        { name: "project", pages: null }
      ]
    }
  }
}
</script>

<style scoped>

</style>