import logo from './logo.svg';
import './App.css';
import { useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';


// 앱이 실행되자마자 현재위치기반의 날씨가 보인다
// 날씨 정보에는 도시 섭씨 화씨 날씨 상태정보가 보인다
// 밑에는 5개의 버튼이 있다 (1개는 현재위치 4개는 다른 도시 )
// 도시버튼 클릭할 때마다 도시별 날씨상태가 보여진다.
// 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다.
// 데이터를 들고오는 동안 로딩스피너가 돌아간다.

function App() {
  const [weather, setweather] = useState(null);
  const getCurrentLocation= () => {
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      getWeatherByCurrentLocation(lat,lon)
    });
    
  };

  const getWeatherByCurrentLocation = async (lat,lon) => {

  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f257578e3d22e55c2d4cd93650169875&units=metric`;
      const res = await fetch(url);
    let response = await fetch(url)
    let data = await response.json();
    setweather(data);


  }

  useEffect(()=>{
    getCurrentLocation();
  },[]);
  return (
    <div >
      <div className='container'>
     <WeatherBox weather={weather}/>  
    <WeatherButton/>
    </div>
    </div>
  );
}

export default App;
