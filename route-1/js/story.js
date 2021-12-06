var currentIndex = 0;
var sword = false;

function createScene() {
  var currentEvent = eventList[currentIndex];
  // checking for special events
  if (currentIndex == 10) {
    console.log("sword true")
    $("#story-text").html("<p>"+currentEvent.text+"</p>");
    sword = true;
  } else if (currentIndex == 16) {
    if (sword == true) {
      console.log("sword true")
      $("#story-text").html("<p>"+currentEvent.text+currentEvent.swordTrue+"</p>");
    } else {
      $("#story-text").html("<p>"+currentEvent.text+currentEvent.swordFalse+"</p>");
    }
  } else if (currentIndex == 18) {
      if (sword == true) {
        console.log("sword true")
        $("#story-text").html("<p>"+currentEvent.text+currentEvent.swordTrue+"</p>");
      } else {
        $("#story-text").html("<p>"+currentEvent.text+currentEvent.swordFalse+"</p>");
      }
  } else {
    $("#story-text").html("<p>"+currentEvent.text+"</p>");
  }
  $("#story-img").html("<img id='story-img' src='"+currentEvent.image+"'>");


  // checking if the next event is a different html page or not
  if (currentEvent.options[0].next !== false) {
    // typed.js
    let typed = new Typed("#typed", {
      stringsElement: "#story-text",
      typeSpeed: 30,
      loopCount: 1,
      onComplete: (self) => {
        // for however many options, create corresponding buttons with option text
        for (x in currentEvent.options) {
          var optionTxt = currentEvent.options[x].option;
          $(".story-options").append("<button class='event' id='"+currentEvent.options[x].next+"'>"+optionTxt+"</button><br>");
        }

        // on click, finds the next event index and changes currentIndex to that
        $(".event").click(function(){
          typed.destroy()
          // reassigns the current index and event
          currentIndex = this.id;
          currentEvent = eventList[currentIndex];
          // resets buttons
          $(".story-options").html("");
          createScene();
        })
      }
    })
  } else {
    // typed.js
    let typed = new Typed("#typed", {
      stringsElement: "#story-text",
      typeSpeed: 30,
      loopCount: 1,
      onComplete: (self) => {
        // for however many options, create corresponding buttons with option text
        for (x in currentEvent.options) {
          var optionTxt = currentEvent.options[x].option;
          $(".story-options").append("<button><a href='"+currentEvent.link+"'>"+optionTxt+"</button></a><br>");
        }
      }
    })
  }


}

createScene();
