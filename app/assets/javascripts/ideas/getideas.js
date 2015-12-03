function getIdeas(){
  $.getJSON('/api/v1/ideas', function(response){
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
     + '</h3><h4>'
     + idea.quality
     + '</h4><button class="btn btn-default btn-xs idea-quality-up" id="'
     + idea.id
     +'">Thumbs Up</button><button class="btn btn-default btn-xs idea-quality-down" id="'
     + idea.id
     + '">Thumbs Down</button><br><p>' + textCutter(idea.body, 100) + '</p>'
     + "<button class='btn btn-default btn-xs delete-idea' id='" + idea.id + "'>Delete</button><button class='btn btn-default btn-xs edit-idea' id='"
     + idea.id
     + "'>Edit</button></div><div style='display: none;' class='edit-form-"
     + idea.id
     + "'><div class='form-group'><label for='post-body'>Title</label><input class='form-control' type='text' id='idea-title-edit-"
     + idea.id
     + "'><label for='post-body'>Body</label><input class='form-control' type='text' id='idea-body-edit-"
     + idea.id
     +"'></div><button class='btn btn-default pull-left' id='edit-idea-form-"
     + idea.id
     + "'>Save</button>"

  );
  deleteIdea()
  editIdea()
  updateIdeaQualityUp()
  updateIdeaQualityDown()
};


function textCutter(text, number) {
  var short = text.substr(0, number);
    if (/^\S/.test(text.substr(number)))
      return short.replace(/\s+\S*$/, "");
      return short;
};

