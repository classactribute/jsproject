function login() {
  //NZcjj9vxSjhChM6qEBsG6dUGixqi7KFl    - my key for reference
  const emailError = document.getElementById("emailError");
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  //no reference needed here... just simply setting up the errors to pop up
  if (email == "") {
    emailError.innerHTML =
      "Error! Please complete the form!" +
      "<br>" +
      "* Email address must be filled in!";
    return false;
  } else if (pass.length < 6) {
    emailError.innerHTML =
      "Error! Please complete the form!" +
      "<br>" +
      "* Password length must be at least 6 characters!";
    return false;
  }
  //this is where I validate the email and password and call ajax. nothing fancy to see here
  if (email == "admin@yopmail.com" && pass == "adminyopmail") {
    emailError.innerHTML = "";
    $.ajax(
      "http://dataservice.accuweather.com/forecasts/v1/daily/5day/56186?apikey=NZcjj9vxSjhChM6qEBsG6dUGixqi7KFl&metric=true"  //56186 for MONTREAL! 
    )
      .done(showWeather) //calling the method for when Ajax is loaded
      .fail(showFail); //this should not ever be called because my code is awesome.
  }
  //What can I comment about this... I referred to our in class video where you helped show me how to browse through the API in console.
  //I decided to create a designated area for each of my day li and not use a loop because I wanted to see everything. I could use a loop if I needed to.
  function showWeather(weatherData) {
    const weather1 = document.getElementById("weather1");
    const weather2 = document.getElementById("weather2");
    const weather3 = document.getElementById("weather3");
    const weather4 = document.getElementById("weather4");
    const weather5 = document.getElementById("weather5");
    console.log(weatherData.DailyForecasts); //I used this beautiful line to read the API in the console and find everything below
    const day1 = document.createElement("li");
    day1.innerHTML = `<a href="">${weatherData.DailyForecasts[0].Date}</a><br><b>Max:</b> ${weatherData.DailyForecasts[0].Temperature.Maximum.Value} ${weatherData.DailyForecasts[0].Temperature.Maximum.Unit} 
        <b>Min:</b> ${weatherData.DailyForecasts[0].Temperature.Minimum.Value} ${weatherData.DailyForecasts[0].Temperature.Minimum.Unit}<br> 
        <b>Day:</b> ${weatherData.DailyForecasts[0].Day.IconPhrase} <b>Night:</b> ${weatherData.DailyForecasts[0].Night.IconPhrase}`;
    day1.style.backgroundColor = "rgb(255, 0, 0, 0.6)";
    weather1.appendChild(day1);
    const day2 = document.createElement("li");
    day2.innerHTML = `<a href="">${weatherData.DailyForecasts[1].Date}</a><br><b>Max:</b> ${weatherData.DailyForecasts[1].Temperature.Maximum.Value} ${weatherData.DailyForecasts[1].Temperature.Maximum.Unit} 
        <b>Min:</b> ${weatherData.DailyForecasts[1].Temperature.Minimum.Value} ${weatherData.DailyForecasts[1].Temperature.Minimum.Unit}<br> 
        <b>Day:</b> ${weatherData.DailyForecasts[1].Day.IconPhrase} <b>Night:</b> ${weatherData.DailyForecasts[1].Night.IconPhrase}`;
    day2.style.backgroundColor = "	rgb(255,165,0, 0.6)";
    weather2.appendChild(day2);
    const day3 = document.createElement("li");
    day3.innerHTML = `<a href="">${weatherData.DailyForecasts[2].Date}</a><br><b>Max:</b> ${weatherData.DailyForecasts[2].Temperature.Maximum.Value} ${weatherData.DailyForecasts[2].Temperature.Maximum.Unit} 
        <b>Min:</b> ${weatherData.DailyForecasts[2].Temperature.Minimum.Value} ${weatherData.DailyForecasts[2].Temperature.Minimum.Unit}<br> 
        <b>Day:</b> ${weatherData.DailyForecasts[2].Day.IconPhrase} <b>Night:</b> ${weatherData.DailyForecasts[2].Night.IconPhrase}`;
    day3.style.backgroundColor = "rgb(255, 255, 0, 0.6)";
    weather3.appendChild(day3);
    const day4 = document.createElement("li");
    day4.innerHTML = `<a href="">${weatherData.DailyForecasts[3].Date}</a><br><b>Max:</b> ${weatherData.DailyForecasts[3].Temperature.Maximum.Value} ${weatherData.DailyForecasts[3].Temperature.Maximum.Unit} 
        <b>Min:</b> ${weatherData.DailyForecasts[3].Temperature.Minimum.Value} ${weatherData.DailyForecasts[3].Temperature.Minimum.Unit}<br> 
        <b>Day:</b> ${weatherData.DailyForecasts[3].Day.IconPhrase} <b>Night:</b> ${weatherData.DailyForecasts[3].Night.IconPhrase}`;
    day4.style.backgroundColor = "rgb(0, 255, 0, 0.6)";
    weather4.appendChild(day4);
    const day5 = document.createElement("li");
    day5.innerHTML = `<a href="">${weatherData.DailyForecasts[4].Date}</a><br><b>Max:</b> ${weatherData.DailyForecasts[4].Temperature.Maximum.Value} ${weatherData.DailyForecasts[4].Temperature.Maximum.Unit} 
        <b>Min:</b> ${weatherData.DailyForecasts[4].Temperature.Minimum.Value} ${weatherData.DailyForecasts[4].Temperature.Minimum.Unit}<br> 
        <b>Day:</b> ${weatherData.DailyForecasts[4].Day.IconPhrase} <b>Night:</b> ${weatherData.DailyForecasts[4].Night.IconPhrase}`;
    day5.style.backgroundColor = "rgb(0, 0, 255, 0.6)";
    weather5.appendChild(day5);
  }

  function showFail() {
    alert("Something went wrong");
  }
}

document.getElementById("date").innerHTML = formatDate();

//Found part of this online. Need to make an array for the abbreviation of months and days to display like they are displayed in your project example. http://jsfiddle.net/EZVbj/1/
//The rest are functions to get the live date.
function formatDate() {
  var d = new Date(),
    months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    days[d.getDay()] +
    " " +
    months[d.getMonth()] +
    " " +
    d.getDate() +
    " " +
    d.getFullYear()
  );
}

//Found part of this online. used onload in body tag with this function. https://stackoverflow.com/questions/35807330/show-current-time-moving-floating
//Functions to get the live time and then display it with innerHTML into the span tag. 
//setTimeout is to execute startTime and update the clock and display time in real time.
function startTime() {
  var today = new Date();
  var h = today.getHours();
  h = h > 12 ? h - 12 : h;
  var m = today.getMinutes();
  var s = today.getSeconds();
  ampm = today.getHours() >= 12 ? "PM" : "AM";
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("time").innerHTML =
    h + ":" + m + ":" + s + " " + ampm;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}