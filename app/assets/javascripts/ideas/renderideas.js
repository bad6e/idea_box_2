function renderIdea(idea) {
  $('#latest-posts').append(
     "<h3>" + idea.title + "</h3>"
     + "<p>" + idea.body + "</p>"
  )
}