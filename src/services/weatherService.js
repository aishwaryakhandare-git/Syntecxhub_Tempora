const apiUrl =
  "https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&current=temperature_2m,relative_humidity_2m,wind_speed_10m,pressure_msl,uv_index,weather_code"

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

export async function getWeather() {
  try {
    const response = await fetch(apiUrl)
    const data = await response.json()
    const current = data.current

    return {
      temperature: current.temperature_2m,
      humidity: current.relative_humidity_2m,
      wind: current.wind_speed_10m,
      pressure: current.pressure_msl,
      uv: current.uv_index || 4,
      condition: weatherCodes[current.weather_code] || "Fresh weather",
    }
  } catch {
    return {
      temperature: 27,
      humidity: 82,
      wind: 8,
      pressure: 1014,
      uv: 4,
      condition: "Sunny",
    }
  }
}
