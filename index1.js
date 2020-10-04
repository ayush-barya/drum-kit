for (var i = 0; i < 7; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function(){
    handleClick(this.innerHTML);
    animation(this.innerHTML);
  });
}

document.addEventListener("keydown",function(event){
  handleClick(event.key);
  animation(event.key);
});

//
function handleClick(key) {
  switch (key){
  case "w":
  var audio = new Audio('sounds/tom-1.mp3');
  audio.play();
  break;

  case "a":
  var audio = new Audio('sounds/tom-2.mp3');
  audio.play();
  break;

  case "s":
  var audio = new Audio('sounds/tom-3.mp3');
  audio.play();
  break;

  case "d":
  var audio = new Audio('sounds/tom-4.mp3');
  audio.play();
  break;

  case "j":
  var audio = new Audio('sounds/snare.mp3');
  audio.play();
  break;

  case "k":
  var audio = new Audio('sounds/kick-bass.mp3');
  audio.play();
  break;

  case "l":
  var audio = new Audio('sounds/crash.mp3');
  audio.play();
  break;
}
}

function animation(key){
  var button=document.querySelector("."+key);
  button.classList.add("pressed");

  setTimeout(function(){button.classList.remove("pressed");},100);
}
