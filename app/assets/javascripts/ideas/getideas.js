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
     +' all-ideas"><h3>'
     + idea.title
     + '</h3><h4>( '
     + idea.quality
     + ' )</h4><p>' + idea.body + '</p>'
     + "<button class='btn btn-default btn-xs delete-idea' id='" + idea.id + "'>Delete</button><button class='btn btn-default btn-xs edit-idea' id='"
     + idea.id
     + "'>Edit</button></div><div style='display: none;' class='edit-form-"
     + idea.id
     + "'><div class='form-group'><label for='post-body'>Title</label><input class='form-control' type='text' id='idea-title-edit-"
     + idea.id
     + "'><label for='post-body'>Body</label><input class='form-control' type='text' id='idea-body-edit-"
     + idea.id
     +"'></div><input class='btn btn-default pull-left' id='edit-idea-form-"
     + idea.id
     + "'type='button' name='submit' value='Save'></div></div><br>"
  );
  deleteIdea()
  editIdea()
};
