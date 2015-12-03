function deleteIdea(){
  $('.delete-idea').on('click', function(){
    var ideaID = $(this).attr('id')
    var idea   = $(this)

    $.ajax({
      type: 'DELETE',
      url: 'https://ideasredux.herokuapp.com/api/v1/ideas/' + ideaID,
      success: function(){
        idea.parent().remove()
      },
      error: function(){
      }
    });
  });
}