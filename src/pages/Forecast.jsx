import PageHeader from "../components/PageHeader"
import TrendChart from "../components/TrendChart"

const forecast = [
  { day: "Mon", weather: "Sunny", low: 22, high: 29, value: 56 },
  { day: "Tue", weather: "Cloudy", low: 21, high: 27, value: 48 },
  { day: "Wed", weather: "Rain", low: 20, high: 25, value: 38 },
  { day: "Thu", weather: "Clear", low: 23, high: 30, value: 68 },
  { day: "Fri", weather: "Sunny", low: 24, high: 31, value: 76 },
  { day: "Sat", weather: "Windy", low: 22, high: 28, value: 52 },
  { day: "Sun", weather: "Bright", low: 25, high: 32, value: 82 },
]

function Forecast() {
  return (
    <section className="dashboardPage">
      <PageHeader title="7 day forecast" subtitle="Plan your week with a soft temperature trend" />

      <section className="wideCard">
        <div className="sectionTitle">
          <h2>Temperature trend</h2>
          <button>7 days</button>
        </div>
        <TrendChart points={forecast.map((day) => ({ label: day.day, value: day.value }))} />
      </section>

      <section className="forecastList">
        {forecast.map((day) => (
          <article className="dayCard" key={day.day}>
            <div>
              <strong>{day.day}</strong>
              <span>{day.weather}</span>
            </div>
            <p>{day.low}&deg; / {day.high}&deg;</p>
          </article>
        ))}
      </section>
    </section>
  )
}

export default Forecast
