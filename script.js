function displayDate()  {
  var now = new Date();
  var days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
  var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

  var hours = now.getHours();

  var ampm = hours >= 12 ? 'pm' : 'am'; 
  
  // non-military time
  hours = hours % 12;
  // hour 0 should be 12
  hours = hours ? hours : 12;

  var minutes = now.getMinutes();
  // handle single digit minutes
  minutes = minutes < 10 ? '0' + minutes : minutes; 

  var seconds = now.getSeconds();
  // handle single digit seconds
  seconds = seconds < 10 ? '0' + seconds : seconds;

  var day = days[now.getDay()];

  var date = now.getDate();
  // handle single digit date
  date = date < 10 ? '0' + date : date;

  var month = months[now.getMonth()];

  var year = now.getFullYear();
  
  // &middot;
  var splitChar = String.fromCharCode(183);
  var strTime = hours + splitChar + minutes + splitChar + seconds;
  var strDate = day + ", " + date + " " + month + ", " + year;
  
  document.getElementById("time").textContent = strTime;
  document.getElementById("ampm").textContent = ampm;
  document.getElementById("date").textContent = strDate;
}

setInterval(displayDate, 1000);