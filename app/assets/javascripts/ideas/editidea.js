function editIdea() {
  $('.edit-idea').on('click', function(){
    var ideaID = $(this).attr('id')
    var idea   = $(this)
    $('.edit-form-' + ideaID).show();

  })
}