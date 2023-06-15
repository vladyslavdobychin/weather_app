import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

let map; // Declare map variable outside useEffect

const WeatherMap = () => {
  const mapElement = useRef();
  const weather = useSelector((state) => state.weather.currentWeather);

  useEffect(() => {
    if (weather && !map) { // Check if map is defined before creating new instance
      map = new Map({
        target: mapElement.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          // here you could add additional layers with weather data
        ],
        view: new View({
          center: [weather.coord.lon, weather.coord.lat], // use weather data to center map
          zoom: 4,
        }),
      });
    } else if (weather && map) { // If map is defined and weather data changes, update center of the map
      map.getView().setCenter([weather.coord.lon, weather.coord.lat]);
    }
  }, [weather]);

  return <div id="map" ref={mapElement} style={{ width: '100%', height: '600px' }}></div>;
};

export default WeatherMap;
