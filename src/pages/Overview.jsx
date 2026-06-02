import "../styles/overview.css"

const hours = [
  { time: "Now", icon: "sunny", temp: 27, rain: 23 },
  { time: "11:00", icon: "sunny", temp: 28, rain: 29 },
  { time: "12:00", icon: "cloudy", temp: 28, rain: 58 },
  { time: "13:00", icon: "cloudy", temp: 29, rain: 75 },
  { time: "14:00", icon: "sunny", temp: 30, rain: 33 },
  { time: "15:00", icon: "cloudy", temp: 29, rain: 20 },
  { time: "16:00", icon: "cloudy", temp: 29, rain: 73 },
  { time: "17:00", icon: "sunny", temp: 28, rain: 49 },
]

const metricCards = [
  {
    title: "Humidity",
    icon: "drop",
    value: "82%",
    label: "bad",
    marks: ["good", "normal", "bad"],
    fill: 82,
  },
  {
    title: "Wind",
    icon: "wind",
    value: "8 km/h",
    label: "",
    gauge: true,
  },
  {
    title: "Precipitation",
    icon: "rain",
    value: "1.4 cm",
    label: "",
    marks: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90"],
    fill: 14,
  },
  {
    title: "UV index",
    icon: "uv",
    value: "4",
    label: "medium",
    marks: ["0-2", "3-5", "6-7", "8-10", "11+"],
    fill: 36,
  },
  {
    title: "Feels like",
    icon: "thermo",
    value: "30&deg;",
    label: "",
    marks: ["0&deg;", "25&deg;", "50&deg;"],
    fill: 64,
  },
  {
    title: "Chance of rain",
    icon: "umbrella",
    value: "42%",
    label: "",
    marks: ["0%", "25%", "50%", "75%", "100%"],
    fill: 42,
  },
]

function WeatherIcon({ type }) {
  return <span className={`weatherIcon weatherIcon-${type}`} aria-hidden="true" />
}

function MetricIcon({ type }) {
  return <span className={`metricIcon metricIcon-${type}`} aria-hidden="true" />
}

function MetricCard({ card }) {
  return (
    <article className={`card ${card.gauge ? "windCard" : ""}`}>
      <div className="cardHeader">
        <h4>{card.title}</h4>
        <MetricIcon type={card.icon} />
      </div>

      {card.gauge ? (
        <div className="windGauge" aria-hidden="true">
          <span className="gaugeTick gaugeTick-0">0</span>
          <span className="gaugeTick gaugeTick-10">10</span>
          <span className="gaugeTick gaugeTick-20">20</span>
          <span className="gaugeTick gaugeTick-30">30</span>
          <span className="gaugeTick gaugeTick-40">40</span>
          <div className="gaugeArc" />
          <div className="gaugeNeedle" />
        </div>
      ) : null}

      <div className="metricValue">
        <strong dangerouslySetInnerHTML={{ __html: card.value }} />
        {card.label ? <span>{card.label}</span> : null}
      </div>

      {!card.gauge ? (
        <div className="meterBlock">
          <div className="meterLabels">
            {card.marks.map((mark) => (
              <span key={mark} dangerouslySetInnerHTML={{ __html: mark }} />
            ))}
          </div>
          <div className="meterTrack">
            <span style={{ width: `${card.fill}%` }} />
          </div>
        </div>
      ) : null}
    </article>
  )
}

function Overview() {
  return (
    <main className="page">
      <section className="weatherPanel" aria-label="Current weather">
        <div className="panelTop">
          <button className="iconButton" aria-label="Add city">+</button>
          <div className="unitToggle" aria-label="Temperature unit">
            <span className="toggleDot active" />
            <span className="toggleDot" />
            <span className="toggleDot" />
            <b>&deg;C</b>
            <span className="toggleSwitch" />
            <b>&deg;F</b>
          </div>
        </div>

        <div className="location">
          <p>New York, USA</p>
          <span>Today 28 Sept</span>
          <div className="sunTimes">
            <span>07:19</span>
            <span>19:32</span>
          </div>
        </div>

        <div className="weatherContent">
          <button className="panelArrow leftArrow" aria-label="Previous city" />
          <div>
            <div className="temp">27&deg;</div>
            <p className="condition">Sunny</p>
          </div>
          <button className="panelArrow rightArrow" aria-label="Next city" />
        </div>

        <div className="sun" aria-hidden="true" />
        <div className="cityScene" aria-hidden="true">
          <span className="tower towerOne" />
          <span className="tower towerTwo" />
          <span className="tower towerThree" />
          <span className="tower towerFour" />
          <span className="tower towerFive" />
        </div>
      </section>

      <section className="dashboard" aria-label="Weather details">
        <header className="header">
          <div>
            <h1>Welcome back Isabella!</h1>
            <p>Check out today's weather information</p>
          </div>
          <div className="headerActions">
            <button className="menuButton" aria-label="More options">
              <span />
              <span />
              <span />
            </button>
            <div className="avatar" aria-label="Isabella profile" />
          </div>
        </header>

        <section className="timeline" aria-label="Upcoming hours">
          <div className="timelineHeader">
            <h3>Upcoming hours</h3>
            <div className="timelineActions">
              <button>Rain precipitation</button>
              <button>Next days</button>
            </div>
          </div>

          <div className="hours">
            {hours.map((hour) => (
              <div className="hour" key={hour.time}>
                <p>{hour.time}</p>
                <WeatherIcon type={hour.icon} />
                <strong>{hour.temp}&deg;</strong>
                <span className="rainLine" />
                <small>{hour.rain}%</small>
              </div>
            ))}
          </div>
          <div className="chartFill" aria-hidden="true" />
        </section>

        <h2>More details of today's weather</h2>

        <section className="stats" aria-label="Detailed weather metrics">
          {metricCards.map((card) => (
            <MetricCard card={card} key={card.title} />
          ))}
        </section>
      </section>
    </main>
  )
}

export default Overview
