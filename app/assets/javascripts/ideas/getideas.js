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
     '<div class="idea-id-' + idea.id
     +'"><h3>'
     + idea.title + ' ( ' + idea.quality + ' )</h3>'
     + '<p>' + idea.body + '</p>'
     + "<button class='btn btn-default btn-xs delete-idea' id='" + idea.id + "'>Delete</button><button class='btn btn-default btn-xs edit-idea' id='" + idea.id + "'>Edit</button></div>"
  );
  deleteIdea()
};


// function renderIdea(idea) {
//   $('#latest-posts').prepend(
//      '<div class="idea-id-' + idea.id
//      +'"><h3>'
//      + idea.title + ' ( ' + idea.quality + ' )</h3>'
//      + '<p>' + idea.body + '</p>'
//      + "</p><button class='btn btn-default btn-xs delete-idea' id='" + idea.id + "'>Delete</button></div>"
//   );
//   deleteIdea()
// };