function editIdea() {
  $('.edit-idea').on('click', function(){
    var ideaID = $(this).attr('id')
    var idea   = $(this)
    $('.edit-form-' + ideaID).show();
      $('#edit-idea-form-' + ideaID).on('click', function(){
        $('.edit-form-' + ideaID).hide();
        var ideaTitle  = $('#idea-title-edit-' + ideaID).val()
        var ideaBody   = $('#idea-body-edit-' + ideaID).val()
        var ideaParams = {
          idea: {
            title: ideaTitle,
            body: ideaBody
          }
        }

        $('#idea-title-edit-' + ideaID).val('')
        $('#idea-body-edit-' + ideaID).val('')

        $.ajax({
          type: 'PUT',
          data: ideaParams,
          url: 'http://localhost:3000/api/v1/ideas/' + ideaID,
          success: function(response){

          },
          error: function(){
            debugger
        }
      })
    })
  })
}



