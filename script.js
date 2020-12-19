function login() { //NZcjj9vxSjhChM6qEBsG6dUGixqi7KFl
  $.ajax("http://dataservice.accuweather.com/forecasts/v1/daily/5day/56186?apikey=NZcjj9vxSjhChM6qEBsG6dUGixqi7KFl&metric=true").done(showWeather).fail(showFail);
    const emailError = document.getElementById("emailError");
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
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

    function showWeather(weatherData) {
      if (email == "admin@yopmail.com" && pass == "adminyopmail") {
        alert("you did it muthafucka");
        const weather = document.getElementById("weather");
        weather.textContent = weatherData.DailyForecasts.EffectiveDate;
      }
    }

    // data.DailyForecasts.Temperature.Maximum.Value +
    // data.DailyForecasts.Temperature.Minimum.Value +
    // data.DailyForecasts.Day.IconPhrase +
    // data.DailyForecasts.Night.IconPhrase;
    
    function showFail() {
      alert("you fail bitch");
    }

}



const message = document.getElementById("message");
message.textContent = "in init";

document.getElementById("date").innerHTML = formatDate();

//Found part of this online. Need to make an array for the abbreviation of months and days to display like they are displayed in your project example. The rest are functions to get the live date.
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

//Found part of this online. used onload in body tag with this function. Functions to get the live time and then display it with innerHTML into the span tag. setTimeout is to execute startTime and update the clock and display time in real time.
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
