import './geo.scss'
import { useState, useEffect, useCallback } from 'react';

export const Geo = () => {
  const [geo, setGeo] = useState({ latitude: null, longitude: null, city: '' });

  const getCity = useCallback((latitude, longitude) => {
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
      .then(response => response.json())
      .then(data => {
        setGeo(prevState => ({
          ...prevState,
          city: data.address.city
        }));
      })
      .catch(error => console.log(error));
  }, []);

  const showPosition = useCallback((position) => {
    setGeo({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
    getCity(position.coords.latitude, position.coords.longitude);
  }, [getCity]);

  const showError = (error) => {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        console.log("Пользователь отклонил запрос на геолокацию.");
        break;
      case error.POSITION_UNAVAILABLE:
        console.log("Информация о местоположении недоступна.");
        break;
      case error.TIMEOUT:
        console.log("Запрос на получение местоположения пользователя истек.");
        break;
      case error.UNKNOWN_ERROR:
        console.log("Произошла неизвестная ошибка.");
        break;
      default:
        console.log("Произошла неожиданная ошибка при запросе геолокации.");
        break;
    }
  };

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
      } else {
        console.log("Геолокация не поддерживается вашим браузером.");
      }
    };

    getLocation();
  }, [showPosition]);

  return (
    <>
      <a href='javascipt:void(0)' className="geo" title={geo.city}>
        <svg className='geo__img' width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 13.8414L3.28767 10.129C2.55345 9.39481 2.05344 8.45935 1.85087 7.44095C1.64831 6.42255 1.75228 5.36695 2.14964 4.40764C2.547 3.44834 3.21991 2.6284 4.08327 2.05153C4.94662 1.47465 5.96165 1.16675 7 1.16675C8.03835 1.16675 9.05338 1.47465 9.91674 2.05153C10.7801 2.6284 11.453 3.44834 11.8504 4.40764C12.2477 5.36695 12.3517 6.42255 12.1491 7.44095C11.9466 8.45935 11.4466 9.39481 10.7123 10.129L7 13.8414ZM9.8875 9.3042C10.4585 8.73312 10.8474 8.00554 11.0049 7.21346C11.1624 6.42138 11.0815 5.60038 10.7725 4.85428C10.4634 4.10817 9.94003 3.47046 9.26854 3.0218C8.59704 2.57314 7.80759 2.33366 7 2.33366C6.19241 2.33366 5.40296 2.57314 4.73147 3.0218C4.05998 3.47046 3.5366 4.10817 3.22753 4.85428C2.91846 5.60038 2.83758 6.42138 2.9951 7.21346C3.15262 8.00554 3.54148 8.73312 4.1125 9.3042L7 12.1917L9.8875 9.3042ZM7 7.58337C6.69058 7.58337 6.39384 7.46045 6.17504 7.24166C5.95625 7.02287 5.83334 6.72612 5.83334 6.4167C5.83334 6.10728 5.95625 5.81054 6.17504 5.59174C6.39384 5.37295 6.69058 5.25004 7 5.25004C7.30942 5.25004 7.60617 5.37295 7.82496 5.59174C8.04375 5.81054 8.16667 6.10728 8.16667 6.4167C8.16667 6.72612 8.04375 7.02287 7.82496 7.24166C7.60617 7.46045 7.30942 7.58337 7 7.58337Z"/>
        </svg>
        {geo.latitude && geo.longitude ? geo.city : 'Определение местоположения...'}
      </a>
    </>
  )
}