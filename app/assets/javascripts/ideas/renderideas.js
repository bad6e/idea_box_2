function getIdeas(){
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/api/v1/ideas',
    dataType: 'json',
    success: function(response){
      $.each(response, function(i, idea) {
        renderIdea(idea)
      })
    }
  })
}

function renderIdea(idea) {
  $('#latest-posts').prepend(
     "<h3>" + idea.title + "</h3>"
     + "<p>" + idea.body + "</p>"
  )
}