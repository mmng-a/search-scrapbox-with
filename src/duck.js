function getQuery() {
  const params = new URLSearchParams(location.search)
  return params.get('q')
}

function insertionArea() {
  return document.getElementsByClassName('results--sidebar js-results-sidebar')[0];
}