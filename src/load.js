export async function load_projects(query) {
  try {
    const url = `https://scrapbox.io/api/projects/search/query?q=${query}`
    const response = await fetch(url)
    const json = await response.json()
    console.log(json['projects'])
    return json['projects'].map(p => {
      return {
        name: p.name,
        displayName: p.displayName
      }
    })
  } catch(error) {
    console.log(error)
  }
}

export async function load_pages(query, project) {
  try {
    const url = `https://scrapbox.io/api/pages/${project}/search/query?q=${query}&limit=10`
    const response = await fetch(url)
    const json = await response.json()
    return json['pages'].map(page => {
      return {
        title: page.title,
        description: page.lines[0],
        image: page.image,
        url: `https://scrapbox.io/${project}/${encodeURI(page.title)}`
      }
    })
  } catch(error) {
    console.log(error)
  }
}

