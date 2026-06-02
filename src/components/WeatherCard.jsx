function WeatherCard({ title, value, label, fill = 50 }) {
  return (
    <article className="weatherCard">
      <div className="cardTop">
        <h3>{title}</h3>
        <span className="cardIcon" aria-hidden="true" />
      </div>
      <div className="cardValue">
        <strong>{value}</strong>
        {label ? <span>{label}</span> : null}
      </div>
      <div className="progressTrack">
        <span style={{ width: `${fill}%` }} />
      </div>
    </article>
  )
}

export default WeatherCard
