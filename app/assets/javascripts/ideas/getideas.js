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
     + "<button class='btn btn-default btn-xs delete-idea' id='" + idea.id + "'>Delete</button><button class='btn btn-default btn-xs edit-idea' id='"
     + idea.id
     + "'>Edit</button></div><div style='display: none;' class='edit-form-"
     + idea.id
     + "'><div class='form-group'><label for='post-body'>Title</label><input class='form-control' type='text' id='idea-title'><label for='post-body'>Body</label><input class='form-control' type='text' id='idea-body'></div><input class='btn btn-default pull-left' id='create-idea' type='button' name='submit' value='Save'></div></div>"
  );
  deleteIdea()
  editIdea()
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