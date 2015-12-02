function createIdea() {
  $('#create-idea').on('click', function(){
    var ideaTitle  = $('#idea-title').val()
    var ideaBody   = $('#idea-body').val()
    checkTextField(ideaTitle, ideaBody)
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
  $.post('http://localhost:3000/api/v1/ideas', ideaParams,
    function(returnedData){
    renderIdea(returnedData)
  });
}

function checkTextField(ideaTitle, ideaBody) {
  if (ideaTitle == "" && ideaBody == "") {
    alert("Title and Body Form Fields cannot be Empty");
  } else if (ideaTitle  == "" || ideaBody == "")  {
    alert("Title or Body field cannot be Empty");
  }
}