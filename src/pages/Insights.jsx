import PageHeader from "../components/PageHeader"
import WeatherCard from "../components/WeatherCard"

function buildInsights(weather) {
  const temperature = weather?.temperature || 27
  const wind = weather?.wind || 8
  const rain = (weather?.rain || 0) + (weather?.precipitation || 0)
  const isDay = weather?.isDay ?? false
  const isHot = temperature >= 32
  const isRainy = rain > 0

  return [
    {
      title: "Should go outside",
      value: isRainy ? "Wait" : "Yes",
      label: isDay ? "good visibility" : "night conditions",
      fill: isRainy ? 45 : 78,
    },
    {
      title: "Carry umbrella",
      value: isRainy ? "Yes" : "No",
      label: isRainy ? "rain detected" : "low rain now",
      fill: isRainy ? 82 : 18,
    },
    {
      title: "Workout score",
      value: isHot ? "6.5" : "8.0",
      label: isHot ? "hydrate well" : "comfortable",
      fill: isHot ? 65 : 80,
    },
    {
      title: "Travel comfort",
      value: wind > 25 || isRainy ? "Fair" : "Good",
      label: wind > 25 ? "windy outside" : "normal commute",
      fill: wind > 25 || isRainy ? 56 : 78,
    },
    {
      title: "Photo conditions",
      value: isDay ? "Day" : "Night",
      label: isDay ? "natural light" : "use night mode",
      fill: isDay ? 74 : 38,
    },
  ]
}

function Insights({ weather }) {
  const insights = buildInsights(weather)
  const isDay = weather?.isDay ?? false
  const source = weather?.source || "Open-Meteo"

  return (
    <section className="dashboardPage">
      <PageHeader title="AI style insights" subtitle="Suggestions based on current weather" />

      <section className="insightHero">
        <p>
          TEMPORA is using {source}. Right now it looks like {isDay ? "daytime" : "nighttime"},
          so suggestions are adjusted for current light conditions.
        </p>
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
