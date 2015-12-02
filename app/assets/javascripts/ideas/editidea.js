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

        $.ajax({
          type: 'PUT',
          data: ideaParams,
          url: 'http://localhost:3000/api/v1/ideas/' + ideaID,
          success: function(response){
            idea.parent().children('h3').text(response.title)
            idea.parent().children('p').text(response.body)
            debugger


            //Display new idea
            //Find idea that we are updating and replace information
          },
          error: function(){
            debugger
        }
      })
    })
  })
}



