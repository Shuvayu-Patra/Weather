let lat , lan;
let cityname = document.getElementById("cityname");
let day = document.getElementById("day");
let temp = document.getElementById("temp");
let how = document.getElementById("how");
let wind = document.getElementById("wind");
const successCallback = (position) => {
    lat = position.coords.latitude;
    lan = position.coords.longitude;
    let weather = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lan}&appid=2ada514156adb7cf3752d9764d7bbae2`)
    
    weather.then((response)=>{
        return response.json();
    }).then((response)=>{
        cityname.innerHTML = response.name + `, <span>${response.sys.country}</span>`;
        setInterval(()=>{
            let d = new Date();
            // console.log(typeof d)
            day.innerText = d.toDateString()
        }, 1000)

        temp.innerHTML = (response.main.temp - 273).toPrecision(4) + " °C"; 
        how.innerHTML = response.weather[0].main;
        wind.innerHTML = (3.6 * response.wind.speed).toPrecision(2) + " km/hr";
        console.log(response.wind.speed)
    })
  };
  
  const errorCallback = (error) => {
    console.log(error);
  };
  
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

  let button = document.getElementsByClassName("icon")[0];
  button.addEventListener("click" , ()=>{
    let input = document.getElementById("input").value;
    let weather = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=8dce443601c817162df1447df4f9a78f&units=metric`)

    weather.then((response)=>{
        return response.json();
    }).then((response)=>{
        cityname.innerHTML = response.name + `, <span>${response.sys.country}</span>`;
        temp.innerHTML = (response.main.temp).toPrecision(4) + " °C"; 
        how.innerHTML = response.weather[0].main;
        wind.innerHTML = (3.6 * response.wind.speed).toPrecision(2) + " km/hr";
    })
  });


//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}




