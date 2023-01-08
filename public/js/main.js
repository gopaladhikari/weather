const submitBtn = document.getElementById("submitBar");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const tempStatus = document.getElementById("temp-status");
const today = document.getElementById("day");
const thisMonth = document.getElementById("today-data");
const week = [
  "Sunday",
  "Monday",
  "Tueday",
  "Wedday",
  "Thuday",
  "Friday",
  "Saturday",
];

const year = [
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
];

let date = new Date();
let day = date.getDay();
let todayDate = date.getDate();
let month = date.getMonth();

today.innerHTML = week[day];
thisMonth.innerHTML = todayDate + " " + year[month];

const getInfo = async (e) => {
  e.preventDefault();
  if (cityName.value === "") {
    city_name.innerHTML = "Please enter a city name";
    city_name.style.color = "red";
  } else {
    city_name.style.color = "black";
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=eedcec09a0b2e709429038b8ef129339`;
      const res = await fetch(url);
      const data = await res.json();
      const dataArr = [data];
      console.log(dataArr);
      city_name.innerHTML = `${dataArr[0].name},${dataArr[0].sys.country}`;
      temp.innerHTML = dataArr[0].main.temp + "&#8451;";
      const tempMood = dataArr[0].weather[0].main;
      console.log(tempMood);
      if (tempMood === "Clear") {
        tempStatus.innerHTML = '<i class="fas fa-sun"></i>';
        tempStatus.style.color = "#f5ec42";
      } else if (tempMood === "Clouds") {
        tempStatus.innerHTML = "<i class='fa-solid fa-cloud'></i>";
        tempStatus.style.color = "#f5ec42";
      } else if (tempMood === "Rain") {
        tempStatus.innerHTML = '<i class="fa-solid fa-cloud-rain"></i>';
        tempStatus.style.color = "#a4b0be";
      } else {
        tempStatus.innerHTML = "<i class='fas fa-sun'></i>";
        tempStatus.style.color = "#f5ec42";
      }
    } catch (error) {
      city_name.innerHTML = "Please enter a valid city name";
      city_name.style.color = "red";
    }
    cityName.value = "";
  }
};

submitBtn.addEventListener("click", getInfo);
