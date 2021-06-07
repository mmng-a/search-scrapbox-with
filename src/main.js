import Vue from 'vue'
import App from './App.vue'
import { load_projects, load_pages } from './load'
import { getQuery, insertionArea } from './duck'

function log_border(color) {
  document.body.style.border = `5px solid ${color}`
}

log_border('black')
const query = getQuery()
log_border('red')
var sidebar = insertionArea()
var data = {
  projects: null
}
new Vue({
  el: '#app',
  data: data
}).$mount(sidebar)

load_projects(query)
  .then((projects) => {
    data.projects = projects.map(p => {
      return {
        name: p.displayName,
        pages: null
      }
    })
  })
  .then(projects => {
    for ([index, project] of projects.entries()) {
      load_pages(query, project.name)
        .then(res => {
          data[index].pages = res
          console.log(res)
          log_border('green')
        })
    }    
  })
