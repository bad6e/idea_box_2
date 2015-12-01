$(document).ready(function(){
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/api/v1/ideas',
    dataType: 'json',
    success: function(response){
      $.each(response, function(i, idea) {
        renderIdea(idea)
      })

    }
  })
});


