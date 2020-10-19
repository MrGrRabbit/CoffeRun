/*
   Задание: Создать обработчик для события изменения (change) слайдера.
   *При изменении значения слайдера отображайте число рядом с меткой для слайдера
   *Реализовать изменения цвета числа(или метки) для отображения крепости кофе
*/

var slider = document.getElementById("strengthLevel");

$(document).ready(function(){
    $(slider).change(function(){
      console.log('cliiick');

    });
});

var output = document.getElementById("result-slider");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
}
