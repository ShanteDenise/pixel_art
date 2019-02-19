var form = $("#form");
var reset = $("#reset");
var brush = $(".brush");
var input = $("#color-field");
var paint = true
var $square;
var eraser = $("#eraser")


//as long as I is less that 8094 add a div with class name square
for(var i = 0; i < 8094; i++){
   $square = $("<div class='square'/>");
  $("body").append($square);
}
//on mouseover change square background color to the input value
$(".square").on("mouseover", function(){
    if(paint === true){
        $(this).css('background', input.val())
    }
})

//On click turn background squares back to white
eraser.on("click", function(){
    $(".square").css('background-color', 'white')
})

$(document).keydown(function(e){
    paint == true ? paint = false : paint = true
})
