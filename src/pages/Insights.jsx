import PageHeader from "../components/PageHeader"
import WeatherCard from "../components/WeatherCard"

const insights = [
  { title: "Should go outside", value: "Yes", label: "pleasant weather", fill: 86 },
  { title: "Carry umbrella", value: "Maybe", label: "light chance", fill: 42 },
  { title: "Workout score", value: "8.5", label: "great for a run", fill: 85 },
  { title: "Travel comfort", value: "Good", label: "smooth commute", fill: 78 },
  { title: "Photo conditions", value: "Soft", label: "nice daylight", fill: 72 },
]

function Insights() {
  return (
    <section className="dashboardPage">
      <PageHeader title="AI style insights" subtitle="Simple suggestions for your day" />

      <section className="insightHero">
        <p>TEMPORA suggests a light jacket, water bottle, and a short walk before sunset.</p>
      </section>

      <section className="cardGrid">
        {insights.map((item) => (
          <WeatherCard
            title={item.title}
            value={item.value}
            label={item.label}
            fill={item.fill}
            key={item.title}
          />
        ))}
      </section>
    </section>
  )
}

export default Insights
