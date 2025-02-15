// Adding event listeners for button clicks and key presses

// Function to play the corresponding sound
function playSound(key) {
    switch (key) {
      case "w":
        var tom1 = new Audio("sounds/crash.mp3"); 
        tom1.play();
        break;
      case "a":
        var tom2 = new Audio("sounds/kick-bass.mp3");
        tom2.play();
        break;
      case "s":
        var tom3 = new Audio("sounds/snare.mp3");
        tom3.play();
        break;
      case "d":
        var tom4 = new Audio("sounds/tom-1.mp3");
        tom4.play();
        break;
      case "j":
        var snare = new Audio("sounds/tom-2.mp3");
        snare.play();
        break;
      case "k":
        var crash = new Audio("sounds/tom-3.mp3");
        crash.play();
        break;
      case "l":
        var kick = new Audio("sounds/tom-4.mp3");
        kick.play();
        break;
        default:
          console.log(key);
    }
  }
  
  // Adding the event listeners to buttons
  var drumButtons = document.querySelectorAll(".drum");
  
  drumButtons.forEach((button) => {
    button.addEventListener("click", function () {
      var buttonInnerHTML = this.innerHTML;
      playSound(buttonInnerHTML);
    });
  });
  
  // Adding the event listener for keypresses
  document.addEventListener("keydown", function (event) {
    playSound(event.key);
  });
  
