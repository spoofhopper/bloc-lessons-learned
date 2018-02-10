window.onload = function() {
  alert("Pick a healthy snack from the refrigerator!");
};


$('.oranges').click(function(event) {
  alert("You chose an orange!");
  .css('border', '5px solid orange');
});

$('.apples').click(function(event) {
  alert("You chose an apple!");
  .css('border', '5px solid red');
});


/*
var oranges = document.getElementsByClassName("oranges");

oranges[0].onclick = function() {
  oranges[0].style.border = "5px solid orange";
  alert("You chose an orange!");
};

var apples = document.getElementsByClassName("apples");

apples[0].onclick = function() {
  apples[0].style.border = "5px solid red";
  alert("You chose an apple!");
};
*/