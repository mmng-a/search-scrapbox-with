<template>
  <div id="project" style="background-color: gray, padding: 5px">
    <h2>{{ name }}</h2>
    <ul v-if="pages != null">
      <div class="pages" v-for="page in pages" :key="page.url">
        <a :href="url">
          <img :src="image" alt="">
          <h3>{{ page.title }}</h3>
          <p>{{ page.description }}</p>
        </a>
      </div>
    </ul>
    <div v-else>
      <p>loading...</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default {
  name: "Project",
  data() {
    return {
      name: "project title",
      pages: [
        { title: "page title", description: "description", image: "http://www.scdn.co/i/_global/open-graph-default.png", url: "https://www.apple.com/" },
        { title: "title2", description: "description", image: "http://www.scdn.co/i/_global/open-graph-default.png", url: "https://www.apple.com/" },
        { title: "タイトル", description: "description", image: "http://www.scdn.co/i/_global/open-graph-default.png", url: "https://www.apple.com/" },
        { title: "タイトー", description: "description", image: "http://www.scdn.co/i/_global/open-graph-default.png", url: "https://www.apple.com/" }
      ]
    }
  }
}
</script>

<style scoped>

.pages {
  display: flex;
  flex-flow: row wrap;
}

</style>