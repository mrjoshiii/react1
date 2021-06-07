import React, { useEffect, useState } from 'react';
import Css from './components/App.css'
const App = () => {

  const [city, setCity] = useState(null);
  const [Search, setSearch] = useState("Pune");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${Search}&units=metric&appid=3558afab6dedafab685ac52205d05221`
      // dont forget to add http before the api url
      const res = await fetch(url)
      // console.log(res)
      const resJSON = await res.json();
      console.log(resJSON);
      setCity(resJSON.main)

    }
    fetchApi();
  }, [Search])

  return (
    <>
      <h1 className="h11">Weather App</h1>
      <div className="card">
        <div className="box">
          <div className="inputData">
            <input type="search" className="inputField"
              placeholder="Search city"
              onChange={(event) => {
                setSearch(event.target.value)
              }} />
          </div>
        </div>
        {
          !city ? (
          <p> No data found</p>
        ) : (

          <div className="info">
            <h2 className="location">
              {Search}</h2>
            <h1 className="temp">{city.temp}&#8451;</h1>
            
            <h3 className="tempmin_max">Min :{city.temp_min}&#8451;<p>Max : {city.temp_max}&#8451;</p> 
            <p>Humidity : {city.humidity}</p></h3>

          </div>
)
        }
      </div>


    </>
  )
}
export default App