function getIdeas(){
  $.getJSON('http://localhost:3000/api/v1/ideas', function(response){
    parseIdeas(response)
  });
};

function parseIdeas(response) {
  $.each(response, function(i, idea) {
    renderIdea(idea)
  });
};

function renderIdea(idea) {
  $('#latest-posts').prepend(
     "<h3>" + idea.title + "</h3>"
     + "<p>" + idea.body + "</p>"
  );
};