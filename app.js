var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=fc220f08dd2d470ebf5870344b74eeab')
  .then(response => response.json())
  .then(data => {
      var nameValue = data['name'];
      var tempValue = data['main']['temp'];
      var descValue = data['weather']['0']['description'];

      name.innerHTML = nameValue;
      temp.innerHTML = "Celcius : "+(tempValue - 273.15);
      desc.innerHTML = "Weather : "+descValue;
  })

.catch(err => alert("Wrong city name!"))
})

