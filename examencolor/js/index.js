//Seleccion de colores en Jquery

$(document).ready(function(){
    $muestra = $(".muestra");
    $btn = $(".boton");
    $btn1 = $(".boton1");
    $btn2 = $(".boton2");
    $btn3 = $(".boton3");
    
    $btn1.click(function(){
        $muestra.css("background-color","red");
    });
    $btn2.click(function(){
        $muestra.css("background-color","blue");
    });
    $btn3.click(function(){
        $muestra.css("background-color","yellow");
    });

    newColor();
});


//Control deslizante en Vannilla JS

function setRgb () {
   var red = document.querySelector('.rgb-picker .red-slider input').value;
  var green = document.querySelector('.rgb-picker .green-slider input').value;
  var blue = document.querySelector('.rgb-picker .blue-slider input').value;
  var color = "rgb(" + red + "," + green + "," + blue + ")";
  document.querySelector(".rgb-picker .color-preview").style.backgroundColor = color;

  var nwcolor = document.querySelector(".new-color");

}
  setRgb();
