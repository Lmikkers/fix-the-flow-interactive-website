var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

slider.addEventListener('input', () => {
    const currentValue = slider.value;

    if (currentValue == 25) {
      alert('25%')
    } else if (currentValue == 50) {
        alert('50%')
    } else if (currentValue == 75) {
        alert('75%')
    }
    else if (currentValue == 100) {
        alert('100%')
    }
    else {

    }
  });