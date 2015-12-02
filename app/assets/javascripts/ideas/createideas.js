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

    postIdea(ideaParams)
  })
}

function postIdea(ideaParams) {
  $.post('http://localhost:3000/api/v1/ideas.json', ideaParams,
    function(returnedData){
    renderIdea(returnedData)
  });
}