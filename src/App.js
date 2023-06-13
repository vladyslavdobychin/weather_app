import Header from './components/Header/Header';
import WeatherMap from './components/Map/WeatherMap';
import store from './store/store';
import WeatherContainer from './components/Forecast/WeatherContainer';
import ErrorFallback from './components/Error/ErrorFallback';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import './index.css';

function App() {
  return (
    <Provider store={store}>
      <div className='container'>
        <header className='header'>
          <Header />
        </header>
        <main className='weather-container'>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <WeatherContainer />
          </ErrorBoundary>
        </main>
        <div className='map-container'>
          <WeatherMap />
        </div>
      </div>
    </Provider>
  );
}

export default App;
