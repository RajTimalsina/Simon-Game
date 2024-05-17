var chosenColor = [];
var colorList = ["red", "blue", "green", "yellow"];
var userClickedColor = [];
var level = 0;
var temp = 0;
var colorLength;
var flag = 1;
$("body").one("keypress", function (e) {
  var keyWord = e.key;
  console.log(keyWord);
  nextseq();
});

function nextseq() {
  $("h1").text("Level:" + level);
  var RandomNumber = Math.floor(Math.random() * 4);
  var ranColor = colorList[RandomNumber];
  chosenColor.push(ranColor);
  console.log(chosenColor);
  player(ranColor);
  level++;
  level = temp;
  clickAble();
}

function clickAble() {
  $(".btn").click(function () {
    var clickedId = this.id;
    userClickedColor.push(clickedId);
    console.log(userClickedColor);
    player(clickedId);
  });
}

function answerCheck() {
  while (temp) {
    if (userClickedColor.pop() == colorList[temp - 1]) break;
    else alert("wrong");
  }
}

function player(buttonName) {
  $("#" + buttonName)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  var audio = new Audio("sounds/" + buttonName + ".mp3");
  audio.play();
}
