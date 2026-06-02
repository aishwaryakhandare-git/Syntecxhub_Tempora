import PageHeader from "../components/PageHeader"
import TrendChart from "../components/TrendChart"
import WeatherCard from "../components/WeatherCard"

const hourly = [
  { label: "Now", value: 42, temp: "27" },
  { label: "11:00", value: 48, temp: "28" },
  { label: "12:00", value: 61, temp: "28" },
  { label: "13:00", value: 68, temp: "29" },
  { label: "14:00", value: 58, temp: "30" },
  { label: "15:00", value: 50, temp: "29" },
  { label: "16:00", value: 64, temp: "29" },
]

function Overview({ weather }) {
  const temperature = weather ? Math.round(weather.temperature) : 27

  return (
    <section className="dashboardPage">
      <PageHeader
        title="Welcome back Isabella!"
        subtitle="Check out today's weather information"
      />

      <section className="heroCard">
        <div>
          <p>Current weather</p>
          <h2>{temperature}&deg;</h2>
          <span>{weather?.condition || "Sunny"} in New York</span>
        </div>
        <span className="heroSun" aria-hidden="true" />
      </section>

      <section className="wideCard">
        <div className="sectionTitle">
          <h2>Hourly forecast</h2>
          <button>Next hours</button>
        </div>
        <div className="hourGrid">
          {hourly.map((item) => (
            <div className="hourItem" key={item.label}>
              <span className="smallSun" aria-hidden="true" />
              <p>{item.label}</p>
              <strong>{item.temp}&deg;</strong>
            </div>
          ))}
        </div>
        <TrendChart points={hourly} />
      </section>

      <section className="cardGrid">
        <WeatherCard title="Humidity" value={`${weather?.humidity || 82}%`} label="normal" fill={82} />
        <WeatherCard title="Wind" value={`${Math.round(weather?.wind || 8)} km/h`} label="light breeze" fill={35} />
        <WeatherCard title="Feels like" value={`${temperature + 3}°`} label="warm" fill={64} />
      </section>
    </section>
  )
}

export default Overview
