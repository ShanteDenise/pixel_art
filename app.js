var form = $("#form");
var reset = $("#reset");
var brush = $(".brush");
var input = $("#color-field");
var paint = true
var $square;
var eraser = $("#eraser")

$('.dropdown-trigger').dropdown();


form.on("submit", function(e){
  e.preventDefault();
  brush.css('background-color', input.val());
})

for(var i = 0; i < 8094; i++){
   $square = $("<div class='square'/>");
  $("body").append($square);
}

$(".square").on("mouseover", function(){
    if(paint === true){
        $(this).css('background', input.val())
    }
})

//On click turn background squares white to reset
eraser.on("click", function(){
    $(".square").css('background-color', 'white')
})

$(document).keydown(function(e){
    paint == true ? paint = false : paint = true
})
