import { NavLink } from "react-router-dom"

const links = [
  { path: "/", label: "Overview" },
  { path: "/forecast", label: "Forecast" },
  { path: "/atmosphere", label: "Atmosphere" },
  { path: "/insights", label: "Insights" },
]

function Sidebar({ weather, loading }) {
  const temperature = weather ? Math.round(weather.temperature) : 27
  const condition = weather?.condition || "Sunny"

  return (
    <aside className="sidebar">
      <div className="logo">TEMPORA</div>

      <section className="sidebarWeather">
        <span className="bigWeatherIcon" aria-hidden="true" />
        <p>{loading ? "Loading..." : "New York, USA"}</p>
        <strong>{temperature}&deg;</strong>
        <span>{condition}</span>
      </section>

      <nav className="navLinks" aria-label="Main navigation">
        {links.map((link) => (
          <NavLink to={link.path} key={link.label}>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
