import { NavLink } from "react-router-dom"

const links = [
  { path: "/", label: "Overview", code: "O" },
  { path: "/forecast", label: "Forecast", code: "F" },
  { path: "/atmosphere", label: "Atmosphere", code: "A" },
  { path: "/insights", label: "Insights", code: "I" },
]

function Sidebar({ weather }) {
  const temperature = weather ? Math.round(weather.temperature) : 27
  const condition = weather?.condition || "Sunny"
  const location = weather?.location || "Mumbai, India"

  return (
    <aside className="sidebar">
      <div className="logo">
        <span className="logoMark" aria-hidden="true" />
        TEMPORA
      </div>

      <section className="sidebarWeather">
        <div className="weatherTopline">
          <span className="bigWeatherIcon" aria-hidden="true" />
          <span>Live</span>
        </div>
        <p>{location}</p>
        <strong>{temperature}&deg;</strong>
        <span>{condition}</span>
      </section>

      <nav className="navLinks" aria-label="Main navigation">
        {links.map((link) => (
          <NavLink to={link.path} key={link.label}>
            <span className="navIcon">{link.code}</span>
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="sidebarFooter">
        <span>Powered by Open-Meteo</span>
      </div>
    </aside>
  )
}

export default Sidebar
