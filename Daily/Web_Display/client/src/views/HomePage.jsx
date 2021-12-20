import React from 'react';


const HomePage = () => {


  // const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update
  
  console.log("Daily Practice!")
  const today = new Date().toString(); // React doesn't allow objects like Dates or Arrays as children, need to convert value to string
  // const time = today.getTime(); // Error today.getTime() is not a function
  // console.log(today)
  // const today = "Hello";
  
  return (
    <div className="home-page">
      <h1>This is my daily practice</h1>
      <p><b>Today</b>: {today}</p>
      
      </div>
  )
}

export default HomePage;