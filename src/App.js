import Header from './components/Header';
import WeatherMap from './components/WeatherMap';
import store from './store/store';
import { Provider } from 'react-redux';
import './index.css';
import WeatherContainer from './components/WeatherContainer';

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
