 function analyze() {
      let temp = parseFloat(document.getElementById("temp").value);
      let weather = document.getElementById("weather").value;
      let mood = document.getElementById("mood").value;
      let drink = document.getElementById("drink").value;

      let result = "";
      

      if (temp >= 30 && weather === "sunny") {
        result += "It's a hot sunny day, wear sunscreen!<br>";
      }
      else if(temp <= 30 && weather === "cold"){
  result += "It's a cloudy day, wear sweater!<br>";
      } else {
  result += "Weather is moderate, dress comfortably.<br>";
    }

      if (mood === "happy" && weather === "cold") {
        result += "Enjoy the cold breeze and stay joyful!<br>";
      }

      result += `Temperature: ${temp.toFixed(1)}°C<br>`;
      result += `Temperature is ${temp % 2 === 0 ? "even" : "odd"}<br>`;

      if (drink === "" || drink === null || drink === undefined) {
        result += "No drink selected.<br>";
      } else {
        result += `Drink: ${drink}<br>`;
      }


      document.getElementById("output").innerHTML = result;
    }