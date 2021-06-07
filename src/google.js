function getQuery() {
  const params = new URLSearchParams(location.search)
  return params.get('q')
}

