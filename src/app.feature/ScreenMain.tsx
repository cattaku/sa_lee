import styled from "styled-components";
import {useEffect, useMemo,useState} from "react";
import getCurrentLocation from "@/app.feature/getCurrentLocation";
import ClearWeather from "@/app.feature/sooah/component/ClearWeather";

const ScreenMain = () => {
  const [currentLocation, setCurrentLocation] = useState();
  const [currenWeather, setCurrenWeather] = useState();
  const requestWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.4941879&lon=127.0311222&appid=747175c09cc4bec5ef44a97dbdf0d652`)
      .then(response => response.json())
      .then(data => {
        setCurrenWeather(data)
      });
  }

  console.log('currenWeather', currenWeather)

  // weather.weather.main 값에 따라 다른 컴포넌트를 렌더링


 useEffect(() => {
 	 getCurrentLocation(function(error, location) {
     if (error) {
       console.error("Error occurred while fetching location:", error.message);
     } else {
       setCurrentLocation(location);
       console.log("Current location:", location);
     }
   });
    requestWeather()
 }, []);


  return (
    <MainStyledWrapper>
      <ClearWeather currenWeather={currenWeather}/>
    </MainStyledWrapper>
  )
}

export default ScreenMain

const MainStyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`

// const MainStyledWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   height: 100vh;
//   background: url('/images/main-bg.jpg') no-repeat center center;
//   background-size: cover;
//
//
//   .backgound-wrapper {
//     width: 100vw;
//     height: inherit;
//     background-color: blueviolet;
//     opacity:0.1;
//   }
// `