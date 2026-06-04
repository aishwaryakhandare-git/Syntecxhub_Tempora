import { NavLink } from "react-router-dom"

const links = [
  { path: "/", label: "Overview" },
  { path: "/forecast", label: "Forecast" },
  { path: "/atmosphere", label: "Atmosphere" },
  { path: "/insights", label: "Insights" },
]

function Sidebar({ weather }) {
  const temperature = weather ? Math.round(weather.temperature) : 27
  const condition = weather?.condition || "Sunny"
  const location = weather?.location || "Mumbai, India"

  return (
    <aside className="sidebar">
      <div className="logo">TEMPORA</div>

      <section className="sidebarWeather">
        <span className="bigWeatherIcon" aria-hidden="true" />
        <p>{location}</p>
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
