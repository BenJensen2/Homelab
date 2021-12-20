// MDN Docs: Date https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

function today() {
  var today = new Date();
  let year = today.getFullYear()
  let month = today.getMonth()+1
  let daysInMonth = new Date(year,month,0).getDate()
  console.log("Today: ",today)
  console.log("Time: ",today.getTime())
  console.log("Timezone Offset (Minutes): -",today.getTimezoneOffset())
  console.log("Timezone Offset (Hours): -",today.getTimezoneOffset()/60,":00")
  console.log("Milliseconds: ",today.getMilliseconds())
  console.log("Seconds: ", today.getSeconds())
  console.log("Minutes: ",today.getMinutes())
  console.log("Hours: ",today.getHours())
  console.log("Day: ",today.getDate())
  console.log("Month: ",today.getMonth()+1) // 0 Indexed, need to add 1
  console.log("Days in Month: ",daysInMonth)
  console.log("Year: ",today.getFullYear())
  console.log("Date Now (milliseconds): ", Date.now())
  // Able to set Date properties for a Date object
  // event.SetDate(24): Sets the event objects Day of the month to 24
}

today()