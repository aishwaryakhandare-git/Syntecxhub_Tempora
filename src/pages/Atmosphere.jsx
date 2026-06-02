import PageHeader from "../components/PageHeader"
import WeatherCard from "../components/WeatherCard"

function Atmosphere({ weather }) {
  const humidity = weather?.humidity || 82
  const wind = Math.round(weather?.wind || 8)
  const pressure = Math.round(weather?.pressure || 1014)
  const uv = Math.round(weather?.uv || 4)

  return (
    <section className="dashboardPage">
      <PageHeader title="Atmosphere" subtitle="Humidity, wind, air and pressure details" />

      <section className="cardGrid">
        <WeatherCard title="Humidity" value={`${humidity}%`} label="comfortable" fill={humidity} />
        <WeatherCard title="Wind" value={`${wind} km/h`} label="steady" fill={35} />
        <WeatherCard title="Pressure" value={`${pressure} hPa`} label="stable" fill={62} />
        <WeatherCard title="UV" value={uv} label="medium" fill={uv * 10} />
        <WeatherCard title="Air quality" value="42" label="good" fill={42} />
        <WeatherCard title="Storm possibility" value="12%" label="low" fill={12} />
      </section>
    </section>
  )
}

export default Atmosphere
