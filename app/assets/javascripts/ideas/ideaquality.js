function updateIdeaQualityUp() {
  $('.idea-quality-up').on('click', function(){
    var ideaID = $(this).attr('id');
    var idea   = $(this);
    qualityDeterminerUp(idea)

    var ideaQuality  = qualityDeterminerUp(idea)
    var ideaParams = {
      idea: {
        quality: ideaQuality,
      }
    }

    postEditQuality(ideaParams, idea, ideaID)
  });
}

function updateIdeaQualityDown() {
  $('.idea-quality-down').on('click', function(){
    var ideaID = $(this).attr('id');
    var idea   = $(this);
    qualityDeterminerDown(idea)

    var ideaQuality  = qualityDeterminerDown(idea)
    var ideaParams = {
      idea: {
        quality: ideaQuality,
      }
    }

    postEditQuality(ideaParams, idea, ideaID)
  });
}

function postEditQuality(ideaParams, idea, ideaID){
  $.ajax({
    type: 'PUT',
    data: ideaParams,
    url: 'https://ideasredux.herokuapp.com/api/v1/ideas/' + ideaID,
    success: function(response){
      console.log('pass')
      idea.parent().children('h4').text(response.quality)
    },
    error: function(){
      console.log('fail')
    }
  });
}

function qualityDeterminerUp(idea) {
  if (idea.parent().children('h4').text() === "swill") {
    return 'plausible'
  } else if (idea.parent().children('h4').text() === "plausible") {
    return 'genius'
  } else {
    return 'genius'
  }
}

function qualityDeterminerDown(idea) {
  if (idea.parent().children('h4').text() === "plausible") {
    return 'swill'
  } else if (idea.parent().children('h4').text() === "genius") {
    return 'plausible'
  } else {
    return 'swill'
  }
}