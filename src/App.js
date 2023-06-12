import Header from './components/Header/Header';
import WeatherMap from './components/Map/WeatherMap';
import store from './store/store';
import { Provider } from 'react-redux';
import './index.css';
import WeatherContainer from './components/Forecast/WeatherContainer';

function App() {
  return (
    <Provider store={store}>
      <div className='container'>
        <header className='header'>
          <Header />
        </header>
        <main className='weather-container'>
          <WeatherContainer />
        </main>
        <div className='map-container'>
          <WeatherMap />
        </div>
      </div>
    </Provider>
  );
}

export default App;
