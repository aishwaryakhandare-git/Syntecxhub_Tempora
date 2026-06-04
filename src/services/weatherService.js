const defaultPlace = {
  latitude: 19.07,
  longitude: 72.88,
  label: "Mumbai, India",
}

const weatherCodes = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Cloudy",
  45: "Foggy",
  51: "Light drizzle",
  61: "Rain",
  80: "Rain showers",
}

function buildWeatherUrl(place) {
  return `https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&timezone=auto&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,pressure_msl,uv_index,is_day,precipitation,rain,weather_code`
}

export function getBrowserPlace() {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve(defaultPlace)
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          label: "Current location",
        })
      },
      () => resolve(defaultPlace),
      { timeout: 8000 }
    )
  })
}

export async function getWeather(place = defaultPlace) {
  try {
    const response = await fetch(buildWeatherUrl(place))
    const data = await response.json()
    const current = data.current

    return {
      location: place.label,
      source: "Open-Meteo",
      updatedAt: current.time,
      temperature: current.temperature_2m,
      feelsLike: current.apparent_temperature,
      humidity: current.relative_humidity_2m,
      wind: current.wind_speed_10m,
      pressure: current.pressure_msl,
      uv: current.uv_index || 4,
      isDay: current.is_day === 1,
      precipitation: current.precipitation || 0,
      rain: current.rain || 0,
      condition: weatherCodes[current.weather_code] || "Fresh weather",
    }
  } catch {
    return {
      location: defaultPlace.label,
      source: "Fallback data",
      updatedAt: "",
      temperature: 27,
      feelsLike: 30,
      humidity: 82,
      wind: 8,
      pressure: 1014,
      uv: 4,
      isDay: false,
      precipitation: 0,
      rain: 0,
      condition: "Sunny",
    }
  }
}
