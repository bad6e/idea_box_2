function createIdea() {
  $('#create-idea').on('click', function(){
    var ideaTitle  = $('#idea-title').val()
    var ideaBody   = $('#idea-body').val()
    var ideaParams = {
      idea: {
        title: ideaTitle,
        body: ideaBody
      }
    }

    $('#idea-title').val('')
    $('#idea-body').val('')

    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/api/v1/ideas.json',
      data: ideaParams,
      success: function(idea) {
        getIdeas();
      }
    })
  })
}